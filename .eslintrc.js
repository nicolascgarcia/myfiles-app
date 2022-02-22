module.exports = {
	env: {
		es2021: true,
		'jest/globals': true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'jest'],
	settings: {
		react: {
			version: 'latest',
		},
	},
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'import/no-unresolved': 'off',
		'no-use-before-define': 'off',
		'import/extensions': 'off',
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
		'react/jsx-props-no-spreading': 'off',
		'no-unused-vars': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-unused-vars': ['warn'],
	},
};
