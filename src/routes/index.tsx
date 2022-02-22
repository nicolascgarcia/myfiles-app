import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@/screens';

export type RootStackParamList = {
	Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name='Home' component={Home} />
		</Navigator>
	);
}
