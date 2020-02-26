module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
    scripts: {
      files: ['Gruntfile.js','public/js/script.js','public/css/style.css'],
      tasks: ['jshint','csslint'],
    options: {
      spawn: false,
        },
      },
    },//end watch
    jshint: {
      all: ['Gruntfile.js', 'public/js/script.js'],
      options: "esversion6"
    },//end js hint
    csslint: {
      strict: {
      options: {
        import: 2
        },
      src: ['public/css/style.css']
      },
      // lax: {
      //   options: {
      //     import: false
      //   },
      //   src: ['public/css/style.css']
      // }
    },//end css lint
    uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }//end uglify
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('ugly', ['uglify','cssmin','imagemin']);

};
