### What is this?
This is a quick workflow for Grunt automating some tasks.

### What is new in this branch?
I have modified the gruntfile.js and used the [require-directory](https://github.com/troygoode/node-require-directory) module to split the tasks to separate files. This way makes the gruntfile.js cleaner and more readable.

At the top we are using this code snippet to load the tasks from the `grunt` folder. Actually this requires the `index.js` file from the `grunt` folder.

``` javascript
var gruntConfig = require('./grunt');
grunt.initConfig(gruntConfig);
````

In `grunt/index.js` we require the `require-directory` module which names the tasks from each file and push tasks object with the name of the file.

```javascript
var requireDirectory = require('require-directory');
module.exports = requireDirectory(module);
```
