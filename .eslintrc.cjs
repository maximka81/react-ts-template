module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true, // Обновление для поддержки последних возможностей ECMAScript
		node: true,
		commonjs: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended', // Добавление Prettier в качестве рекомендуемого расширения
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier', // Убедитесь, что prettier добавлен в список плагинов
	],
	rules: {
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['PropertyDefinition'],
			},
		],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		//'@typescript-eslint/explicit-function-return-type': ['warn'], // Предупреждение вместо ошибки
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				trailingComma: 'es5',
				bracketSpacing: true,
				jsxBracketSameLine: false,
				printWidth: 100,
				useTabs: true,
				endOfLine: 'auto',
			},
		],
		// Правила для @typescript-eslint, которые могут быть настроены в зависимости от предпочтений проекта
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-unused-vars': 'warn', // Предупреждение для неиспользуемых переменных
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': [
			'error',
			{
				allow: ['decoratedFunctions'],
			},
		],
	},
	settings: {
		react: {
			version: 'detect', // Автоматическое определение версии React для правил eslint-plugin-react
		},
	},
}
