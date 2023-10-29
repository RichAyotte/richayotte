import ayotte from 'eslint-config-ayotte'

export default [
	// ***FIXME*** add types to 'eslint-config-ayotte'
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	...ayotte,
	{
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': [
					'.ts',
					'.js',
				],
			},
		},
	},
]
