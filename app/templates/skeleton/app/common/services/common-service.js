(function() {
    'use strict';

    /**
     * CommonService Object/function
     */
    function CommonService() {

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        //-> Always bind to an Object.property
        var _model = {
            data: null
        };

        /**
         * doSomething() - Private function
         */
        function _doSomething() {
            // add logic here...
        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var service = {
            doSomething: _doSomething,
            get data() {
                return _model.data;
            },
            set data(val) {
                _model.data = val;
            }
        };

        return service;

    }

    //-> ANGULAR
    angular
        .module('common')
        .factory('commonService', CommonService);

})();