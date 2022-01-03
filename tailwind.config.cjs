const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1024px',
				'2xl': '1024px',
				screen: { raw: 'screen' },
				print: { raw: 'print' }
			}
		}
	},

	plugins: []
};

module.exports = config;
