/* eslint-disable react/jsx-fragments */
import React, { useCallback, useRef, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import {
	BottomSheet,
	CellCard,
	Container,
	ListSwitch,
	MainButton,
	SortButton,
	Text,
} from '@/components';
import BellSVG from '@/assets/bell.svg';
import { ListTypeEnum } from '@/components/ListSwitch';
import { Document, useAPI } from '@/context/APIContext';
import { BottomSheetRef } from '@/components/BottomSheet';
import { NewDocument } from './elements';

export default function Home() {
	const [listType, setListType] = useState<ListTypeEnum>(ListTypeEnum.CELLS);

	const { APIItems, APILoading, getData } = useAPI();

	const sheetRef = useRef<BottomSheetRef>(null);

	const openSheet = useCallback(() => {
		sheetRef?.current?.openSheet();
	}, []);

	const closeSheet = useCallback(() => {
		sheetRef?.current?.closeSheet();
	}, []);

	const renderItem = ({ item, index }: { item: Document; index: number }) => (
		<CellCard document={item} listType={listType} position={index} />
	);

	const keyExtractor = (item: Document): string => item.ID;

	return (
		<>
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
					<MainButton label='Add document' onPress={openSheet} />
				</Container>
			</Container>
			<BottomSheet ref={sheetRef} title='Add document'>
				<NewDocument closeSheet={closeSheet} />
			</BottomSheet>
		</>
	);
}
