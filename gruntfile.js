module.exports = function(grunt){
	grunt.initConfig({
		concat: { //> can NOT change the term
			options: {
				banner: '// All the JS files!!\n\n\n\n\n',
				separator: '\n\n//------------------------------------------------------//\n',
			},
			dist: { //> can change the term
				src: ['components/scripts/*.js'],
				dest: 'builds/development/js/script.js'
			},
			prod: { //> can change the term
				src: ['components/scripts/*.js'],
				dest: 'builds/production/js/script.js'
			}
		},

		bower_concat: {
			all: {
				dest: {					
					js: 'builds/development/js/_bower.js',
					css: 'builds/development/css/_bower.css'
				},
				mainFiles: {
					bootstrap: 'dist/css/bootstrap.min.css'
				}
			}
		},

		sass: { //> can NOT change the term
			disto: { //> can change the term
				options: {
					style: 'compressed'
				},
				files: [{
					src: 'components/sass/style.scss',
					dest: 'builds/development/css/style.css'
				}]
			}
		},

		watch: {
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
		},

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'builds/development/',
					livereload: true
				}
			}
		},

		wiredep: {
			task: {
				src: 'builds/development/*.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-bower-concat');

	grunt.registerTask('default', ['wiredep', 'bower_concat', 'concat:dist', 'sass', 'connect', 'watch']);
	grunt.registerTask('travolta', ['concat:prod']);
}; // wrapper function

/*
 * Running `grunt concat` will run the concat task. It will run each sub-task in the task
 * Running `grunt concat:dist` will run the dist sub-task only
 * Running `grunt` will run the array of tasks listed in the registered "default" task.
 * Running `grunt travolta` will run the array of tasks listed in the registered "travolta" task.
 * Running `grunt travolta:XX` will run the XX task listed in the registered "travolta" task.
 */