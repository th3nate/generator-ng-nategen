(function () {
    'use strict';

    describe('<%= _.classify(className) %>', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('<%= appname %>');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('<%= _.classify(className) %>', {
                    $scope: scope
                });
            });
        });

        it('should ...', function () {

            //TODO: Implement your controller spec logic here
            //expect(ctrl.doSomething()).toEqual('something');

        });

    });

})();
