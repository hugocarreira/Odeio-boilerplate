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
        imagemin: {
            all: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'dist/img/',
                    src: ['**/*.{png,jpg,gif}', '*.jpg'],
                    dest: 'assets/img/'
                }]
            }
        },
        'http-server': {
           'dev': {
                root: './',
                port: 8282,
                host: "127.0.0.1"
            }
        },
        watch: {
            scss: {
                files: 'dist/css/*.scss',
                tasks: ['sass']
            },
            js: {
                files: ['dist/js/**/*.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'cssmin', 'imagemin', 'http-server', 'watch']);
    grunt.registerTask('test', []);

};