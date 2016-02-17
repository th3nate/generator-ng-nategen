(function() {
    'use strict';

    /**
     * MessageService Object/function
     */
    function MessageService(PubSub) {

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        var _model = {
            message: null
        };

        /**
         * onMessageShow - onReload called when goals need to be reloaded.
         * @param  {[type]} topic [description]
         * @param  {[type]} data  [description]
         * @return {[type]}       [description]
         */
        function onMessageShow(topic, data) {
            _setMessage(data["code"], data["msg"], data["desc"]);
        }

        //-> Subscribe to event
        var sub = PubSub.subscribe('message-show', onMessageShow);

        /**
         * setMessage() - set a message on the model
         * @param {[type]} errCode        [description]
         * @param {[type]} errMsg         [description]
         * @param {[type]} errDescription [description]
         */
        function _setMessage(errCode, errMsg, errDescription) {
            var msg = {
                'code': errCode,
                'msg': errMsg,
                'desc': errDescription
            };

            _model.message = msg;
        }

        /**
         * clear() - clears message(s)
         */
        function _clear() {
            _model.message = null;
        }

        //-> init
        _clear();
        //_setMessage(100, 'hello', 'hello description');

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var service = {
            model: _model,
            setMessage: _setMessage,
            clear: _clear
        };

        return service;
    }

    //-> ANGULAR
    angular
        .module('common')
        .factory('messageService', MessageService);

})();