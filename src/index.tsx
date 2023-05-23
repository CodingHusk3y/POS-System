import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import './styles/index.css';
import { ThemeContextProvider } from './theme/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
