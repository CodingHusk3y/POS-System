import AppointmentCalendar from '@/components/Appointments/AppointmentCalendar';
import StaffTurn from '@/components/Appointments/StaffTurn';
import WaitingList from '@/components/Appointments/WaitingList';
import { Grid } from '@mui/material';

const AppointmentsPage = () => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={2.5}>
				<WaitingList />
			</Grid>
			<Grid item xs={7}>
				<AppointmentCalendar />
			</Grid>
			<Grid item xs={2.5}>
				<StaffTurn />
			</Grid>
		</Grid>
	);
};

export default AppointmentsPage;
