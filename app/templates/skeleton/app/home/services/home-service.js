(function() {
    'use strict';

    /**
     * HomeService Object/function
     */
    function HomeService() {

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        //-> Always bind to an Object.property
        var _model = {
            message: '',
            response: null
        };

        //-> initialize
        _model.message = 'Yeay! Your app is running.';

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var service = {
            get message() {
                return _model.message;
            },
            get response() {
                return _model.response;
            },
            set response(val) {
                _model.response = val;
            }
        };

        return service;

    }

    //-> ANGULAR
    angular
        .module('home')
        .service('homeService', HomeService);

})();