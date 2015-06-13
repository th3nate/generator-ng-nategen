(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * <%= _.classify(className) %> Object/function
     */
    function <%= _.classify(className) %> () {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;

        /***************** PRIVATE *******************/
        var _model = {
            name: ''
        };

        // init
        _model.name = '<%= _.classify(className) %>';

        /****************** PUBLIC *******************/
        vm.model = _model;

    }

    angular
        .module('<%= appname %>')
        .controller('<%= _.camelize(className) %>', <%= _.classify(className) %> );

})();
