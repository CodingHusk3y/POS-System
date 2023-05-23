import { eventColors, events } from '@/common/constants';
import { EventCalendar } from '@/common/interfaces';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { Calendar, Components, EventProps, ToolbarProps, Views, dayjsLocalizer } from 'react-big-calendar';
import { Link } from 'react-router-dom';
import './index.css';

const AppointmentCalendar = () => {
	const localizer = dayjsLocalizer(dayjs);
	// const [myEvents, setEvents] = useState<any>(events);
	const [staff, setStaff] = useState('');
	const [open, setOpen] = useState(false);

	// const handleSelectSlot = useCallback(
	// 	({ start, end }: any) => {
	// 		const title = window.prompt('New Event Name');
	// 		if (title) {
	// 			setEvents((prev: any) => [...prev, { start, end, title }]);
	// 		}
	// 	},
	// 	[setEvents]
	// );

	// const handleSelectEvent = useCallback((event: any) => window.alert(event.title), []);

	const eventPropGetter = (event: any) => {
		const color = (eventColors as any)[event.type];
		return {
			style: {
				backgroundColor: color,
				color: 'white',
			},
		};
	};

	const handleChange = (event: SelectChangeEvent) => {
		setStaff(event.target.value);
	};

	const CustomToolbar = ({ label, onNavigate, onView }: ToolbarProps) => {
		return (
			<div className="rbc-toolbar">
				<div className="rbc-toolbar-label">{label}</div>
				<div className="rbc-toolbar-group">
					<div className="rbc-btn-group">
						<Button variant="contained" color="success" onClick={() => onNavigate('TODAY')}>
							Today
						</Button>
						<Button variant="contained" color="success" onClick={() => onNavigate('PREV')}>
							<ArrowBackIosNewIcon fontSize="inherit" />
						</Button>
						<Button variant="contained" color="success" onClick={() => onNavigate('NEXT')}>
							<ArrowForwardIosIcon fontSize="inherit" />
						</Button>
					</div>
					<FormControl size="small">
						<InputLabel id="demo-select-small-label">Working Staff</InputLabel>
						<Select
							label="Working Staff"
							value={staff}
							onChange={handleChange}
							sx={{
								width: '12rem',
							}}
						>
							<MenuItem value={'Working Staff 1'}>Working Staff 1</MenuItem>
							<MenuItem value={'Working Staff 2'}>Working Staff 2</MenuItem>
							<MenuItem value={'Working Staff 3'}>Working Staff 3</MenuItem>
						</Select>
					</FormControl>

					<FormControl size="small">
						<InputLabel id="demo-select-small-label">Working Staff</InputLabel>
						<Select
							label="Working Staff"
							value={staff}
							onChange={handleChange}
							sx={{
								width: '12rem',
							}}
						>
							<MenuItem value={'Working Staff 1'}>Working Staff 1</MenuItem>
							<MenuItem value={'Working Staff 2'}>Working Staff 2</MenuItem>
							<MenuItem value={'Working Staff 3'}>Working Staff 3</MenuItem>
						</Select>
					</FormControl>

					<div className="rbc-btn-group">
						<Button variant="contained" color="success" onClick={() => onView('week')}>
							Week
						</Button>
						<Button variant="contained" color="success" onClick={() => onView('day')}>
							Day
						</Button>
						<Button variant="contained" color="success" onClick={() => onView('month')}>
							Month
						</Button>
						{/* <Button variant="contained" color="success" onClick={() => onView('year')}>
							Year
						</Button> */}
						<Button variant="contained" color="success" onClick={() => onView('agenda')}>
							Agenda
						</Button>
					</div>
				</div>
			</div>
		);
	};

	const MyDayEvent = (props: EventProps<EventCalendar>) => {
		const { event } = props;
		return (
			<div>
				{event.children.map((item, index) => {
					if (index < 3) {
						return (
							<div>
								{item.staffName} - {dayjs(item.start).format('hh a')} - {item.clientName} - {item.title}
							</div>
						);
					}
				})}
				{event.children.length > 3 && (
					<Link
						style={{
							color: 'white',
							textDecoration: 'underline',
						}}
						to={'#'}
						onClick={() => setOpen(true)}
					>
						More
					</Link>
				)}
			</div>
		);
	};

	const components: Components<EventCalendar, object> = useMemo(
		() => ({
			toolbar: CustomToolbar,
			day: {
				event: MyDayEvent,
			},
		}),
		[staff]
	);

	return (
		<div id="AppointmentCalendar">
			<Calendar
				eventPropGetter={eventPropGetter}
				dayLayoutAlgorithm={'overlap'}
				defaultView={Views.DAY}
				events={events}
				localizer={localizer}
				// onSelectEvent={handleSelectEvent}
				// onSelectSlot={handleSelectSlot}
				// selectable
				style={{
					height: '87vh',
				}}
				components={components}
				min={new Date(2023, 4, 10, 9, 0)}
				max={new Date(2023, 4, 10, 20, 0)}
			/>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Get events by id mutation....</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous location data to Google, even when no
						apps are running.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={() => setOpen(false)} autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AppointmentCalendar;
