import React from 'react';
import styled from 'styled-components';
import { Text, TextProps } from 'react-native';
import {
	compose,
	flexbox,
	layout,
	typography,
	color,
	FlexboxProps,
	LayoutProps,
	TypographyProps,
	ColorProps,
} from 'styled-system';

type CustomTextProps = TextProps &
	FlexboxProps &
	LayoutProps &
	TypographyProps &
	ColorProps;

function CustomText(props: CustomTextProps) {
	return <Text {...props} />;
}

export default styled(CustomText)(compose(flexbox, layout, typography, color));
