import { FormControlLabel, FormGroup } from '@mui/material';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '../../../theme/ThemeContextProvider';
import MaterialUISwitch from './MaterialUISwitch';

const NightModeToggle = () => {
	const { mode, toggleColorMode } = useThemeContext();

	return (
		<FormGroup>
			<FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} onClick={toggleColorMode} />} label />
		</FormGroup>
	);
};

export default NightModeToggle;
