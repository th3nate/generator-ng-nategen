(function () {
    'use strict';

    describe('AboutController', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('about');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('AboutController', {
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
