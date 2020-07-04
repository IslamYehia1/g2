import { is, isEmpty } from '@g2/utils';

import { baseTheme } from '../theme';
import { colorize, rgba } from '../themeHelpers';

export function mergeThemeProps(props = {}, theme) {
	let mergedProps = props;

	if (is.undefined(props.theme)) {
		mergedProps = {};
		for (let key in props) {
			mergedProps[key] = props[key];
		}
		mergedProps.theme = isEmpty(theme) ? baseTheme : theme;
	}

	mergedProps.theme = enhanceThemeWithMixins(mergedProps.theme);

	return mergedProps;
}

export function enhanceThemeWithMixins(themeContext) {
	if (!themeContext) {
		return themeContext;
	}
	// Mixins
	if (!themeContext.utils) {
		themeContext.utils = {};
	}
	themeContext.utils.colorize = colorize;
	themeContext.utils.rgba = rgba;

	return themeContext;
}

export function getDisplayName(tagName) {
	const displayName = is.string(tagName)
		? tagName
		: tagName.displayName || tagName.name || 'Component';

	return displayName;
}
