import path from 'path';

module.exports = () => {
	return {
		eslint: {
			mode: 'file',
		},
		webpack: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
	};
};
