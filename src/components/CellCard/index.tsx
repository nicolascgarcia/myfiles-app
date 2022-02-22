import React from 'react';
import Container from '../Container';
import Text from '../Text';
import UsersSVG from '@/assets/users.svg';
import LinkSVG from '@/assets/link.svg';
import { ListTypeEnum } from '../ListSwitch';

export type Document = {
	Attachments: Array<string>;
	Contributors: Array<{ ID: string; Name: string }>;
	CreatedAt: string;
	ID: string;
	Title: string;
	UpdatedAt: string;
	Version: string;
};

type Props = {
	document: Document;
	listType: ListTypeEnum;
	position: number;
};

export default function CellCard({
	document: { Attachments, Contributors, Title, Version },
	listType,
	position,
}: Props) {
	if (listType === ListTypeEnum.LIST)
		return (
			<Container
				bg='white'
				mb={3}
				borderRadius={5}
				p={3}
				style={{
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 6,
				}}
			>
				<Container flexDirection='row'>
					<Text fontWeight='bold' color='#333333'>
						{Title}
					</Text>
					<Container ml={2} justifyContent='flex-end'>
						<Text color='grey' fontWeight='bold' fontSize={10}>
							{`Version ${Version}`}
						</Text>
					</Container>
				</Container>
				<Container mt={2} flexDirection='row'>
					<Container flex={1} flexDirection='row' flexWrap='wrap'>
						<Container justifyContent='center' mr={2}>
							<UsersSVG width={15} height={15} />
						</Container>
						<Text fontWeight='bold' color='#333333'>
							Contributors
						</Text>
						<Container width={1} pt={2}>
							{Contributors.map((contributor) => (
								<Text color='grey' key={contributor.ID}>
									{contributor.Name}
								</Text>
							))}
						</Container>
					</Container>

					<Container flex={1} flexDirection='row' flexWrap='wrap'>
						<Container justifyContent='center' mr={2}>
							<LinkSVG width={15} height={15} />
						</Container>
						<Text fontWeight='bold' color='#333333'>
							Attachments
						</Text>
						<Container width={1} pt={2}>
							{Attachments.map((att) => (
								<Text color='grey' key={att}>
									{att}
								</Text>
							))}
						</Container>
					</Container>
				</Container>
			</Container>
		);

	return (
		<Container
			bg='white'
			mb={3}
			borderRadius={5}
			mr={position % 2 === 0 ? 3 : 0}
			p={3}
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
				elevation: 6,
			}}
			flex={1 / 2}
		>
			<Text fontWeight='bold' color='#333333'>
				{Title}
			</Text>
			<Container mt={2} justifyContent='flex-end'>
				<Text color='grey' fontWeight='bold' fontSize={10}>
					{`Version ${Version}`}
				</Text>
			</Container>
		</Container>
	);
}
