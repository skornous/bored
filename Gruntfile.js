var dev = "src/";
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // tasks 
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['node_modules/jquery/dist/jquery.js', dev + "app.js"],
        dest: 'dist/bored.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/bored.min.css': ['node_modules/materialize-css/bin/materialize.css', dev + 'bored.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'src/index.html'
        }
      },
      dev: {
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },
    watch: {
      js: {
        files: [dev + '/**/*.js'],
        tasks: ['testScripts'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      css: {
        files: [dev + '*.css'],
        tasks: ['testStyles'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      html: {
        files: [dev + "*.html"],
        tasks: ['htmlmin:dev'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      karma: {
        files: ['node_modules/jquery/dist/jquery.js', dev + '*.js', 'spec/**/*.js'],
        tasks: ['karma:unit']
      }
    },
    jshint: {
      buglify: ['src/app.js']
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  // load all grunt tasks (matching the ['grunt-*', '@*/grunt-*'] patterns)
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('scriptUp', ['testScripts', 'uglify']);
  grunt.registerTask('styleUp', ['testStyles', 'cssmin']);

  grunt.registerTask('testScripts', ['jshint', 'karma']);
  grunt.registerTask('testStyles', []);

  grunt.registerTask('build', ['styleUp', 'scriptUp', 'htmlmin:dist']);
  grunt.registerTask('dev', ['styleUp', 'scriptUp', 'htmlmin:dev']);
  grunt.registerTask('default', ['build']);

  grunt.registerTask('test', ['testStyles', 'testScripts']);
};