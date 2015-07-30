(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ShellController Object/function
     */
    function ShellController() {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;

        /***************** PRIVATE *******************/
       var _name = 'HomeController';

        /**
         * getName() - Private function
         */
        function _getName(val) {
            return _name;
        }

        /****************** PUBLIC *******************/
        vm.getName = _getName;

    }

    angular
        .module('shell')
        .controller('shellController', ShellController);

})();
