/*jslint node: true */
'use strict';

var pkg = require('./package.json');

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, bower_components, dist, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function(fileTypePatterns) {
    fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
    var ignore = ['node_modules', 'bower_components', 'dist', 'temp', 'test', 'data', 'assets'];
    var fs = require('fs');
    return fs.readdirSync(process.cwd())
        .map(function(file) {
            if (ignore.indexOf(file) !== -1 || file.indexOf('.') === 0 || !fs.lstatSync(file).isDirectory()) {
                return null;
            } else {
                return fileTypePatterns.map(function(pattern) {
                    return file + '/**/' + pattern;
                });
            }
        })
        .filter(function(patterns) {
            return patterns;
        })
        .concat(fileTypePatterns);
};

module.exports = function(grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        connect: {
            main: {
                options: {
                    port: 9000,
                    open: {
                        target: 'http://localhost:9000/app',
                        appName: 'Chrome'
                    }
                }
            }
        },
        watch: {
            main: {
                options: {
                    livereload: true,
                    livereloadOnError: false,
                    spawn: false
                },
                files: [createFolderGlobs(['*.js', '*.sass', '*.html']), '!_SpecRunner.html', '!.grunt'],
                tasks: [] //all the tasks are run dynamically during the watch event handler
            }
        },
        jshint: {
            main: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: createFolderGlobs(['*.js', '*-spec.js'])
            }
        },
        clean: {
            before: {
                src: ['dist', 'temp']
            },
            after: {
                src: ['temp']
            }
        },
        sass: {
            dist: {
                options: {
                    cacheLocation: 'temp/.sass-cache'
                },
                files: {
                    'temp/app.css': 'app/app.scss'
                }
            }
        },
        ngtemplates: {
            main: {
                options: {
                    module: pkg.name,
                    htmlmin: '<%= htmlmin.main.options %>',
                    url: function(url) {
                        return url.replace('app/', '');
                    }
                },
                src: [createFolderGlobs('*.html'), '!app/index.html', '!_SpecRunner.html'],
                dest: 'temp/templates.js'
            }
        },
        copy: {
            main: {
                files: [{
                        cwd: 'app',
                        src: ['assets/**/*'],
                        dest: 'dist/',
                        expand: true
                }]
            }
        },
        dom_munger: {
            read: {
                options: {
                    read: [{
                        selector: 'script[data-concat!="false"]',
                        attribute: 'src',
                        writeto: 'appjs',
                        isPath: true
                    }, {
                        selector: 'link[rel="stylesheet"][data-concat!="false"]',
                        attribute: 'href',
                        writeto: 'appcss'
                    }]
                },
                src: 'app/index.html'
            },
            update: {
                options: {
                    remove: ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
                    append: [{
                        selector: 'body',
                        html: '<script src="app.full.min.js"></script>'
                    }, {
                        selector: 'head',
                        html: '<link rel="stylesheet" href="app.full.min.css">'
                    }]
                },
                src: 'app/index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            main: {
                src: ['temp/app.css', '<%= dom_munger.data.appcss %>'],
                dest: 'dist/app.full.min.css'
            }
        },
        concat: {
            main: {
                src: ['<%= dom_munger.data.appjs %>', '<%= ngtemplates.main.dest %>'],
                dest: 'temp/app.full.js'
            }
        },
        ngAnnotate: {
            main: {
                src: 'temp/app.full.js',
                dest: 'temp/app.full.js'
            }
        },
        uglify: {
            main: {
                src: 'temp/app.full.js',
                dest: 'dist/app.full.min.js'
            },
            options: {
                report: 'min',
                mangle: false
            }
        },
        htmlmin: {
            main: {
                options: {
                    collapseBooleanAttributes     : true,
                    collapseWhitespace            : true,
                    removeAttributeQuotes         : true,
                    removeComments                : true,
                    removeEmptyAttributes         : true,
                    removeScriptTypeAttributes    : true,
                    removeStyleLinkTypeAttributes : true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },
        
        /**
         * The Karma configurations.
         */
        karma: {
            options: {
                frameworks: ['jasmine'],
                files: [ //this files data is also updated in the watch handler, if updated change there too
                    '<%= dom_munger.data.appjs %>',
                    'bower_components/angular-mocks/angular-mocks.js',
                    createFolderGlobs('*-spec.js')
                ],
                logLevel: 'ERROR',
                reporters: ['mocha'],
                autoWatch: false, //watching is handled by grunt-contrib-watch
                singleRun: true
            },
            all_tests: {
                browsers: ['PhantomJS', 'Chrome']
            },
            during_watch: {
                browsers: ['PhantomJS']
            }
        },

        /**
         * Protractor configuration
         */
        protractor: {
            e2e: {
                options: {
                    configFile: "test/protractor.conf.js", // Target-specific config file
                    args: {
                        // Arguments passed to the command
                    }
                }
            }
        }

    });

    grunt.registerTask('build', ['jshint', 'clean:before', 'sass', 'dom_munger', 'ngtemplates', 'cssmin', 'concat', 'ngAnnotate', 'uglify', 'copy', 'htmlmin', 'clean:after']);
    grunt.registerTask('run', ['dom_munger:read', 'karma', 'jshint', 'sass', 'connect', 'watch']);
    grunt.registerTask('test', ['dom_munger:read', 'karma']);
    grunt.registerTask('e2e', ['dom_munger:read', 'protractor']);

    grunt.event.on('watch', function(action, filepath) {
        //https://github.com/gruntjs/grunt-contrib-watch/issues/156

        var tasksToRun = [];

        if (filepath.lastIndexOf('.js') !== -1 && filepath.lastIndexOf('.js') === filepath.length - 3) {

            //lint the changed js file
            grunt.config('jshint.main.src', filepath);
            tasksToRun.push('jshint');

            //find the appropriate unit test for the changed file
            var spec = filepath;
            if (filepath.lastIndexOf('-spec.js') === -1 || filepath.lastIndexOf('-spec.js') !== filepath.length - 8) {
                spec = filepath.substring(0, filepath.length - 3) + '-spec.js';
            }

            //if the spec exists then lets run it
            if (grunt.file.exists(spec)) {
                var files = [].concat(grunt.config('dom_munger.data.appjs'));
                files.push('bower_components/angular-mocks/angular-mocks.js');
                files.push(spec);
                grunt.config('karma.options.files', files);
                tasksToRun.push('karma:during_watch');
            }
        }

        //if index.html changed, we need to reread the <script> tags so our next run of karma
        //will have the correct environment
        if (filepath === 'app/index.html') {
            tasksToRun.push('dom_munger:read');
        }

        grunt.config('watch.main.tasks', tasksToRun);

    });

};