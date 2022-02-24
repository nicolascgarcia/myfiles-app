import { ViewStyle } from 'react-native';

/* eslint-disable import/prefer-default-export */
export const animatedViewStyle: ViewStyle = {
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
};
