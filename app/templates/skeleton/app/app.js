(function () {
    'use strict';

    angular.module('<%= _.camelize(appname) %>', ['common', 'shell', 'home', 'help', 'auth', 'nav', 'sidenav']);

    // CONFIG: App (module)
    angular
        .module('<%= _.camelize(appname) %>')
        .config(function ($stateProvider, $httpProvider, localStorageServiceProvider, logExProvider, cfpLoadingBarProvider) {


            /* configure log extender */
            logExProvider.enableLogging(true);
            //logExProvider.restrictLogMethods(['log', 'info']);
            
            
            /* configure loading bar */
            //cfpLoadingBarProvider.latencyThreshold = 100;
            //cfpLoadingBarProvider.includeBar = false;
            //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';

            $stateProvider.state("otherwise", {
                url: "*path",
                template: "",
                controller: [
                    '$state',
                    function ($state) {
                        $state.go('shell.auth.signin');
                    }
                ]
            });
            /* Add New States Above */

            /* Config: local storage */
            localStorageServiceProvider
                .setPrefix('EchelonApp')
                .setStorageType('sessionStorage')
                .setNotify(true, true);

            /* add Authentication Interceptor */
            $httpProvider.interceptors.push('authInterceptor');

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
