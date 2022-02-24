import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useState,
	ReactElement,
} from 'react';
import { Keyboard, TouchableOpacity, useWindowDimensions } from 'react-native';
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	WithSpringConfig,
} from 'react-native-reanimated';
import Container from '../Container';
import Text from '../Text';
import XSVG from '@/assets/x.svg';
import DownSVG from '@/assets/down.svg';

const SPRING_CONFIG: WithSpringConfig = {
	damping: 80,
	overshootClamping: true,
	restDisplacementThreshold: 0.1,
	restSpeedThreshold: 0.1,
	stiffness: 500,
};

export type BottomSheetRef = {
	openSheet: () => void;
	closeSheet: () => void;
};

type Props = {
	children: ReactElement;
	title: string;
};

export default forwardRef<BottomSheetRef, Props>(({ children, title }, ref) => {
	const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);

	const dimensions = useWindowDimensions();

	const top = useSharedValue(dimensions.height);

	const style = useAnimatedStyle<{ top: number }>(() => ({
		top: withSpring(top.value, SPRING_CONFIG),
	}));

	const gestureHandler = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		{ startTop: number }
	>({
		onStart(_, context) {
			context.startTop = top.value;
		},
		onActive(event, context) {
			top.value = context.startTop + event.translationY;
		},
		onEnd() {
			if (top.value > dimensions.height / 2 + 200) {
				top.value = dimensions.height;
			} else {
				top.value = dimensions.height / 2;
			}
		},
	});

	const openSheet = (): void => {
		top.value = withSpring(dimensions.height / 2, SPRING_CONFIG);
	};

	const closeSheet = (): void => {
		if (keyboardStatus) {
			Keyboard.dismiss();
		} else {
			top.value = dimensions.height;
		}
	};

	useImperativeHandle<BottomSheetRef, BottomSheetRef>(ref, () => ({
		openSheet,
		closeSheet,
	}));

	useEffect(() => {
		const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
			top.value = withSpring(20, SPRING_CONFIG);
			setKeyboardStatus(true);
		});
		const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
			top.value = withSpring(dimensions.height / 2, SPRING_CONFIG);
			setKeyboardStatus(false);
		});

		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, []);

	return (
		<PanGestureHandler onGestureEvent={gestureHandler}>
			<Animated.View
				style={[
					{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'white',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						shadowColor: '#000',
						shadowOffset: {
							width: 50,
							height: 20,
						},
						shadowOpacity: 1,
						shadowRadius: 10,
						elevation: 10,
						padding: 15,
						justifyContent: 'space-between',
					},
					style,
				]}
			>
				<Container
					flexDirection='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Text fontWeight='bold' color='#333333' fontSize={22}>
						{title}
					</Text>
					<TouchableOpacity onPress={closeSheet}>
						{keyboardStatus ? (
							<DownSVG width={15} height={15} />
						) : (
							<XSVG width={15} height={15} />
						)}
					</TouchableOpacity>
				</Container>
				{children}
			</Animated.View>
		</PanGestureHandler>
	);
});
