(function() {
    'use strict';

    // CREATE module
    angular
        .module('<%= _.camelize(name) %>', []);


    // Module's CONFIG
    <% if (!uirouter) { %>
    angular
        .module('<%= _.camelize(name) %>')
        .config(function() {

            /* Add New Routes Above */

        }); <%
    } %> <%
    if (uirouter) { %>
    angular
        .module('<%= _.camelize(name) %>')
        .config(function() {

            /* Add New States Above */

        }); <%
    } %>

})();