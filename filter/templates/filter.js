(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * <%= _.classify(name) %> Object/function
     */
    function <%= _.classify(name) %> () {

        /***************** PRIVATE *******************/


        /****************** PUBLIC *******************/
        //TODO: Implement your filter logic here
        return function (input, arg) {
            return 'filter';
        };

    }

    /* ANGULAR */
    angular
        .module('<%= appname %>')
        .filter('<%= _.camelize(name) %>', <%= _.classify(name) %> );

})();
