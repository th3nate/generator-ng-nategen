(function () {
    'use strict';

    describe('shell', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('shell');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('shellController', {
                    $scope: scope
                });
            });
        });

        it('API should have getName function', function () {

            expect(ctrl.getName).toBeDefined();

        });

    });

})();
