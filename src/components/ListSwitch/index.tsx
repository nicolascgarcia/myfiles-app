import React from 'react';
import { TouchableOpacity } from 'react-native';
import Container from '../Container';
import ListSVG from '@/assets/list.svg';
import TableCellsSVG from '@/assets/table-cells.svg';

export enum ListTypeEnum {
	'LIST' = 'LIST',
	'CELLS' = 'CELLS',
}

type ListSwitchProps = {
	switchType: (type: ListTypeEnum) => void;
	type: ListTypeEnum;
};

export default function ListSwitch({ switchType, type }: ListSwitchProps) {
	return (
		<Container
			flexDirection='row'
			borderColor='#a1a1a142'
			borderRadius={8}
			borderWidth={1.5}
		>
			<TouchableOpacity
				onPress={() => switchType(ListTypeEnum.LIST)}
				style={{
					backgroundColor: type === ListTypeEnum.LIST ? 'white' : undefined,
					paddingHorizontal: 25,
					alignItems: 'center',
					justifyContent: 'center',
					borderTopLeftRadius: 8,
					borderBottomLeftRadius: 8,
				}}
			>
				<ListSVG width={15} height={15} color='blue' />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => switchType(ListTypeEnum.CELLS)}
				style={{
					backgroundColor: type === ListTypeEnum.CELLS ? 'white' : undefined,
					paddingHorizontal: 25,
					alignItems: 'center',
					justifyContent: 'center',
					borderTopRightRadius: 8,
					borderBottomRightRadius: 8,
				}}
			>
				<TableCellsSVG width={15} height={15} />
			</TouchableOpacity>
		</Container>
	);
}
