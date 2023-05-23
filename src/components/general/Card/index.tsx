import { FC, useRef, useEffect, useState } from 'react';

// Libs
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Typography } from '@mui/material';
import { useDrag, useDrop } from 'react-dnd';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

// Utils and Types
import { generateLabel } from '@/helpers/generateLabels';
import type { Identifier } from 'dnd-core';
import { TCard, TDragItem } from './types';
// Styles
import './index.css';

const CardComponent: FC<TCard> = ({ isDraggable, index, setCards, item, headerInfo }) => {
	const draggableRef = useRef<HTMLDivElement>(null);
	const [{ isDragging }, drag] = useDrag({
		type: 'CARD',
		item: { id: item.id, index },
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const [, drop] = useDrop<TDragItem, void, { handlerId: Identifier | null }>({
		accept: 'CARD',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover: (item: TDragItem) => {
			if (!draggableRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			// const hoverBoundingRect = draggableRef.current?.getBoundingClientRect();

			// Get vertical middle
			// const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			// Determine mouse position
			// const clientOffset = monitor.getClientOffset();

			// Get pixels to the top
			// const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

			/* Enable this when the requirement is to cross 50% of the above/below item*/
			// if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			// 	return;
			// }

			// // Dragging upwards
			// if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			// 	return;
			// }

			// Time to actually perform the action
			setCards && setCards(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});

	drop(drag(draggableRef));

	// Define the mapping of status values to icons and colors
	const statusIcons: { [key: string]: { icon: JSX.Element; color: any } } = {
		Appointment: {
			icon: <CalendarMonthIcon />,
			color: 'primary',
		},
		'Walk-in': {
			icon: <DirectionsWalkIcon />,
			color: 'secondary',
		},
		Available: {
			icon: <CheckIcon />,
			color: 'success',
		},
		Unavailable: {
			icon: <DoDisturbIcon />,
			color: 'error',
		},
		// Add more status-icon-color pairs as needed
	};
	const { icon, color } = statusIcons[headerInfo.status] || { icon: null, color: 'default' };
	const renderItem = () => {
		// eslint-disable-next-line array-callback-return
		return Object.entries(item).map((cardItem) => {
			const key = cardItem[0];
			const value = cardItem[1];

			if (key === 'id') return null;

			/* TODO: add more cases here */

			/* TEXT ONLY */
			if (typeof value !== 'object')
				return (
					<CardContent id={key} sx={{ display: 'flex', flexDirection: 'column' }}>
						<Typography variant="body1" color="text.secondary" fontWeight={700}>
							{generateLabel(key as string)}:
							<span
								style={{
									color: 'inherit',
									fontWeight: 400,
									marginLeft: '0.5rem',
								}}
							>
								{typeof value === 'boolean' ? (value ? 'yes' : 'no') : value}
							</span>
						</Typography>
					</CardContent>
				);
		});
	};

	type CountTimeProps = {
		seconds?: number | null;
	};

	const CountTime = ({ seconds = null }: CountTimeProps) => {
		const [timeStart, setTimeStart] = useState<number | null>(seconds);

		useEffect(() => {
			if (seconds !== null && timeStart !== null) {
				const intervalId = setInterval(() => {
					setTimeStart((t) => (t !== null ? t + 1 : null));
				}, 1000);
				return () => clearInterval(intervalId);
			}
		}, [seconds, timeStart]);

		const determineLightColor = (time: number) => {
			const seconds = time;
			const icon = (color: string) => (
				<svg height="34" width="30" className="blink">
					<circle cx="20" cy="20" r="5" fill={color} stroke="gray" stroke-width="2" />
				</svg>
			);

			if (seconds >= 0 && seconds < 60 * 14) {
				return icon('green');
			}
			if (seconds >= 60 * 14 && seconds < 29 * 60) {
				return icon('yellow');
			}
			if (seconds >= 29 * 60) {
				return icon('red');
			}
		};

		return <div>{determineLightColor(timeStart as number)}</div>;
	};

	return (
		<Box
			id="CardComponent"
			ref={isDraggable ? draggableRef : null}
			style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grabbing', marginTop: 10, marginLeft: 20 }}
		>
			<Card sx={{ height: 'auto' }} elevation={8}>
				<CardHeader
					avatar={
						<Avatar
							src={headerInfo.avatar}
							// sx={{ width: '10%', height: '10%' }}
						>
							{/* <img src={headerInfo.avatar} /> */}
						</Avatar>
					}
					title={
						<div style={{ display: 'flex', gap: '2em', alignItems: 'center' }}>
							<Typography sx={{ flex: 1 }} variant="h5">
								{headerInfo.name}
							</Typography>

							<Chip
								icon={headerInfo.status === 'Appointment' ? <CalendarMonthIcon /> : <DirectionsWalkIcon />}
								label={
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<div>{headerInfo.status}</div>
										<CountTime seconds={2000} />
									</div>
								}
								color={headerInfo.status === 'Appointment' ? 'primary' : 'secondary'}
							/>
						</div>
					}
				/>
				<hr />
				{renderItem()}
				<hr />
				<CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button variant="contained" color="inherit">
						Edit
					</Button>
					{/* <Button variant="contained" color="error">
						Remove
					</Button> */}
				</CardActions>
			</Card>
		</Box>
	);
};

export default CardComponent;
