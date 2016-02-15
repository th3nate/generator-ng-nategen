(function() {
    'use strict';

    /**
     * AppDate - Service
     */
    function AppDate($q, $log, dataService) {

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        function _doSomething(){
            // Do Something...
        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var service = {
            doSomething: _doSomething
        };

        return service;

    }

    //-> ANGULAR
    angular
        .module('common')
        .service('appDate', AppDate);

})();