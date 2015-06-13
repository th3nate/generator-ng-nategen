(function () {
    'use strict';

    describe('<%= ctrlname %>', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('<%= appname %>');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('<%= ctrlname %>', {
                    $scope: scope
                });
            });
        });

        it('should ...', function () {

            //TODO: Add your logic here
            expect(1).toEqual(1);

        });

    });

})();
