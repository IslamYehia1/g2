import { connect } from '@wp-g2/provider';
import { cx, ns } from '@wp-g2/styles';
import React from 'react';
import { DisclosureContent } from 'reakit/Disclosure';

import { AnimatedView } from '../AnimatedView';
import { useCollapsibleContext } from './Collapsible.Context';
import { InnerContentView } from './Collapsible.styles';
import * as styles from './Collapsible.styles';

function CollapsibleContent({ children, className, forwardedRef, ...props }) {
	const { disclosure } = useCollapsibleContext();

	const isVisible = disclosure.visible;
	const classes = cx([styles.CollapsibleContent, className]);

	return (
		<DisclosureContent
			className={classes}
			ref={forwardedRef}
			{...props}
			{...disclosure}
		>
			<InnerContentView
				animate={{
					height: isVisible ? 'auto' : 0,
					opacity: isVisible ? 1 : 0,
				}}
				as={AnimatedView}
				initial={false}
				transition={{ duration: 0.2 }}
				{...ns('CollapsibleInnerContent')}
			>
				{children}
			</InnerContentView>
		</DisclosureContent>
	);
}

export default connect(CollapsibleContent);
