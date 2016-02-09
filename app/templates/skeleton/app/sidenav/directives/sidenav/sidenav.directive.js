(function() {
    'use strict';

    /**
     * Sidenav
     */
    function Sidenav() {

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        //-> Directive's link function
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var directive = {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: 'sidenav/directives/sidenav/sidenav.directive.html',
            link: _link
        };

        return directive;

    }

    //-> ANGULAR
    angular
        .module('sidenav')
        .directive('sidenav', Sidenav);

})();