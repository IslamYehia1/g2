import { render } from '@testing-library/react';
import React from 'react';

import { Animated } from '../index';

describe('props', () => {
	test('should render correctly', () => {
		const { container } = render(<Animated>I like warm hugs</Animated>);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('should render as another HTML tag', () => {
		const { container } = render(
			<Animated as="span">I like warm hugs</Animated>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('should render with auto animations', () => {
		const { container } = render(
			<Animated auto>I like warm hugs</Animated>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
