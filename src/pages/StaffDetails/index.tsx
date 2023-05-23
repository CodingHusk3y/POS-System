import { TabContext, TabPanel } from '@mui/lab';
import { Box, Button, Grid, Switch, Tab, TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

enum StaffDetailsTab {
	Details = 'Details',
	Skills = 'Skills',
	OfficeHouse = 'OfficeHouse',
}

const StaffDetailsPage = () => {
	// const params = useParams<{ id: string }>();
	const { register, handleSubmit } = useForm({
		defaultValues: {
			nickname: 'nickname',
			jobTitle: 'jobTitle',
			birthday: 'birthday',
			phoneNumber: 'phoneNumber',
			address: 'address',
			email: 'email',
			startDate: 'startDate',
			role: 'role',
		},
	});

	const [currentTab, setCurrentTab] = useState<StaffDetailsTab>(StaffDetailsTab.Details);
	const [editMode, setEditMode] = useState<boolean>(false);

	const handleChange = (_: React.SyntheticEvent, newValue: StaffDetailsTab) => {
		setCurrentTab(newValue);
	};

	const onEditProfile = (data: any) => {
		console.log('data',data);
	};

	return (
		<Box id="StaffDetails">
			<div className="container-details">
				<TabContext value={currentTab}>
					<Tabs
						value={currentTab}
						onChange={handleChange}
						indicatorColor="secondary"
						aria-label="secondary tabs example"
					>
						<Tab value={StaffDetailsTab.Details} label="Details" />
					</Tabs>
					<TabPanel value={currentTab}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								textTransform: 'uppercase',
								marginBottom: '2rem',
							}}
						>
							<span>Edit:</span>
							<Switch
								inputProps={{ 'aria-label': 'Switch demo' }}
								checked={editMode}
								onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
									setEditMode(event.target.checked);
								}}
							/>
						</div>
						<Grid container spacing={2}>
							<Grid item className="profile-container" xs={2}>
								<div>Name & Surname</div>
								<div>job title</div>
								<div>birthday</div>
								<div>phone number</div>
								<div>address</div>
								<div>email</div>
								<div>start date</div>
								<div>role</div>
							</Grid>
							<Grid item xs={7}>
								{editMode ? (
									<form className="profile-container" onSubmit={handleSubmit(onEditProfile)}>
										<TextField variant="standard" fullWidth {...register('nickname')} />
										<TextField variant="standard" fullWidth {...register('jobTitle')} />
										<TextField variant="standard" fullWidth {...register('birthday')} />
										<TextField variant="standard" fullWidth {...register('phoneNumber')} />
										<TextField variant="standard" fullWidth {...register('address')} />
										<TextField variant="standard" fullWidth {...register('email')} />
										<TextField variant="standard" fullWidth {...register('startDate')} />
										<TextField variant="standard" fullWidth {...register('role')} />
										<Button
											sx={{
												width: 'fit-content',
											}}
											type="submit"
											variant="contained"
										>
											Submit
										</Button>
									</form>
								) : (
									<div className="profile-container">
										<div>nickname</div>
										<div>jobTitle</div>
										<div>birthday</div>
										<div>phoneNumber</div>
										<div>address</div>
										<div>email</div>
										<div>startDate</div>
										<div>role</div>
									</div>
								)}
							</Grid>
							<Grid item xs={3}>
								<div className="avatar-container">
									<div className="avatar">
										<div className="status"></div>
									</div>
									<div className="reset-password">Reset password</div>
								</div>
							</Grid>
						</Grid>
					</TabPanel>
				</TabContext>
			</div>
		</Box>
	);
};

export default StaffDetailsPage;
