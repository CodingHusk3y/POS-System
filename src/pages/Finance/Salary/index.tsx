import { RootState } from '@/redux/reducer';
import { routesPath } from '@/router/routePaths';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SalaryPage = () => {
	const { isLogged } = useSelector((state: RootState) => state.user);

	return isLogged ? <>Salary</> : <Navigate to={routesPath.login} />;
};
export default SalaryPage;
