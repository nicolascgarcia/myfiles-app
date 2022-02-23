import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import {
	CellCard,
	Container,
	ListSwitch,
	SortButton,
	Text,
} from '@/components';
import BellSVG from '@/assets/bell.svg';
import { ListTypeEnum } from '@/components/ListSwitch';
import { Document, useAPI } from '@/context/APIContext';

export default function Home() {
	const [listType, setListType] = useState<ListTypeEnum>(ListTypeEnum.CELLS);

	const { APIItems, APILoading, getData } = useAPI();

	const renderItem = ({ item, index }: { item: Document; index: number }) => (
		<CellCard document={item} listType={listType} position={index} />
	);

	const keyExtractor = (item: Document) => item.ID;

	return (
		<Container flex={1} justifyContent='space-between' bg='white'>
			<Container p={3} flexDirection='row' justifyContent='space-between'>
				<Text fontWeight='bold' color='#333333' fontSize={22}>
					Documents
				</Text>
				<TouchableOpacity onPress={() => {}}>
					<Container
						borderColor='#a1a1a142'
						borderRadius={8}
						borderWidth={1.5}
						p={2}
					>
						<BellSVG width={20} height={20} />
					</Container>
				</TouchableOpacity>
			</Container>
			<Container flex={1} bg='#f0f0f0'>
				<Container flexDirection='row' justifyContent='space-between' p={3}>
					<SortButton />
					<ListSwitch switchType={setListType} type={listType} />
				</Container>
				<FlatList
					data={APIItems}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
					numColumns={listType === ListTypeEnum.LIST ? 1 : 2}
					key={listType === ListTypeEnum.LIST ? 'listType' : 'cellType'}
					contentContainerStyle={{
						paddingHorizontal: 15,
					}}
					refreshing={APILoading}
					onRefresh={getData}
				/>
			</Container>
			<Container
				borderColor='#a1a1a142'
				borderTopWidth={1.5}
				p={3}
				bg='#f0f0f0'
			>
				<TouchableOpacity onPress={() => {}}>
					<Container
						bg='#0781d3'
						alignItems='center'
						padding={3}
						borderRadius={10}
					>
						<Text fontWeight='bold'>Add document</Text>
					</Container>
				</TouchableOpacity>
			</Container>
		</Container>
	);
}
