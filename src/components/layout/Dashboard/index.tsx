import Navbar from '@/components/general/Navbar';
import { RootState } from '@/redux/reducer';
import { routesPath } from '@/router/routePaths';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Paper } from '@mui/material';

const DashboardLayout = () => {
	const { isLogged } = useSelector((state: RootState) => state.user);

	return isLogged ? (
		<div>
			<Paper sx={{ height: '100vh' }}>
				<Navbar />
				<Outlet />
			</Paper>
		</div>
	) : (
		<Navigate to={routesPath.login} />
	);
};

export default DashboardLayout;
