(function () {
    'use strict';

    describe('appDate', function () {

        var service;

        beforeEach(function () {
            module('common');

            inject(function (appDate) {
                service = appDate;
            });
        });

        it('should ...', function () {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
