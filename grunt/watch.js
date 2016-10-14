module.exports = {
	scripts: {
		files: ['builds/development/index.html',
				'components/scripts/**/*.js',
				'components/sass/**/*.scss'],
		tasks: ['concat:dist', 'sass'],
	},
	options: {
		spawn: false,
		livereload: true
	}
}