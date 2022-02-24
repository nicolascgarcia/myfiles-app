declare module '*.svg' {
	import React from 'react';
	import { SvgProps } from 'react-native-svg';

	const content: React.FC<SvgProps>;
	export default content;
}

declare module '@env' {
	export const WEBHOOK_URI: string;
	export const API_URI: string;
}
