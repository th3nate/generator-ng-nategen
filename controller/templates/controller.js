(function () {
    'use strict';

    /**
     * <%= _.classify(name) %>
     * @param  {[type]} name   [description]
     */
    function <%= _.classify(className) %> () {

        //-> vm (view-model) is the object we bind to (this controller).
        var vm = this;

        ///////////////////////////////////////////////
        // =============== PRIVATE ================= //
        ///////////////////////////////////////////////

        var _model = {
            name: ''
        };

        //-> init
        _model.name = '<%= _.classify(className) %>';

        ///////////////////////////////////////////////
        // =============== PUBLIC API ============== //
        ///////////////////////////////////////////////

        vm.model = _model;

    }

    //-> ANGULAR
    angular
        .module('<%= appname %>')
        .controller('<%= _.camelize(className) %>', <%= _.classify(className) %> );

})();
