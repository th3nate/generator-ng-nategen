(function () {
    'use strict';

    // CREATE module
    angular
        .module('<%= _.camelize(name) %>', []);


    // Module's CONFIG
    <%
    if (!uirouter) { %>
        angular
            .module('<%= _.camelize(name) %>')
            .config(function ($routeProvider) {

                /* Add New Routes Above */

            }); <%
    } %> <%
    if (uirouter) { %>
        angular
            .module('<%= _.camelize(name) %>')
            .config(function ($stateProvider) {

                /* Add New States Above */

            }); <%
    } %>

})();
