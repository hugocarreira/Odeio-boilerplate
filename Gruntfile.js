module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
        jshint: {
        	materialize: {
        		src: ['init/templates/materialize/js/**/*.js']
        	},
            files: {
                src: ['files/templates/others/js/*.js']
            }
        },
        concat: {
        	materialize: {
        		src: ['init/templates/materialize/js/**/*.js'],
        		dest: 'src/assets/js/scripts.js'
        	},
            files: {
                src: ['files/templates/others/js/*.js'],
                dest: 'src/assets/js/scripts.js'
            }
        },
        uglify: {
        	materialize: {
        		src: ['src/assets/js/scripts.js'],
        		dest: 'src/assets/js/scripts.min.js'
        	},
            scripts: {
                src: ['files/js/*.js'],
                dest: 'src/assets/js/scripts.min.js'
            }
        },
        sass: {
        	materialize: {
        		files: {
        			'src/assets/css/materialize.css' : 'init/templates/materialize/sass/*.scss'
        		}
        	},
            files: {
                files: {
                    'src/assets/css/style.css' : 'files/css/*.scss'
                    // 'destination' : 'file'
                }
            }
        },
        cssmin: {
        	materialize: {
                src: ['src/assets/css/materialize.css'],
                dest: 'src/assets/css/materialize.min.css'
            },
            files: {
                src: ['src/assets/css/style.css'],
                dest: 'src/assets/css/style.min.css'
            }
        },
        imagemin: {
            all: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'files/img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'src/assets/img/'
                }]
            }
        },
        'http-server': {
           dev: {
                root: './src',
                port: 8282,
                host: "127.0.0.1"
            }
        },
        copy: {
        	materialize: {
        		files: [
		        	{expand: true, cwd: 'init/templates/materialize/fonts', src: ['**'], dest: 'src/assets/fonts/', filter: 'isFile'},
		        	{expand: true, flatten: true, src: ['init/templates/materialize/index.html'], dest: 'src/', filter: 'isFile'}
	        	]
        	},
            codeigniter: {
                files: [
                    {expand: true, cwd: 'init/templates/codeigniter', src: ['**'], dest: 'src/', filter: 'isFile'}
                    // {expand: true, flatten: true, src: ['init/templates/materialize/index.html'], dest: 'src/', filter: 'isFile'}
                ]
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
    	'http-server'
    ]);
   	grunt.registerTask('materialize', [
   		'concat:materialize',
   		'uglify:materialize',
   		'sass:materialize',
   		'cssmin:materialize',
   		'copy:materialize',
   		'http-server',
   	]);
    grunt.registerTask('codeigniter', [
        'copy:codeigniter'
    ]);
    grunt.registerTask('test', []);

};
