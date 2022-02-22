import React from 'react';
import Container from '../Container';
import Text from '../Text';

export default function SortButton() {
	return (
		<Container borderColor='#a1a1a142' borderRadius={8} borderWidth={1.5} p={2}>
			<Text fontWeight='bold' color='#333333'>
				Sort by
			</Text>
		</Container>
	);
}
