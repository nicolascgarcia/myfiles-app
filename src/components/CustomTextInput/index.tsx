import React from 'react';
import { TextInput } from 'react-native';
import Container from '../Container';
import Text from '../Text';
import { texInputStyle } from './style';

type TextInputProps = {
	value: string;
	onChangeText: (text: string) => void;
	label: string;
	placeholder: string;
};

export default function CustomTextInput({
	value,
	onChangeText,
	label,
	placeholder,
}: TextInputProps) {
	return (
		<Container>
			<Text color='#333333' fontWeight='bold' fontSize={14}>
				{label}
			</Text>
			<TextInput
				style={texInputStyle}
				placeholderTextColor='grey'
				onChangeText={onChangeText}
				value={value}
				placeholder={placeholder}
			/>
		</Container>
	);
}
