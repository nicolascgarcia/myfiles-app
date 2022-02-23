/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import { API_URI } from '@env';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import notificationsWebsocket from '@/hooks/notificationsWebsocket';

type Props = {
	children: Element;
};

export type Document = {
	Attachments: Array<string>;
	Contributors: Array<{ ID: string; Name: string }>;
	CreatedAt: string;
	ID: string;
	Title: string;
	UpdatedAt: string;
	Version: string;
};

type APIContextType = {
	APILoading: boolean;
	APIItems: Array<Document>;
	getData: () => void;
};

export const APIContext = createContext<APIContextType>({
	APILoading: false,
	getData: () => {},
	APIItems: [],
});

export const useAPI = () => useContext<APIContextType>(APIContext);

export default function APIManager({ children }: Props) {
	const [APIItems, setAPIItems] = useState<Array<Document>>([]);
	const [APILoading, setAPILoading] = useState<boolean>(false);

	notificationsWebsocket({ showMessage });

	const getData = () => {
		setAPILoading(true);
		fetch(API_URI, { method: 'get' })
			.then((res) => {
				res.json().then((data) => {
					setAPIItems(data);
				});
			})
			.catch(() => {
				showMessage({
					message: `There was an internal error. Try again later`,
					duration: 2000,
					floating: true,
					type: 'danger',
				});
			})
			.finally(() => {
				setAPILoading(false);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<APIContext.Provider
			value={{
				APILoading,
				getData,
				APIItems,
			}}
		>
			{children}
		</APIContext.Provider>
	);
}
