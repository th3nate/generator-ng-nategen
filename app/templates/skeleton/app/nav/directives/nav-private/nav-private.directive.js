(function() {
    'use strict';

    /**
     * NavPrivate Object/function
     */
    function NavPrivate(appDateService) {

        var vm = this;

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        //-> Directive's link function
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        
        }

        //-> Directive's controller function
        function NavPrivateController($scope, $log, $state) {
            $log = $log.getInstance('NavPrivateController', true);
            $log.debug("load()");

            var vm = this;
            vm.appDateService = appDateService;

        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var directive = {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: 'nav/directives/nav-private/nav-private.directive.html',
            link: _link,
            controller: NavPrivateController,
            controllerAs: 'vm'

        };

        return directive;

    }

    //-> ANGULAR
    angular
        .module('nav')
        .directive('navPrivate', NavPrivate);

})();