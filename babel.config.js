module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					tests: ['./tests/'],
					'@/routes': './src/routes',
					'@/screens': './src/screens',
					'@/components': './src/components',
					'@/assets': './src/assets',
				},
			},
		],
	],
};
