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
} from 'react-native-reanimated';
import Container from '../Container';
import Text from '../Text';
import XSVG from '@/assets/x.svg';
import DownSVG from '@/assets/down.svg';
import SPRING_CONFIG from '@/utils/springConfig';
import { animatedViewStyle } from './style';

export type BottomSheetRef = {
	openSheet: () => void;
	closeSheet: () => void;
};

type BottomSheetProps = {
	children: ReactElement;
	title: string;
};

export default forwardRef<BottomSheetRef, BottomSheetProps>(
	({ children, title }, ref) => {
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
				<Animated.View style={[animatedViewStyle, style]}>
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
	}
);
