(function () {
    'use strict';

    /**
     * <%= _.classify(name) %> - Modal
     */
    function <%= _.classify(name) %>() {

        //-> vm (view-model) is the object we bind to (this controller).
        var vm = this;

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        var _someThing = true;

        /**
         * _doSomething() - Private function
         * @return {N/A}
         */
        function _doSomething(val) {
            _someThing = val;
        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////
        
        vm.doSomething = _doSomething;

    }

    //-> ANGULAR
    angular
        .module('<%= appname %>')
        .controller('<%= _.camelize(name) %>', <%= _.classify(name) %>);

})();
