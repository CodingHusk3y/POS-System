/* ---------------------------------- HTTP ---------------------------------- */
export enum StatusCode {
	Unauthorized = 401,
	Forbidden = 403,
	TooManyRequests = 429,
	InternalServerError = 500,
	BadRequest = 400,
}

/* ---------------------------------- ROLE ---------------------------------- */
export enum UserRole {
	Manager = 'Manager',
	NoneUser = 'NoneUser', // test
}

/* --------------------------------- EVENTS --------------------------------- */
export enum EventCalendarType {
	Meeting = 'Meeting',
	Holiday = 'Holiday',
	Birthday = 'Birthday',
}
