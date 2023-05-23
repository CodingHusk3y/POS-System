import { UserRole } from '@/common/enums';

/* ---------------------------------- STATE --------------------------------- */
export interface IUser {
	name: string;
	role: UserRole;
	isAuthenticated: boolean;
}

export interface IConfigUserState {
	user: IUser;
	error: string;
	loading: boolean;
	isLogged: boolean;
	isLoginFailed: boolean
}

/* --------------------------------- ACTIONS -------------------------------- */
export interface IActionOnUserLogin {
  passCode: string
}

