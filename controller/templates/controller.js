(function() {
    'use strict';
    
    /**
     * <%= _.classify(name) %> Object/function
     */
    function <%= _.classify(className) %>($log) {

        $log = $log.getInstance('<%= _.classify(className) %>', true);
        $log.debug("Loaded");

        //-> vm (view-model) is the object we bind to (this controller).
        var vm = this;

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        var _name = '<%= _.classify(className) %>';

        /**
         * getName() - Private function
         */
        function _getName(val) {
            return _name;
        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        vm.getName = _getName;

    }

    //-> ANGULAR
    angular
        .module('<%= appname %>')
        .controller('<%= _.camelize(className) %>', <%= _.classify(className) %>);

})();