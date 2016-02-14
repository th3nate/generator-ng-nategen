(function () {
    'use strict';

    angular.module('<%= _.camelize(appname) %>', ['common', 'shell', 'home', 'nav', 'sidenav', 'footermain']);

    ////////////////////////////
    //-> CONFIG: App (module) //
    ////////////////////////////
    angular
        .module('<%= _.camelize(appname) %>')
        .config(function ($stateProvider, $httpProvider, logExProvider, cfpLoadingBarProvider) {

            //-> configure log extender
            logExProvider.enableLogging(true);
            //logExProvider.restrictLogMethods(['log', 'info']);
            
            //-> configure loading bar
            cfpLoadingBarProvider.latencyThreshold = 100;
            cfpLoadingBarProvider.includeBar       = false;
            cfpLoadingBarProvider.spinnerTemplate  = '<div><span class="fa fa-spinner">Loading...</div>';

            //-> configure state
            $stateProvider.state("otherwise", {
                url: "*path",
                template: "",
                controller: [
                    '$state',
                    function ($state) {
                        $state.go('shell.home');
                    }
                ]
            });

            /* Add New States Above */

        });

    /////////////////////////
    //-> RUN: App (module) //
    /////////////////////////
    angular
        .module('<%= _.camelize(appname) %>')
        .run(function ($log, $rootScope) {
            
            $log = $log.getInstance('app', true);
            $log.debug("run()");

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
