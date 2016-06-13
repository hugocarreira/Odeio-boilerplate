module.exports = function(grunt) {

    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
        jshint: {
        	materialize: {
        		src: ['dist/fw/materialize/js/*.js']
        	},
            dist: {
                src: ['dist/others/js/*.js']
            }
        },
        concat: {
        	materialize: {
        		src: ['dist/fw/materialize/js/*.js'],
        		dest: 'assets/js/scripts.js'
        	},
            dist: {
                src: ['dist/others/js/*.js'],
                dest: 'assets/js/scripts.js'
            }
        },
        uglify: {
        	materialize: {
        		src: ['dist/fw/materialize/js/*.js'],
        		dest: 'assets/js/scripts.min.js'
        	},
            scripts: {
                src: ['dist/js/*.js'],
                dest: 'assets/js/scripts.min.js'
            }
        },
        sass: {
        	materialize: {
        		files: {
        			'assets/css/materialize.css' : 'dist/fw/materialize/sass/*.scss'
        		}
        	},
            dist: {
                files: {
                    'assets/css/style.css' : 'dist/css/*.scss'
                    // 'destination' : 'file'
                }
            }
        },
        cssmin: {
        	materialize: {
                src: ['assets/css/materialize.css'],
                dest: 'assets/css/materialize.min.css'
            },
            dist: {
                src: ['assets/css/style.css'],
                dest: 'assets/css/style.min.css'
            }
        },
        imagemin: {
            all: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'dist/img/',
                    src: ['*.{png,jpg,gif}'],
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
        copy: {
        	materialize: {
	        	expand: true,
	        	cwd: 'dist/fw/materialize/fonts',
	        	src: ['**'],
	        	dest: 'assets/fonts/',
	        	filter: 'isFile'
        	}
        },
        watch: {
            scss: {
                tasks: ['sass']
            },
            js: {
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
    	'jshint',
    	'concat',
    	'uglify',
    	'sass',
    	'cssmin',
    	'imagemin',
    	'copy',
    	'http-server',
    ]);
   	grunt.registerTask('materialize', [
   		'concat:materialize',
   		'uglify:materialize',
   		'sass:materialize',
   		'cssmin:materialize',
   		'copy:materialize',
   		'http-server'
   	]);
    grunt.registerTask('test', []);

};
