import React from 'react';
import { ViewProps, View } from 'react-native';
import styled from 'styled-components';
import {
	background,
	border,
	compose,
	color,
	flexbox,
	layout,
	space,
	BackgroundProps,
	BorderProps,
	ColorProps,
	LayoutProps,
	FlexboxProps,
	SpaceProps,
} from 'styled-system';

type CustomViewProps = BackgroundProps &
	BorderProps &
	ColorProps &
	FlexboxProps &
	LayoutProps &
	SpaceProps &
	ViewProps;

function CustomView(props: CustomViewProps) {
	return <View {...props} />;
}

export default styled(CustomView)(
	compose(background, border, color, flexbox, layout, space)
);
