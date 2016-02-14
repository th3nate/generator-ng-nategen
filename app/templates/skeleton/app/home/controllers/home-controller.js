(function() {
    'use strict';

    /**
     * HomeController Object/function
     */
    function HomeController($log, homeService) {

        $log = $log.getInstance('HomeController', true);
        $log.debug("Loaded");

        //-> vm (view-model) is the object we bind to (this controller).
        var vm = this;

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        var _name = 'HomeController';

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
        vm.service = homeService;
    }

    //-> ANGULAR
    angular
        .module('home')
        .controller('homeController', HomeController);

})();