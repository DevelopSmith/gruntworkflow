module.exports = {
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
}