import { RootState } from '@/redux/reducer';
import { routesPath } from '@/router/routePaths';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export { };

const PayrollsPage = () => {
	const { isLogged } = useSelector((state: RootState) => state.user);

	return isLogged ? <>Income</> : <Navigate to={routesPath.login} />;
};

export default PayrollsPage;
