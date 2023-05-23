import { createTheme } from '@mui/material/styles';
import { EventCalendarType } from './enums';
import { EventCalendar } from './interfaces';

/* ---------------------------------- THEME --------------------------------- */
export const theme = createTheme({
	typography: {
	},
});

/* ----------------------------- EXAMPLE EVENTS ----------------------------- */
export const eventColors = {
	Meeting: '#0275d8',
	Holiday: '#5cb85c',
	Birthday: '#d9534f',
};

export const titleFields = ['staffInfo']
export const dropdownFields = []
export const chipFields = []

export const events: EventCalendar[] = [
	{
		id: 0,
		title: 'All Day Event very long title',
		allDay: false,
		start: new Date(2023, 4, 12, 9, 0),
		end: new Date(2023, 4, 12, 10, 0),
		type: EventCalendarType.Meeting,
		children: [
			{
				id: 0.1,
				title: 'All Day Event very long title',
				start: new Date(2023, 4, 10, 9, 0),
				end: new Date(2023, 4, 10, 11, 0),
				staffName: 'Staff 1',
				clientName: 'Client Alice',
			},
			{
				id: 0.2,
				title: 'All Day Event very long title',
				start: new Date(2023, 4, 10, 10, 0),
				end: new Date(2023, 4, 10, 11, 0),
				staffName: 'Staff 2',
				clientName: 'Client John',
			},
			{
				id: 0.3,
				title: 'All Day Event very long title',
				start: new Date(2023, 4, 10, 9, 0),
				end: new Date(2023, 4, 10, 11, 0),
				staffName: 'Staff 3',
				clientName: 'Client Bob',
			},
			{
				id: 0.4,
				title: 'All Day Event very long title',
				start: new Date(2023, 4, 10, 10, 30),
				end: new Date(2023, 4, 10, 11, 0),
				staffName: 'Staff 3',
				clientName: 'Client Bob',
			},
		],
	},
	{
		id: 1,
		title: 'All Day Event very long title',
		allDay: false,
		start: new Date(2023, 4, 12, 10, 0),
		end: new Date(2023, 4, 12, 11, 0),
		type: EventCalendarType.Holiday,
		children: [
			{
				id: 1.1,
				title: 'All Day Event very long title',
				start: new Date(2023, 4, 10, 10, 0),
				end: new Date(2023, 4, 10, 11, 0),
				staffName: 'Staff 1',
				clientName: 'Client Alice',
			},
			{
				id: 1.2,
				title: 'All Day Event very long title',
				start: new Date(2023, 4, 10, 10, 0),
				end: new Date(2023, 4, 10, 11, 0),
				staffName: 'Staff 2',
				clientName: 'Client John',
			},
			{
				id: 1.3,
				title: 'All Day Event very long title',
				start: new Date(2023, 4, 10, 10, 0),
				end: new Date(2023, 4, 10, 11, 0),
				staffName: 'Staff 3',
				clientName: 'Client Bob',
			},
			{
				id: 1.4,
				title: 'All Day Event very long title',
				start: new Date(2023, 4, 10, 10, 30),
				end: new Date(2023, 4, 10, 11, 0),
				staffName: 'Staff 3',
				clientName: 'Client Bob',
			},
		],
	},
];

