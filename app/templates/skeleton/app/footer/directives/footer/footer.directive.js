(function () {
    'use strict';

    /**
     * Footer
     * @param  {[type]} name   [description]
     */
    function FooterMain() {

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
            templateUrl: 'footer/directives/footer/footer.directive.html',
            link: _link
        };

        return directive;

    }

    //-> ANGULAR
    angular
        .module('footermain')
        .directive('footerMain', FooterMain);

})();
