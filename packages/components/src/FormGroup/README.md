---
title: FormGroup
type: forms
description: '`FormGroup` is a form component that groups a label with a form element (e.g. `Switch` or `TextInput`).'
slug: /components/formgroup/
keywords: ['formgroup', 'form', 'layout']
---

# Button

`FormGroup` is a form component that groups a label with a form element (e.g. `Switch` or `TextInput`).

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Usage](#usage)
-   [Props](#props)
-   [See Also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- Automatically Generated. DO NOT EDIT THIS FILE. -->
<!-- Instead, edit packages/website/src/docs/components/forms/formgroup.mdx -->

<!-- props -->

<!-- Automatically Generated -->

## Usage

```jsx live
import { FormGroup, TextInput } from '@wp-g2/components';

function Example() {
	return (
		<FormGroup label="First name">
			<TextInput />
		</FormGroup>
	);
}
```

## Props

##### align

**Type**: `CSS['alignItems']`

Adjusts the block alignment of children.

##### alignLabel

**Type**: `Pick<TextProps, "align">`

Aligns the label within `FormGroup`.

##### alignment

**Type**: `GridAlignment`

Adjusts the horizontal and vertical alignment of children.

##### columns

**Type**: `number`,`(number`,`null)[]`

Adjusts the number of columns of the `Grid`.

##### gap

**Type**: `number`

Gap between each child.

##### horizontal

**Type**: `boolean`

Displays the label and form field horizontally.

##### isInline

**Type**: `boolean`

Changes the CSS display from `grid` to `inline-grid`.

##### justify

**Type**: `CSS['justifyContent']`

Adjusts the inline alignment of children.

##### label

**Type**: `string`

Label of the form field.

##### rows

**Type**: `number`,`(number`,`null)[]`

Adjusts the number of rows of the `Grid`.

##### templateColumns

**Type**: `CSS['gridTemplateColumns']`

Adjusts the CSS grid `template-columns`.

##### templateRows

**Type**: `CSS['gridTemplateRows']`

Adjusts the CSS grid `template-rows`.

<!-- /Automatically Generated -->
<!-- /props -->

## See Also

-   [TextInput](../textinput/)
-   [Select](../select/)
-   [Switch](../switch/)
