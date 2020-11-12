import { Button as ReakitButton } from '@wp-g2/a11y';
import { Radio as ReakitRadio } from '@wp-g2/a11y';
import { contextConnect } from '@wp-g2/context';
import { FiChevronDown } from '@wp-g2/icons';
import { cx, ui } from '@wp-g2/styles';
import React from 'react';

import { useButtonGroupContext } from '../ButtonGroup';
import { Elevation } from '../Elevation';
import { FlexItem } from '../Flex';
import { Icon } from '../Icon';
import * as styles from './BaseButton.styles';
import LoadingOverlay from './BaseButtonLoadingOverlay';
import { useBaseButton } from './useBaseButton';

function BaseButton(props, forwardedRef) {
	const {
		children,
		disabled = false,
		elevation = 0,
		elevationActive,
		elevationFocus,
		elevationHover,
		hasCaret = false,
		href,
		icon,
		iconSize = 16,
		isActive = false,
		isDestructive = false,
		isFocused = false,
		isLoading = false,
		noWrap = true,
		prefix,
		suffix,
		...otherProps
	} = useBaseButton(props);
	const { buttonGroup } = useButtonGroupContext();
	const buttonGroupState = buttonGroup || {};

	const BaseComponent = buttonGroup ? ReakitRadio : ReakitButton;
	const as = href ? 'a' : 'button';

	return (
		<BaseComponent
			aria-busy={isLoading}
			as={as}
			data-active={isActive}
			data-destructive={isDestructive}
			data-focused={isFocused}
			data-icon={!!icon}
			disabled={disabled || isLoading}
			href={href}
			{...buttonGroupState}
			{...otherProps}
			ref={forwardedRef}
		>
			<LoadingOverlay isLoading={isLoading} />
			{prefix && (
				<FlexItem
					as="span"
					className={cx(
						styles.PrefixSuffix,
						isLoading && styles.loading,
					)}
					{...ui.$('ButtonPrefix')}
				>
					{prefix}
				</FlexItem>
			)}
			{icon && (
				<FlexItem
					as="span"
					className={cx(
						styles.PrefixSuffix,
						isLoading && styles.loading,
					)}
					{...ui.$('ButtonIcon')}
				>
					<Icon icon={icon} size={iconSize} />
				</FlexItem>
			)}
			{children && (
				<FlexItem
					as="span"
					className={cx(
						styles.Content,
						isLoading && styles.loading,
						noWrap && styles.noWrap,
					)}
					isBlock
					{...ui.$('ButtonContent')}
				>
					{children}
				</FlexItem>
			)}
			{suffix && (
				<FlexItem
					as="span"
					className={cx(
						styles.PrefixSuffix,
						isLoading && styles.loading,
					)}
					{...ui.$('ButtonSuffix')}
				>
					{suffix}
				</FlexItem>
			)}
			{hasCaret && (
				<FlexItem
					as="span"
					className={cx(
						styles.CaretWrapper,
						isLoading && styles.loading,
					)}
					{...ui.$('ButtonCaret')}
				>
					<Icon icon={<FiChevronDown />} size={16} />
				</FlexItem>
			)}
			<Elevation
				active={elevationActive}
				as="span"
				focus={elevationFocus}
				hover={elevationHover}
				offset={-1}
				value={elevation}
				{...ui.$('ButtonElevation')}
			/>
		</BaseComponent>
	);
}

export default contextConnect(BaseButton, 'BaseButton');
