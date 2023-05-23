import { RootState } from '@/redux/reducer';
import { routesPath } from '@/router/routePaths';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const TransactionHistoryPage = () => {
	const { isLogged } = useSelector((state: RootState) => state.user);

	return isLogged ? <div>Transaction History</div> : <Navigate to={routesPath.login} />;
};
export default TransactionHistoryPage;
