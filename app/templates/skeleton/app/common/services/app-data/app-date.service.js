(function() {
    'use strict';

    /**
     * AppDateService - Service
     */
    function AppDateService($q, $log, dataService) {

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        function _doSomething() {
            // Do Something...
        }

        var _menu = [{ name: 'home', state: 'shell.home' }, { name: 'about', state: 'shell.about' }];

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var service = {
            doSomething: _doSomething,
            menu: _menu
        };

        return service;

    }

    //-> ANGULAR
    angular
        .module('common')
        .service('appDateService', AppDateService);

})();
