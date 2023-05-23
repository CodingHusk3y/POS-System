import { createAsyncThunk } from '@reduxjs/toolkit';
import { IActionOnUserLogin } from './user.interfaces';
import { UserKeys } from './user.keys';

const dummyLoginData = '0000';

export const onUserLogin = createAsyncThunk(UserKeys.login, async (data: IActionOnUserLogin) => {
	try {
		// const result = await handleUserLogin()

		//fake login
		if (data.passCode === dummyLoginData) {
			return true;
		} else {
			throw new Error();
		}
	} catch (err) {
		throw err;
	}
});
