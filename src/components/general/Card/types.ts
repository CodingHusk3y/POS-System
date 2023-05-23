export type TWaitingList = {
	id: number;
	staffInfo: {
		name: string;
		avatar: string;
	};
	service: string;
	appointment: string;
	request: string;
	waited: string;
	index?: number;
};

export type TStaffTurn = {
	id: number;
	staffInfo: {
		name: string;
		avatar: string;
	};
	nextAppt: string;
	totalAppts: string;
	isTimeReached: boolean | null;
	timeOnService: string | null;
};
export type TStaff = {
	name: string;
	avatar: string;
	status: string; //this could be modified to isAvailable: boolean if TStaff is used only for staff
};

export type TCard = {
	isDraggable: boolean;
	headerInfo: TStaff;
	index: number;
	setCards?: (dragToIndex: number, currentIndex: number) => void;
	item: TWaitingList | TStaffTurn;
};

export type TDragItem = {
	index: number;
	id: string;
	type: string;
};
