import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/jlopinto/resume.git',
		user: {
			name: 'Julien Lopinto', // update to use your name
			email: 'julien.lopinto@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
