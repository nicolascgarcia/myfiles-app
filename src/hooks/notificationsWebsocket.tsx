/* eslint-disable no-undef */
import { useRef, useEffect } from 'react';
import { MessageOptions } from 'react-native-flash-message';
import { WEBHOOK_URI } from '@env';

type NotificationWebsocketProps = {
	showMessage: (options: MessageOptions) => void;
};

export default function notificationsWebsocket({
	showMessage,
}: NotificationWebsocketProps) {
	const ws = useRef(new WebSocket(WEBHOOK_URI)).current;

	useEffect(() => {
		ws.onclose = () => {
			showMessage({
				message: `You are disconnected. Check your internet and reopen the app`,
				duration: 2000,
				floating: true,
				type: 'danger',
			});
		};
		ws.onerror = () => {
			showMessage({
				message: `There was an internal error. Try again later`,
				duration: 2000,
				floating: true,
				type: 'danger',
			});
		};
		ws.onmessage = (e) => {
			showMessage({
				message: `A new document was added by ${JSON.parse(e.data).UserName}`,
				duration: 2000,
				floating: true,
				type: 'info',
			});
		};
	}, []);
}
