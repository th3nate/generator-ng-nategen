(function() {
    'use strict';

    //-> CREATE module
    angular
        .module('shell', ['common']);

    //-> Module's CONFIG
    angular
        .module('shell')
        .config(function($stateProvider) {

            $stateProvider.state('shell', {
                url: '',
                abstract: true,
                views: {
                    '': {
                        templateUrl: 'shell/templates/shell.html',
                        controller: 'shellController',
                        controllerAs: 'vm'
                    }
                }
            });
            /* Add New States Above */

        });
})();