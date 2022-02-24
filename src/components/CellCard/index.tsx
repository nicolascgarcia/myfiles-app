import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Share, TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Container from '../Container';
import Text from '../Text';
import UsersSVG from '@/assets/users.svg';
import LinkSVG from '@/assets/link.svg';
import ShareSVG from '@/assets/share.svg';
import { ListTypeEnum } from '../ListSwitch';
import { Document } from '@/context/APIContext';
import { shadowStyle } from './style';

type CellCardProps = {
	document: Document;
	listType: ListTypeEnum;
	position: number;
};

export default function CellCard({
	document: { Attachments, Contributors, Title, Version, CreatedAt },
	listType,
	position,
}: CellCardProps) {
	const onShare = async (): Promise<void> => {
		try {
			await Share.share({
				message: `Hey there, I am sharing a document with you called ${Title}. I hope you like it!`,
			});
		} catch (error) {
			showMessage({
				message: `There was an error. Try again`,
				duration: 2000,
				floating: true,
				type: 'danger',
			});
		}
	};

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
					<Container flex={1}>
						<Text fontWeight='bold' color='#333333' numberOfLines={1}>
							{Title}
						</Text>
					</Container>
					<Container ml={2} justifyContent='flex-end'>
						<Text color='grey' fontWeight='bold' fontSize={10}>
							{`Version ${Version}`}
						</Text>
					</Container>
				</Container>
				<Container my={2} flexDirection='row'>
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
								<Text color='grey' key={`${att}${Math.random() * 100}`}>
									{att}
								</Text>
							))}
						</Container>
					</Container>
				</Container>
				<Container
					flexDirection='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Text color='grey'>{`Created ${formatDistanceToNow(
						new Date(CreatedAt)
					)} ago`}</Text>
					<TouchableOpacity onPress={onShare}>
						<ShareSVG width={20} height={20} />
					</TouchableOpacity>
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
			style={shadowStyle}
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
