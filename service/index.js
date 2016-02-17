'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var ServiceGenerator = module.exports = function ServiceGenerator(args, options, config) {

    cgUtils.getNameArg(this, args);
    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(ServiceGenerator, yeoman.generators.Base);

ServiceGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [{
        type: 'confirm',
        name: 'needtemplate',
        message: 'Will this service act as a command?',
        default: false
    }];

    cgUtils.addNamePrompt(this, prompts, 'service');

    this.prompt(prompts, function(props) {
        if (props.name) {
            this.name = props.name;
        }
        this.needtemplate = props.needtemplate;
        cgUtils.askForModuleAndDir('service', this, false, cb); //Tapas: no need to ask for own directory(this.needtemplate)
    }.bind(this));

};

ServiceGenerator.prototype.files = function files() {

    var configName = 'serviceSimpleTemplates';
    var defaultDir = 'templates/simple';
    if (this.needtemplate) {
        configName = 'serviceComplexTemplates';
        defaultDir = 'templates/complex';
    }

    this.htmlPath = path.join(this.dir, this.name + '.service.html').replace(/\\/g, '/');
    this.htmlPath = this.htmlPath.replace('app/', '');

    cgUtils.processTemplates(this.name, this.dir, 'command', this, defaultDir, configName, this.module);

};
