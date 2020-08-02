import { css, get } from '@wp-g2/styles';

export const PopoverContent = css`
	opacity: 0;
	outline: none;
	transform-origin: center center;
	transition: opacity ${get('transitionDurationFastest')} linear;
	width: 100%;
	z-index: 9999;

	&[data-enter] {
		opacity: 1;
	}
`;
