import { connect } from '@wp-g2/provider';
import { BaseView } from '@wp-g2/styled';
import React from 'react';
import { useDisclosureState } from 'reakit/Disclosure';

import { CollapsibleContext, useAnimatedState } from './Collapsible.utils';

function Collapsible({
	animated = true,
	animationDuration = 160,
	animationTimingFunction = 'ease',
	children,
	visible,
	...props
}) {
	const disclosure = useDisclosureState({
		animated: animated ? animationDuration : undefined,
		visible,
	});
	const animatedState = useAnimatedState({
		animating: disclosure.animating,
		visible: disclosure.visible,
	});

	const contextValue = {
		animatedState,
		animationDuration,
		animationTimingFunction,
		disclosure,
	};

	return (
		<CollapsibleContext.Provider value={contextValue}>
			<BaseView {...props}>{children}</BaseView>
		</CollapsibleContext.Provider>
	);
}

export default connect(Collapsible);