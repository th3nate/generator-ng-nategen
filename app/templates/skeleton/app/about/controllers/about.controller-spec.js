(function () {
    'use strict';

    describe('aboutController', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('about');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('aboutController', {
                    $scope: scope
                });
            });
        });

        it('API should have getName function', function () {

            expect(ctrl.getName).toBeDefined();

        });

    });

})();
