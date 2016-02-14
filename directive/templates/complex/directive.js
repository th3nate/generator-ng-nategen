(function () {
    'use strict';

    /**
     * <%= _.classify(name) %> - Directive
     */
    function <%= _.classify(name) %>() {

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
            restrict: 'EA',
            replace: true,
            scope: {

            },
            templateUrl: '<%= htmlPath %>',
            link: _link
        };

        return directive;

    }

    //-> ANGULAR
    angular
        .module('<%= appname %>')
        .directive('<%= _.camelize(name) %>', <%= _.classify(name) %>);

})();
