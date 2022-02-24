import React from 'react';
import { TextInput } from 'react-native';
import Container from '../Container';
import Text from '../Text';

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
				style={{
					marginTop: 5,
					paddingHorizontal: 15,
					color: 'black',
					borderWidth: 1,
					borderRadius: 10,
					borderColor: '#a1a1a142',
				}}
				placeholderTextColor='grey'
				onChangeText={onChangeText}
				value={value}
				placeholder={placeholder}
			/>
		</Container>
	);
}
