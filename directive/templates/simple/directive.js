(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * <%= _.classify(name) %> Object/function
     */
    function <%= _.classify(name) %> () {

        /***************** PRIVATE *******************/

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'EA',
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('<%= appname %>')
        .directive('<%= _.camelize(name) %>', <%= _.classify(name) %> );

})();
