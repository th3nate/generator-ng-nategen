(function() {
	'use strict';

    //-> CREATE module
	angular
		.module('common', ['log.ex.uo', 'PubSub', 'pouchdb', 'pascalprecht.translate', 'ngAria', 'ui.bootstrap', 'ui.router', 'ngAnimate', 'angular-loading-bar', 'angularMoment', 'nvd3']);

    //-> Module's CONFIG
	angular
		.module('common')
		.config(function() {

			/* Add New States Above */

		});

})();