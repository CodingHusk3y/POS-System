import { RootState } from '@/redux/reducer';
import { useAppDispatch } from '@/redux/store';
import { onUserLogin } from '@/redux/users/user.actions';
import { IActionOnUserLogin } from '@/redux/users/user.interfaces';
import { routesPath } from '@/router/routePaths';
import { Button, Typography } from '@mui/material';
import ReactCodeInput from 'react-code-input';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		setError,
	} = useForm<IActionOnUserLogin>();
	const dispatch = useAppDispatch();
	const { isLogged, loading, isLoginFailed } = useSelector((state: RootState) => state.user);

	useEffect(() => {
		if (isLoginFailed) {
			setError('passCode', {
				message: 'Passcode is not correct!',
			});
		}
	}, [isLoginFailed]);

	const handleOnLogin = (data: IActionOnUserLogin) => {
		dispatch(onUserLogin({ passCode: data.passCode }));
	};

	return isLogged ? (
		<Navigate to={routesPath.root} />
	) : (
		<div id="LoginPage">
			<div className="overlay"></div>
			<div className="logo">
				<img src="./images/logo.png" alt="logo" />
			</div>
			<div className="login-container">
				<form className="login-form" onSubmit={handleSubmit(handleOnLogin)}>
					<Typography variant="h3" color="white" fontWeight={600}>
						Welcome back
					</Typography>
					<Typography variant="subtitle1">Enter your passcode to login</Typography>
					<ReactCodeInput
						{...register('passCode', {
							required: 'Passcode is required!',
							minLength: {
								value: 4,
								message: 'Passcode is required!',
							},
						})}
						inputMode="email"
						name="passcode"
						type="password"
						fields={4}
						onChange={(value: string) => {
							setValue('passCode', value);
						}}
					/>
					<Typography
						sx={{
							height: '1rem',
						}}
						variant="body2"
					>
						{errors.passCode?.message}
					</Typography>
					<Button variant="contained" type="submit" fullWidth>
						{loading ? 'Logging in...' : 'Login'}
					</Button>
					<Typography
						variant="subtitle1"
						sx={{
							cursor: 'pointer',
						}}
					>
						Forgot passcode?
					</Typography>
				</form>
			</div>
			<div className="footer">
				© Posnails 2023 <span>|</span> Privacy Policy
			</div>
		</div>
	);
};

export default LoginPage;
