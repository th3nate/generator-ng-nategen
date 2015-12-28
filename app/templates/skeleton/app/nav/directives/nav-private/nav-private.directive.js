(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * NavPrivate Object/function
     */
    function NavPrivate () {
        var vm = this;
        /***************** PRIVATE *******************/

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        /* @ngInject */
        function NavPrivateController(userProfileService,taskService) {
            console.log('NavPrivateController');
            var vm = this;
            userProfileService.getData();
            taskService.getData();
            
            
            
            
            // expose service model to binding            
            vm.model = userProfileService.model;
            vm.notifications = taskService.model;
            
            //vm.approvedTasks = notificationService.approveTask;
            //vm.notifications = notificationService.model;
        }


        
        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
            },
            templateUrl: 'nav/directives/nav-private/nav-private.directive.html',
            link: _link,
            controller: NavPrivateController,
            controllerAs: 'vm'

        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('nav')
        .directive('navPrivate', NavPrivate );

})();
