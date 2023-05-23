import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { routesPath } from './routePaths';
import { getPath as _ } from '@/helpers/string';

/* ---------------------------------- PAGE ---------------------------------- */
const DashboardLayout = React.lazy(() => import('@/components/layout/Dashboard'));
const LoginPage = React.lazy(() => import('@/pages/Login'));
const StaffPage = React.lazy(() => import('@/pages/Staff'));
const StaffDetailsPage = React.lazy(() => import('@/pages/StaffDetails'));
const SettingPage = React.lazy(() => import('@/pages/Setting/Setting'));
const AnnouncementPage = React.lazy(() => import('@/pages/Announcements'));
const IncomePage = React.lazy(() => import('@/pages/Finance/Income'));
const PayrollsPage = React.lazy(() => import('@/pages/Finance/Payrolls'));
const SalaryPage = React.lazy(() => import('@/pages/Finance/Salary'));
const TransactionPage = React.lazy(() => import('@/pages/Finance/TransactionHistory'));
const AppointmentsPage = React.lazy(() => import('@/pages/Appointments'));
const FinancePage = React.lazy(() => import('@/pages/Finance'));

const {
	root,
	login,
	staff,
	staffDetails,
	income,
	salary,
	transaction,
	payrolls,
	setting,
	announcements,
	appointments,
	finance,
} = routesPath;

const routers: RouteObject[] = [
	{
		path: root,
		element: <DashboardLayout />,
		children: [
			{
				path: setting,
				element: <SettingPage />,
			},
			{
				path: announcements,
				element: <AnnouncementPage />,
			},
			{
				path: appointments,
				element: <AppointmentsPage />,
			},
			{
				path: staff,
				element: <StaffPage />,
			},
			{
				path: staffDetails,
				element: <StaffDetailsPage />,
			},
			{
				path: finance,
				element: <FinancePage />,
				children: [
					{
						index: true,
						element: <Navigate to={_(finance, income)} replace />,
					},
					{
						path: _(finance, income),
						element: <IncomePage />,
					},
					{
						path: _(finance, salary),
						element: <SalaryPage />,
					},
					{
						path: _(finance, transaction),
						element: <TransactionPage />,
					},
					{
						path: _(finance, payrolls),
						element: <PayrollsPage />,
					},
				],
			},
		],
	},
	{
		path: login,
		element: <LoginPage />,
	},
];

export default routers;
