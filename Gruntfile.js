module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            dist: {
                src: ['dist/js/*.js']
            }
        },
        concat: {
            dist: {
                src: ['dist/js/*.js'],
                dest: 'assets/js/scripts.js'
            }
        },
        uglify: {
            scripts: {
                src: ['dist/js/*.js'],
                dest: 'assets/js/scripts.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'assets/css/style.css' : 'dist/css/*.scss'
                    // 'destination' : 'file'
                }
            }
        },
        cssmin: {
            all: {
                src: ['assets/css/style.css'],
                dest: 'assets/css/style.min.css'
            },
        },
        watch: {
            scss: {
                files: 'dist/css/*.scss',
                tasks: ['sass']
            }
            js: {
                files: ['dist/js/**/*.js']
                tasks: ['jshint']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'cssmin', 'cssmin' 'watch']);

}