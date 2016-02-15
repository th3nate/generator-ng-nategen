(function() {
    'use strict';

    /**
     * HomeController Object/function
     */
    function HomeController($log, $q, homeService, dataService) {

        $log = $log.getInstance('HomeController', true);
        $log.debug("Loaded");

        //-> vm (view-model) is the object we bind to (this controller).
        var vm       = this;
        var defer    = $q.defer();
        var promise  = defer.promise;
        var request  = '/data/sample.json';
        var response = null;

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

        dataService.get(request)
            .then(function (response) {
                    // update model
                    homeService.response = response;
                },
                function(error) {
                    // exception
                    homeService.response = error;
                }
            );

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