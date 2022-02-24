/* eslint-disable import/prefer-default-export */
import { ViewStyle } from 'react-native';

export const animatedViewStyle: ViewStyle = {
	backgroundColor: 'white',
	position: 'absolute',
	top: 60,
	zIndex: 1,
	paddingVertical: 10,
	paddingHorizontal: 20,
	borderRadius: 10,
	shadowColor: '#000',
	shadowOffset: {
		width: 0,
		height: 4,
	},
	shadowOpacity: 0.3,
	shadowRadius: 4.65,
	elevation: 8,
};
