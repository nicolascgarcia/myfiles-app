import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainNavigator from '@/routes';
import APIManager from '@/context/APIContext';

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<APIManager>
				<NavigationContainer>
					<StatusBar barStyle='dark-content' backgroundColor='white' />
					<MainNavigator />
					<FlashMessage position='top' />
				</NavigationContainer>
			</APIManager>
		</GestureHandlerRootView>
	);
}
