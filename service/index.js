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
        name: 'isCommand',
        message: 'Will this service act as a command?',
        default: false
    }];

    cgUtils.addNamePrompt(this, prompts, 'service');

    this.prompt(prompts, function(props) {
        if (props.name) {
            this.name = props.name;
        }
        this.isCommand = props.isCommand;
        cgUtils.askForModuleAndDir('service', this, true, cb); //Tapas: no need to ask for own directory(this.isCommand)
    }.bind(this));

};

ServiceGenerator.prototype.files = function files() {

    var configName = 'serviceSimpleTemplates';
    var defaultDir = 'templates/simple';
    var suffix     = 'service';
    if (this.isCommand) {
        configName = 'serviceComplexTemplates';
        defaultDir = 'templates/complex';
        suffix     = 'command';
    }

    this.htmlPath = path.join(this.dir, this.name + '.service.html').replace(/\\/g, '/');
    this.htmlPath = this.htmlPath.replace('app/', '');

    cgUtils.processTemplates(this.name, this.dir, suffix, this, defaultDir, configName, this.module);

};
