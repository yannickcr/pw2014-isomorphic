'use strict';

var fs = require('fs');

function loadConfig(path) {
  var files = fs.readdirSync(path);
  var obj   = {};
  var key;

  files.forEach(function(file) {
    if (/(\.conf\.js|^\.DS_Store)$/.test(file)) {
      return;
    }
    key      = file.replace(/\.js$/,'');
    obj[key] = require(path + file);
  });

  return obj;
}

module.exports = function(grunt) {
  var config = {
    pkg : '<json:package.json>',
    env : process.env,
    meta: {
      version: '<%= grunt.template.today("yyyymmdd.HHMMss") %>'
    }
  };
  grunt.util._.extend(config, loadConfig(__dirname + '/tasks/options/'));
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');
  grunt.config.init(config);
};
