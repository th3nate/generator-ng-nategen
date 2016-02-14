(function() {
    'use strict';

    /**
     * <%= _.classify(name) %> - Service
     */
    function <%= _.classify(name) %>() {

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        //-> Always bind to an Object.property
        var _model = {
            data: null
        };

        /**
         * _doSomething() - Private function
         * @return {N/A}
         */
        function _doSomething() {
            // add logic here...
        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var service = {
            doSomething: _doSomething,
            get data() {
                return _model.data;
            },
            set data(val) {
                _model.data = val;
            }
        };

        return service;

    }

    //-> ANGULAR
    angular
        .module('<%= appname %>')
        .service('<%= _.camelize(name) %>', <%= _.classify(name) %>);

})();