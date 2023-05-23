import { IMenuNavigation } from '@/common/interfaces';
import { listMenuNavigation } from '@/router/routePaths';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import FinanceMenu from '@/components/general/Navbar/FinanceMenu';
import NightModeToggle from '@/components/general/button-switch-mode/NightMode';
import MenuItem from './MenuItem';
import './index.css';

const Navbar = () => {
	const renderListMenuBar = (list: IMenuNavigation[]) => {
		return list.map((item) => <MenuItem key={item.label} item={item} />);
	};

	return (
		<Box id="Navbar" sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
						POS System
					</Typography>
					<div style={{ display: 'flex', flexDirection: 'row', gap: '1.5em' }}>
						{renderListMenuBar(listMenuNavigation)}
						<NightModeToggle />
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
