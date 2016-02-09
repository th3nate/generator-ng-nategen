(function() {
    'use strict';

    //-> CREATE module
    angular.module('home', ['common']);

    //-> Module's CONFIG
    angular
        .module('home')
        .config(function($stateProvider) {

            $stateProvider.state('shell.home', {
                url: '/home',
                views: {
                    'shellNavView': {
                        template: '<nav-private></nav-private>'
                    },
                    'shellSideView': {
                        template: '<sidenav></sidenav>'
                    },
                    'shellContentView': {
                        templateUrl: 'home/templates/home-template.html',
                        controller: 'homeController',
                        controllerAs: 'vm'
                    }
                }
            });

            /* Add New States Above */

        });

})();