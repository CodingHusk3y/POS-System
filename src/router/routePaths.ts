import { IMenuNavigation } from '@/common/interfaces';
import { getPath as _ } from '@/helpers/string';

/* ---------------------------------- PATH ---------------------------------- */
export const routesPath = {
	root: '/',
	login: '/login',
	staff: '/staff',
	income: '/income',
	salary: '/salary',
	transaction: '/transaction',
	payrolls: '/payrolls',
	staffDetails: '/staff/:id',
	setting: '/setting',
	announcements: '/announcements',
	appointments: '/appointments',
	finance: '/finance',
};

/* ------------------------------- NAVIGATION ------------------------------- */
export const listMenuNavigation: IMenuNavigation[] = [
	{
		label: 'Dashboard',
		path: routesPath.root,
	},
	{
		label: 'Finance',
		path: routesPath.finance,
		children: [
			{
				label: 'Income',
				path: _(routesPath.finance, routesPath.income),
			},
			{
				label: 'Salary',
				path: _(routesPath.finance, routesPath.salary),
			},
			{
				label: 'Transaction',
				path: _(routesPath.finance, routesPath.transaction),
			},
			{
				label: 'Payrolls',
				path: _(routesPath.finance, routesPath.payrolls),
			},
		],
	},
	{
		label: 'Appointment',
		path: routesPath.appointments,
	},
	{
		label: 'Staffs',
		path: routesPath.staff,
	},
	{
		label: 'Setting',
		path: routesPath.setting,
	},
	{
		label: 'Announcements',
		path: routesPath.announcements,
	},
];
