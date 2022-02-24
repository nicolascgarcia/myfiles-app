import React from 'react';
import { TouchableOpacity } from 'react-native';
import Container from '../Container';
import ListSVG from '@/assets/list.svg';
import TableCellsSVG from '@/assets/table-cells.svg';
import { buttonStyle } from './style';

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
				style={[
					buttonStyle,
					{
						backgroundColor: type === ListTypeEnum.LIST ? 'white' : undefined,
						borderTopLeftRadius: 8,
						borderBottomLeftRadius: 8,
					},
				]}
			>
				<ListSVG width={15} height={15} color='blue' />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => switchType(ListTypeEnum.CELLS)}
				style={[
					buttonStyle,
					{
						backgroundColor: type === ListTypeEnum.CELLS ? 'white' : undefined,
						borderTopRightRadius: 8,
						borderBottomRightRadius: 8,
					},
				]}
			>
				<TableCellsSVG width={15} height={15} />
			</TouchableOpacity>
		</Container>
	);
}
