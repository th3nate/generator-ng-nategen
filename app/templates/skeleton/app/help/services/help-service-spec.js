(function () {
    'use strict';

    describe('helpService', function () {

        var service;

        beforeEach(function () {
            module('help');

            inject(function (helpService) {
                service = helpService;
            });
        });

        it('API getData()', function () {

            expect(service.getData()).toBeDefined();

        });

    });

})();
