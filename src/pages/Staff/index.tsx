import { UserRole } from '@/common/enums';
import { TColumns } from '@/common/interfaces';
import { routesPath } from '@/router/routePaths';
import { useMemo, useState } from 'react';
import { Row, useTable } from 'react-table';
import EditRow from '@/components/general/Row/EditRow';

import './index.css';
import AddStaff from '@/components/Staff/AddStaff';

export type DummyData = {
	name: string;
	role: UserRole;
	checkIn: string;
	checkOut: string;
	totalWorkHours: string;
	services: string[];
	incomeToday: string;
	tips: string;
};

const StaffPage = () => {
	const [selectedRow, setSelectedRow] = useState<
		| Row<
				DummyData & {
					actions?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
				}
		  >
		| undefined
	>(undefined);
	const [addStaff, setAddStaff] = useState<boolean>(false);

	const handleEditButton = (
		row: Row<
			DummyData & {
				actions?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
			}
		>
	) => setSelectedRow(row);
	const handleSaveButton = () => setSelectedRow(undefined); // TODO: save data
	const handleCancelButton = () => setSelectedRow(undefined);

	const data: DummyData[] = useMemo(
		() => [
			{
				name: 'Staff 1',
				role: UserRole.Manager,
				checkIn: '10:00 AM',
				checkOut: '10:00 AM',
				totalWorkHours: '8 hrs',
				services: ['TCN', 'Dip'],
				incomeToday: '1k',
				tips: '200',
			},
			{
				name: 'Staff 2',
				role: UserRole.Manager,
				checkIn: '10:00 AM',
				checkOut: '10:00 AM',
				totalWorkHours: '8 hrs',
				services: ['TCN', 'Dip'],
				incomeToday: '1k',
				tips: '200',
			},
			{
				name: 'Staff 3',
				role: UserRole.Manager,
				checkIn: '10:00 AM',
				checkOut: '10:00 AM',
				totalWorkHours: '8 hrs',
				services: ['TCN', 'Dip'],
				incomeToday: '1k',
				tips: '200',
			},
			{
				name: 'Staff 4',
				role: UserRole.Manager,
				checkIn: '10:00 AM',
				checkOut: '10:00 AM',
				totalWorkHours: '8 hrs',
				services: ['TCN', 'Dip'],
				incomeToday: '1k',
				tips: '200',
			},
			{
				name: 'Staff 5',
				role: UserRole.Manager,
				checkIn: '10:00 AM',
				checkOut: '10:00 AM',
				totalWorkHours: '8 hrs',
				services: ['TCN', 'Dip'],
				incomeToday: '1k',
				tips: '200',
			},
		],
		[]
	);

	const columns: TColumns<
		DummyData & {
			actions: React.ReactElement;
		}
	>[] = useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: 'Role',
				accessor: 'role',
			},
			{
				Header: 'Check In',
				accessor: 'checkIn',
			},
			{
				Header: 'Check Out',
				accessor: 'checkOut',
			},
			{
				Header: 'Total work hours',
				accessor: 'totalWorkHours',
			},
			{
				Header: 'Services',
				accessor: 'services',
			},
			{
				Header: 'Income Today',
				accessor: 'incomeToday',
			},
			{
				Header: 'Tips',
				accessor: 'tips',
			},
			{
				Header: 'Actions',
				accessor: 'actions',
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<
		DummyData & {
			actions?: React.ReactElement;
		}
	>({ columns, data });

	return (
		<div id="StaffPage">
			<button id="add-staff" onClick={() => setAddStaff(true)} value="Add Staff">
				<div id="add-staff__text">Add Staff</div>
			</button>
			{addStaff && <AddStaff onHide={() => setAddStaff(false)} />}
			<form>
				<table
					{...getTableProps()}
					style={{
						width: '100%',
					}}
				>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th
										{...column.getHeaderProps()}
										style={{
											width: `${100 / columns.length}%`,
										}}
									>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<EditRow
									row={row}
									isReadOnly={selectedRow !== row}
									handleEditButton={handleEditButton}
									link={`${routesPath.staff}/${+row.id + 1}`}
									handleSaveButton={handleSaveButton}
									handleCancelButton={handleCancelButton}
								/>
							);
						})}
					</tbody>
				</table>
			</form>
		</div>
	);
};

export default StaffPage;
