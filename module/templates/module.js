(function() {
    'use strict';

    //-> CREATE module
    angular
        .module('<%= _.camelize(name) %>', []);

    <% if (!uirouter) { %>
    //-> Module's CONFIG
    angular
        .module('<%= _.camelize(name) %>')
        .config(function() {

            /* Add New Routes Above */

        }); <%
    } %> 
    <% if (uirouter) { %>
    //-> Module's CONFIG
    angular
        .module('<%= _.camelize(name) %>')
        .config(function() {

            /* Add New States Above */

        }); 
        <%
    } %>

})();