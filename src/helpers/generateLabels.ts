export const generateLabel = (key: string) => {
	switch (key) {
		case 'name':
			return '';
		case 'service':
			return 'Service';
		case 'appointment':
			return 'Appointment';
		case 'request':
			return 'Request';
		case 'waited':
			return 'Waited';
		case 'nextAppt':
			return 'Next Appointment';
		case 'totalAppts':
			return 'Total Appointment';
		case 'isTimeReached':
			return 'Timeout';
		case 'timeOnService':
			return 'Time on service';
	}
};
