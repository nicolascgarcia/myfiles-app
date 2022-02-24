import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../Container';
import Text from '../Text';

type MainButtonProps = {
	onPress: () => void;
	label: string;
};

export default function MainButton({ onPress, label }: MainButtonProps) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Container bg='#0781d3' alignItems='center' padding={3} borderRadius={10}>
				<Text fontWeight='bold'>{label}</Text>
			</Container>
		</TouchableOpacity>
	);
}
