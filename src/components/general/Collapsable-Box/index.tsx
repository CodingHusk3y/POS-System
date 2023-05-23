import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

interface CollapsableBoxProps {
	children: React.ReactNode;
	title: string;
	className: string;
}

const CollapsableBox = ({ children, title, className }: CollapsableBoxProps) => {
	return (
		<Box
			sx={{
				borderRadius: '6px',
				border: '1px solid #C7D6E6',
				boxShadow: 'none',
			}}
			className={className}
		>
			<Accordion>
				<AccordionSummary
					sx={{
						backgroundColor: '#F3F5F7',
					}}
					expandIcon={
						<ExpandMoreIcon
							sx={{ backgroundColor: '#777E91', width: '20px', height: '20px', color: 'white', borderRadius: '5px' }}
						/>
					}
				>
					<Typography variant={'h5'}>{title}</Typography>
				</AccordionSummary>
				<AccordionDetails>{children}</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default CollapsableBox;
