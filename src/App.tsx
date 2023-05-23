import { AppBar } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import routers from './router';
import React from 'react';
import Loading from './components/general/Loading';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from '@emotion/react';
import { useThemeContext } from './theme/ThemeContextProvider';

const App = () => {
	const routing = useRoutes(routers);
	const { theme } = useThemeContext();
	return (
		<ThemeProvider theme={theme}>
			<DndProvider backend={HTML5Backend}>
				<React.Suspense fallback={<Loading />}>
					<AppBar />
					{routing}
				</React.Suspense>
			</DndProvider>
		</ThemeProvider>
	);
};

export default App;
