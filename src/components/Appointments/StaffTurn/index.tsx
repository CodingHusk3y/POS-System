import { useCallback, useState } from 'react';
import update from 'immutability-helper';
import CardComponent from '@/components/general/Card';
import { TStaff } from '@/components/general/Card/types';
import { Typography } from '@mui/material';
import './index.css';
import CollapsableBox from '@/components/general/Collapsable-Box';

type CardType = {
	id: number;
	staffInfo: TStaff;
	nextAppt: string;
	totalAppts: string;
	isTimeReached: boolean | null;
	timeOnService: string | null;
};
const StaffTurn = () => {
	const [cards, setCards] = useState<CardType[]>([
		{
			id: 1,
			staffInfo: {
				name: 'Staff 1',
				avatar: 'https://i.ibb.co/n7rByvr/avataaars-1.png',
				status: 'Available',
			},
			nextAppt: '30min',
			totalAppts: '5 appts',
			isTimeReached: null,
			timeOnService: null,
		},
		{
			id: 2,
			staffInfo: {
				name: 'Staff 2',
				avatar: 'https://i.ibb.co/XFTK2Vg/avataaars.png',
				status: 'Available',
			},
			nextAppt: '20min',
			totalAppts: '3 appts',
			isTimeReached: null,
			timeOnService: null,
		},
		{
			id: 3,
			staffInfo: {
				name: 'Staff 3',
				avatar: 'https://i.ibb.co/NWtY0dV/avataaars-2.png',
				status: 'Unavailable',
			},
			nextAppt: '30min',
			totalAppts: '5 appts',
			isTimeReached: false,
			timeOnService: '15mins',
		},
		{
			id: 4,
			staffInfo: {
				name: 'Staff 4',
				avatar: 'https://i.ibb.co/n7rByvr/avataaars.png',
				status: 'Unavailable',
			},
			nextAppt: '30min',
			totalAppts: '5 appts',
			isTimeReached: true,
			timeOnService: '20mins',
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
				Staff Turn
			</Typography>
			<div>Total Staffs: {cards.length}</div>
			<CollapsableBox title="Turn" className="card_container">
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

export default StaffTurn;
