import { IMenuNavigation } from '@/common/interfaces';
import { Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ListMenuItemProps = {
	label: string;
	listMenu: IMenuNavigation[];
};

const ListMenuItem = (props: ListMenuItemProps) => {
	const { label, listMenu } = props;
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate(); // Add this line to get access to the navigate function

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (path: string) => {
		navigate(path);
		setAnchorEl(null);
	};
	
	return (
		<div id="ListMenuItem">
			<Typography onClick={handleClick} variant="h5" color={'white'}>
				{label}
			</Typography>

			{open && (
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClick={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					{listMenu.map((item) => (
						<MenuItem key={item.path} onClick={() => handleMenuItemClick(item.path)}>
							{item.label}
						</MenuItem>
					))}
				</Menu>
			)}
		</div>
	);
};

export default ListMenuItem;
