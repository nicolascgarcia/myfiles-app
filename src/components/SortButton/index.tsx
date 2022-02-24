/* eslint-disable react/jsx-fragments */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { SortEnum, useAPI } from '@/context/APIContext';
import Container from '../Container';
import Text from '../Text';
import SPRING_CONFIG from '@/utils/springConfig';
import { animatedViewStyle } from './style';

export default function SortButton() {
	const { sortData } = useAPI();

	const left = useSharedValue(-100);

	const style = useAnimatedStyle<{ left: number }>(() => ({
		left: withSpring(left.value, SPRING_CONFIG),
	}));

	const showModal = (): void => {
		left.value = withSpring(18, SPRING_CONFIG);
	};

	const hideModal = (): void => {
		left.value = withSpring(-100, SPRING_CONFIG);
	};

	const sortByTitle = (): void => {
		sortData(SortEnum.TITLE);
		hideModal();
	};

	const sortByDate = (): void => {
		sortData(SortEnum.RECENT);
		hideModal();
	};

	return (
		<>
			<TouchableOpacity onPress={showModal}>
				<Container
					borderColor='#a1a1a142'
					borderRadius={8}
					borderWidth={1.5}
					p={2}
				>
					<Text fontWeight='bold' color='#333333'>
						Sort
					</Text>
				</Container>
			</TouchableOpacity>
			<Animated.View style={[animatedViewStyle, style]}>
				<TouchableOpacity onPress={sortByTitle} style={{ marginBottom: 5 }}>
					<Text fontWeight='bold' fontSize={16} color='#333333'>
						A - Z
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={sortByDate}>
					<Text fontWeight='bold' fontSize={16} color='#333333'>
						Recent
					</Text>
				</TouchableOpacity>
			</Animated.View>
		</>
	);
}
