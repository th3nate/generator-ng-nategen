(function() {
    'use strict';

    /**
     * DataService - Data Layer
     */
    function DataService($log, $q, $http) {

        $log = $log.getInstance('DataService', true);
        $log.debug("Loaded");

        ///////////////////////////////////////////////
        //-> ============= PRIVATE ================= //
        ///////////////////////////////////////////////

        /**
         * _get() - Private function
         */
        function _get(url) {

            $log.debug("get(" + url + ")");

            var defer = $q.defer();
            var promise = defer.promise;
            var req = {
                method : 'GET',
                url    : url
            };

            $http(req)
                .then(function successCallback(data, status, headers, config) {
                    $log.debug("done(" + url + ")");
                    defer.resolve(data); // resolve the data back to app-data layer
                }, function errorCallback(response) {
                    $log.error(response);
                    defer.reject(response); // reject the data incase of an error
                });

            return promise;
        }

        /**
         * _post() - Private function
         */
        function _post(url, data, headers) {

            $log.debug("post(" + url + ")");

            var defer = $q.defer();
            var promise = defer.promise;
            var req = {
                method: 'POST',
                url: url,
                headers: headers,
                data: data
            };

            $http(req)
                .then(function successCallback(data, status, headers, config) {
                    $log.debug("done(" + url + ")");
                    defer.resolve(data); // resolve the data back to app-data layer
                }, function errorCallback(response) {
                    $log.error(response);
                    defer.reject(response); // reject the data incase of an error
                });

            return promise;
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
