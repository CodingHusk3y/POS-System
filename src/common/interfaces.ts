import { EventCalendarType } from './enums';

/* ---------------------------------- TABLE --------------------------------- */
export type TColumns<T = any> = {
	Header: string;
	accessor: keyof T;
};

/* --------------------------------- EVENTS --------------------------------- */
export interface EventCalendar {
	id: number;
	title: string;
	allDay?: boolean;
	start: Date;
	end?: Date;
	type: EventCalendarType;
	children: {
		id: number;
		title: string;
		start: Date;
		end: Date;
		staffName: string;
		clientName: string;
	}[];
}

/* ------------------------------- NAVIGATION ------------------------------- */
export interface IMenuNavigation {
	label: string;
	path: string;
	children?: IMenuNavigation[];
}