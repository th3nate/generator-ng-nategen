(function() {
    'use strict';

    /**
     * CommonController Object/function
     */
    function CommonController($log) {

        $log = $log.getInstance('CommonController', true);
        $log.debug("Loaded");

        //-> vm (view-model) is the object we bind to (this controller).
        var vm = this;

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        var _name = 'CommonController';

        /**
         * getName() - Private function
         */
        function _getName(val) {
            return _name;
        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        vm.getName = _getName;

    }

    //-> ANGULAR
    angular
        .module('common')
        .controller('commonController', CommonController);

})();