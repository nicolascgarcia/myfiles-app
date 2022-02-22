import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import MainNavigator from '@/routes';
import APIManager from '@/context/APIContext';

export default function App() {
	return (
		<APIManager>
			<NavigationContainer>
				<StatusBar barStyle='dark-content' backgroundColor='white' />
				<MainNavigator />
				<FlashMessage position='top' />
			</NavigationContainer>
		</APIManager>
	);
}
