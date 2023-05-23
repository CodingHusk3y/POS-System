import { useCallback, useState } from 'react';
import update from 'immutability-helper';
import CardComponent from '../../general/Card';
import { TStaff } from '../../general/Card/types';
import { Typography } from '@mui/material';
import './index.css';
import CollapsableBox from '@/components/general/Collapsable-Box';

type CardType = {
	id: number;
	service: string;
	appointment: string;
	request: string;
	waited: string;
	staffInfo: TStaff;
};

const WaitingList = () => {
	const [cards, setCards] = useState<CardType[]>([
		{
			id: 1,
			staffInfo: {
				name: 'Khang',
				avatar: 'https://i.ibb.co/NWtY0dV/avataaars-2.png',
				status: 'Appointment',
			},
			service: 'Fullset + Design',
			appointment: 'Yes',
			request: 'Staff 1',
			waited: '15 mins',
		},
		{
			id: 2,
			staffInfo: {
				name: 'Linh',
				avatar: 'https://i.ibb.co/n7rByvr/avataaars-1.png',
				status: 'Walk-in',
			},
			service: 'Fullset + Design',
			appointment: 'Yes',
			request: 'Staff 1',
			waited: '30 mins',
		},
		{
			id: 3,
			staffInfo: {
				name: 'Dung',
				avatar: 'https://i.ibb.co/XFTK2Vg/avataaars.png',
				status: 'Appointment',
			},

			service: 'Fullset + Design',
			appointment: 'Yes',
			request: 'Staff 2',
			waited: '45 mins',
		},
		{
			id: 4,
			staffInfo: {
				name: 'Binh',
				avatar: 'https://i.ibb.co/n7rByvr/avataaars-1.png',
				status: 'Walk-in',
			},
			service: 'Fullset + Design',
			appointment: 'No',
			request: 'Any Staff',
			waited: '10 mins',
		},
	]);

	const refetchCard = useCallback((dragIndex: number, hoverIndex: number) => {
		setCards((prevCards: CardType[]) =>
			update(prevCards, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevCards[dragIndex] as CardType],
				],
			})
		);
	}, []);
	return (
		<div id="WaitingList" style={{ height: '87vh' }}>
			<Typography align="center" variant="h4" fontWeight="bold">
				Waiting List
			</Typography>
			<CollapsableBox title="Waiting list" className="card_container">
				{cards.map((card, index) => (
					<CardComponent
						key={card.id}
						setCards={refetchCard}
						item={card}
						isDraggable
						index={index}
						headerInfo={card.staffInfo}
					/>
				))}
			</CollapsableBox>
		</div>
	);
};

export default WaitingList;
