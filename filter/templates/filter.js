(function () {
    'use strict';

    /**
     * <%= _.classify(name) %>
     * @param  {[type]} name   [description]
     */
    function <%= _.classify(name) %>() {

        ///////////////////////////////////////////////
        // =============== PRIVATE ================= //
        ///////////////////////////////////////////////



        ///////////////////////////////////////////////
        // =============== PUBLIC API ============== //
        ///////////////////////////////////////////////

        //TODO: Implement your filter logic here
        
        return function (input, arg) {
            return 'filter';
        };

    }

    //-> ANGULAR
    angular
        .module('<%= appname %>')
        .filter('<%= _.camelize(name) %>', <%= _.classify(name) %>);

})();
