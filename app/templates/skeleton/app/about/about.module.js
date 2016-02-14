(function() {
    'use strict';

    //-> CREATE module
    angular
        .module('about', ['common']);

    //-> Module's CONFIG
    angular
        .module('about')
        .config(function($stateProvider) {

            $stateProvider.state('shell.about', {
                url: '/about',
                views: {
                    'shellContentView@shell': {
                        templateUrl: 'about/templates/about.template.html',
                        controller: 'aboutController',
                        controllerAs: 'vm'
                    }
                }
            });

            /* Add New States Above */

        });
})();