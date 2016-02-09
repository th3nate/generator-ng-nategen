'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var cgUtils = require('../utils.js');

var AppGenerator = module.exports = function AppGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.config.set('templateDirectory', 'templates/');
        this.config.set('directiveDirectory', 'directives/');
        this.config.set('filterDirectory', 'filters/');
        this.config.set('serviceDirectory', 'services/');
        this.config.set('controllerDirectory', 'controllers/');
        this.config.set('modalDirectory', 'modals/');
        var inject = {
            js: {
                file: 'app/index.html',
                marker: cgUtils.JS_MARKER,
                template: '<script src="<%= filename %>"></script>'
            },
            less: {
                relativeToModule: true,
                file: '<%= module %>.less',
                marker: cgUtils.LESS_MARKER,
                template: '@import "<%= filename %>";'
            }
        };
        this.config.set('inject', inject);
        var defaultModules = [
            {
                "name": "home",
                "file": path.join('app/home', 'home.module.js')
            },
            {
                "name": "common",
                "file": path.join('app/common', 'common.module.js')
            },
            {
                "name": "shell",
                "file": path.join('app/shell', 'shell.module.js')
            },
            {
                "name": "nav",
                "file": path.join('app/nav', 'nav.module.js')
            },
            {
                "name": "sidenav",
                "file": path.join('app/sidenav', 'sidenav.module.js')
            }
        ];
        this.config.set('modules', defaultModules);
        this.config.save();
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AppGenerator, yeoman.generators.Base);

AppGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [{
        name: 'appname',
        message: 'What would you like the angular application name to be?',
        default: path.basename(process.cwd())
    }];

    this.prompt(prompts, function (props) {
        this.appname = props.appname;
        this.config.set('uirouter', true);
        cb();
    }.bind(this));
};

//AppGenerator.prototype.askForUiRouter = function askFor() {
//    var cb = this.async();
//
//    var prompts = [{
//        name: 'router',
//        type: 'list',
//        message: 'Which router would you like to use?',
//        default: 1,
//        choices: ['Standard Angular Router(ngRoute)', 'Angular UI Router(ui.router)']
//    }];
//
//    this.prompt(prompts, function (props) {
//        if (props.router === 'Angular UI Router(ui.router)') {
//            this.uirouter = true;
//            this.routerJs = 'bower_components/angular-ui-router/release/angular-ui-router.js';
//            this.routerModuleName = 'ui.router';
//            this.routerViewDirective = 'ui-view';
//        } else {
//            this.uirouter = false;
//            this.routerJs = 'bower_components/angular-route/angular-route.js';
//            this.routerModuleName = 'ngRoute';
//            this.routerViewDirective = 'ng-view';
//        }
//        this.config.set('uirouter', this.uirouter);
//        cb();
//    }.bind(this));
//};

AppGenerator.prototype.app = function app() {
    this.directory('skeleton/', './');
};
