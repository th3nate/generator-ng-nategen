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
                    },
                    'shellNavView@shell': {
                        template: '<nav-private></nav-private>'
                    },
                    /*'shellSideView@shell': {
                        template: '<sidenav></sidenav>'
                    },*/
                    'shellFooterView@shell': {
                        template: '<footer-main></footer-main>'
                    }
                }
            });
            /* Add New States Above */

        });
})();