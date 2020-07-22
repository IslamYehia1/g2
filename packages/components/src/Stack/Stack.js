import { connect, hasNamespace } from '@wp-g2/provider';
import { useResponsiveValue } from '@wp-g2/styled-components';
import { getValidChildren } from '@wp-g2/utils';
import React from 'react';

import { Flex } from '../Flex';
import StackItem from './StackItem';

function Stack({
	align = null,
	children,
	direction = 'column',
	gap = 2,
	justify = 'space-between',
	...props
}) {
	const validChildren = getValidChildren(children);
	const _direction = useResponsiveValue(direction);

	const clonedChildren = validChildren.map((child, index) => {
		const isColumn = _direction === 'column';
		const isLast = index + 1 === validChildren.length;

		const _key = child.key || index;
		const _isSubComponent = hasNamespace(child, [
			'StackItem',
			'FlexItem',
			'FlexBlock',
		]);

		const _child = _isSubComponent ? (
			child
		) : (
			<StackItem key={_key}>{child}</StackItem>
		);

		const childProps = {
			display: isColumn ? 'block' : undefined,
		};

		if (!isLast) {
			if (isColumn) {
				childProps.mb = gap;
			} else {
				childProps.mr = gap;
			}
		}

		return React.cloneElement(_child, childProps);
	});

	return (
		<Flex {...props} align={align} direction={direction} justify={justify}>
			{clonedChildren}
		</Flex>
	);
}

export default connect(Stack);
