import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { onUserLogin } from './user.actions';
import { IConfigUserState, IUser } from './user.interfaces';
import { UserRole } from '@/common/enums';

const initialState: IConfigUserState = {
	user: {
		name: '',
		role: UserRole.NoneUser,
		isAuthenticated: false,
	},
	isLogged: false,
	error: '',
	loading: false,
	isLoginFailed: false,
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		loadingUser: (state) => {
			state.loading = true;
		},
		fetchUserSuccess: (state, action: PayloadAction<IUser>) => {
			state.loading = false;
			state.user = action.payload;
		},
		fetchUserFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(onUserLogin.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(onUserLogin.fulfilled, (state) => {
			state.loading = true;
			state.isLogged = true;
			state.isLoginFailed = false;
		});
		builder.addCase(onUserLogin.rejected, (state) => {
			state.loading = false;
			state.isLoginFailed = true;
		});
	},
});

export const { loadingUser, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export default userSlice.reducer;
