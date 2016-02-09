(function() {
    'use strict';

    /**
     * DataService Object/function
     */
    function DataService($log, $http) {

        $log = $log.getInstance('DataService', true);
        $log.debug("load()");

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        /**
         * _get() - Private function
         */
        function _get(url) {

            $log.debug("get(" + url + ")");

            var req = {
                method: 'GET',
                url: url
            };

            return $http(req)
                .then(function successCallback(data, status, headers, config) {
                    $log.debug("done(" + url + ")");
                    return data;
                }, function errorCallback(response) {
                    $log.error(response);
                    return response;
                });

        }

        function _post(url, data, headers) {

            $log.debug("post(" + url + ")");

            var req = {
                method: 'POST',
                url: url,
                headers: headers,
                data: data
            };

            return $http(req)
                .then(function successCallback(data, status, headers, config) {
                    $log.debug("done(" + url + ")");
                    return data;
                }, function errorCallback(response) {
                    $log.error(response);
                    return response;
                });

        }

        ///////////////////////////////////////////////
        //-> ============= PUBLIC API ============== //
        ///////////////////////////////////////////////

        var service = {
            get: _get,
            post: _post
        };

        return service;
    }

    //-> ANGULAR
    angular
        .module('common')
        .service('dataService', DataService);

})();