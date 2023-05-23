import { IMenuNavigation } from '@/common/interfaces';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ListMenuItem from './FinanceMenu';

type MenuItemProps = {
	item: IMenuNavigation;
};

const MenuItem = (props: MenuItemProps) => {
	const { label, path, children } = props.item;
	return children ? (
		<NavLink
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault()
			}}
			to={path}
			className={({ isActive }) => (isActive ? 'active_menu' : 'inactive_menu')}
		>
			<ListMenuItem label={label} listMenu={children} />
		</NavLink>
	) : (
		<NavLink key={label} to={path} className={({ isActive }) => (isActive ? 'active_menu' : 'inactive_menu')}>
			<Typography variant="h5" color={'white'}>
				{label}
			</Typography>
		</NavLink>
	);
};

export default MenuItem;
