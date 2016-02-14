(function() {
    'use strict';

    /**
     * ShellController Object/function
     */
    function ShellController($log) {

        $log = $log.getInstance('ShellController', true);
        $log.debug("Loaded");

        //-> vm (view-model) is the object we bind to (this controller).
        var vm = this;

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        var _name = 'ShellController';

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
        .module('shell')
        .controller('shellController', ShellController);

})();
