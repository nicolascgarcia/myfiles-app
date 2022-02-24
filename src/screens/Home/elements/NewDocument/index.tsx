/* eslint-disable react/jsx-fragments */
import React, { useState } from 'react';
import { Container, CustomTextInput, MainButton, Text } from '@/components';
import { useAPI } from '@/context/APIContext';

type NewDocumentProps = {
	closeSheet: () => void;
};

export default function NewDocument({ closeSheet }: NewDocumentProps) {
	const [title, onChangeTitle] = useState<string>('');
	const [version, onChangeVersion] = useState<string>('');

	const { addData } = useAPI();

	const submit = (): void => {
		addData(title, version);
		onChangeTitle('');
		onChangeVersion('');
		closeSheet();
	};

	return (
		<>
			<Container>
				<Text color='#333333' fontWeight='bold' fontSize={16}>
					Documents informations
				</Text>
				<Container mt={2}>
					<CustomTextInput
						value={title}
						onChangeText={onChangeTitle}
						label='Name'
						placeholder="File's name"
					/>
				</Container>
				<Container mt={2}>
					<CustomTextInput
						value={version}
						onChangeText={onChangeVersion}
						label='Version'
						placeholder='Current version'
					/>
				</Container>
			</Container>
			<MainButton label='Submit' onPress={submit} />
		</>
	);
}
