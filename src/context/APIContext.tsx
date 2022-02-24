/* eslint-disable react/jsx-no-constructed-context-values */
import { API_URI } from '@env';
import React, {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from 'react';
import { showMessage } from 'react-native-flash-message';
import { faker } from '@faker-js/faker';
import notificationsWebsocket from '@/hooks/notificationsWebsocket';

type Props = {
	children: ReactElement;
};

type Contributors = { ID: string; Name: string };

export type Document = {
	Attachments: Array<string>;
	Contributors: Array<Contributors>;
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
	addData: (title: string, version: string) => void;
};

export const APIContext = createContext<APIContextType>({
	APILoading: false,
	getData: () => {},
	addData: () => {},
	APIItems: [],
});

export const useAPI = () => useContext<APIContextType>(APIContext);

export default function APIManager({ children }: Props) {
	const [APIItems, setAPIItems] = useState<Array<Document>>([]);
	const [APILoading, setAPILoading] = useState<boolean>(false);

	notificationsWebsocket({ showMessage });

	const addData = (title: string, version: string) => {
		const contributors: Contributors[] = Array.from(
			{ length: Math.floor(Math.random() * 3) },
			() => ({ ID: faker.datatype.uuid(), Name: faker.name.findName() })
		);

		const newData: Document = {
			ID: faker.datatype.uuid(),
			Title: title,
			Version: version,
			Attachments: ['Pilsner', 'Merican Aple', 'Super Bock'],
			Contributors: contributors,
			CreatedAt: new Date().toISOString(),
			UpdatedAt: new Date().toISOString(),
		};

		const currentItems = [newData, ...APIItems];

		setAPIItems(currentItems);
	};

	const getData = () => {
		setAPILoading(true);
		// eslint-disable-next-line no-undef
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
				addData,
				APIItems,
			}}
		>
			{children}
		</APIContext.Provider>
	);
}
