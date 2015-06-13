(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * <%= _.classify(name) %> Object/function
     */
    function <%= _.classify(name) %> () {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;

        /***************** PRIVATE *******************/
        var _someThing = true;

        /**
         * doSomething() - Private function
         */
        function _doSomething(val) {
            _someThing = val;
        }

        /****************** PUBLIC *******************/
        vm.doSomething = _doSomething;

    }

    angular
        .module('<%= appname %>')
        .controller('<%= _.camelize(name) %>', <%= _.classify(name) %> );

})();
