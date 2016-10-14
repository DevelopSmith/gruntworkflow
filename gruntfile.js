module.exports = function(grunt){
	/*
	* Here we require the index.js from grunt folder which will export the `require-directory` object.
	* require-directory will name the tasks from each file and push it with the name of the file
	*/
	var gruntConfig = require('./grunt');
	grunt.initConfig(gruntConfig);

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