import { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import './index.css';

const AddStaff = ({ onHide }: { onHide: () => void }) => {
	const [avatar, setAvatar] = useState<string | undefined>(undefined);

	useEffect(() => {
		if (avatar) {
			return () => {
				URL.revokeObjectURL(avatar);
			};
		}
	}, [avatar]);

	const handleAvatarChange = (e: any) => {
		if (e.target.files[0]) {
			setAvatar(URL.createObjectURL(e.target.files[0]));
		}
	};

	const handleUploadClick = () => {
		document.getElementById('avatar-upload')?.click();
	};

	return (
		<div className="modal-container">
			<div className="modal">
				<Typography variant="h5" className="modal-header" style={{ marginBottom: '1rem' }}>
					New Staff Creation
				</Typography>
				<Grid container>
					<Grid item xs={3}>
						<Typography
              variant="h6"
							className="profile-container"
							style={{
								display: 'flex',
								justifyContent: 'center',
								height: '12rem',
								marginBottom: '1rem',
							}}
						>
							Profile Picture
						</Typography>
					</Grid>
					<Grid xs={9}>
						<div className="avatar-container" onClick={handleUploadClick}>
							{avatar ? <img src={avatar} alt="profile-pic" /> : <div>Upload</div>}
						</div>
						<input
							id="avatar-upload"
							type="file"
							onChange={handleAvatarChange}
							accept="image/*"
							style={{ display: 'none' }}
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={3}>
						<div className="profile-container">
							<Typography variant="h6">Name *</Typography>
							<Typography variant="h6">Phone Number *</Typography>
							<Typography variant="h6">Passcode *</Typography>
							<Typography variant="h6">Skills</Typography>
							<Typography variant="h6">Role *</Typography>
						</div>
					</Grid>
					<Grid xs={9}>
						<form className="profile-container">
							<TextField variant="outlined" fullWidth required />
							<TextField variant="outlined" fullWidth required />
							<TextField variant="outlined" fullWidth required />
							<TextField variant="outlined" fullWidth />
							<TextField variant="outlined" fullWidth required />
						</form>
					</Grid>
				</Grid>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
					<Button
						sx={{
							width: 'fit-content',
							marginRight: '0.2rem',
						}}
						variant="text"
						onClick={onHide}
					>
						Cancel
					</Button>
					<Button
						sx={{
							width: 'fit-content',
						}}
						type="submit"
						variant="contained"
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AddStaff;
