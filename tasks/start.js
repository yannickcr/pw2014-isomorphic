'use strict';

module.exports = function(grunt) {
  grunt.registerTask('start', 'Start the server and watch for file change', ['browserify:dist', 'concurrent:start']);
};
