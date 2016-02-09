(function () {
    'use strict';

    /**
     * <%= _.classify(name) %>
     * @param  {[type]} name   [description]
     */
    function <%= _.classify(name) %> () {

        ///////////////////////////////////////////////
        // =============== PRIVATE ================= //
        ///////////////////////////////////////////////

        //-> Directive's link function
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        ///////////////////////////////////////////////
        // =============== PUBLIC API ============== //
        ///////////////////////////////////////////////

        var directive = {
            restrict: 'EA',
            link: _link
        };

        return directive;

    }

    //-> ANGULAR
    angular
        .module('<%= appname %>')
        .directive('<%= _.camelize(name) %>', <%= _.classify(name) %> );

})();
