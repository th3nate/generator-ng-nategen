(function () {
    'use strict';

    angular.module('<%= _.camelize(appname) %>', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'angular-loading-bar', 'shell', 'home', 'help', 'common']);

    // CONFIG: App (module)
    angular
        .module('<%= _.camelize(appname) %>')
        .config(function ($stateProvider, $urlRouterProvider) {

            /* Add New States Above */
            $urlRouterProvider.otherwise('');

        });

    // RUN: App (module)
    angular
        .module('<%= _.camelize(appname) %>')
        .run(function ($rootScope) {

            $rootScope.safeApply = function (fn) {
                var phase = $rootScope.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && (typeof (fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

        });

})();
