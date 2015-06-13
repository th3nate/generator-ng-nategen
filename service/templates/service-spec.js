(function () {
    'use strict';

    describe('<%= _.camelize(name) %>', function () {

        var service;

        beforeEach(function () {
            module('<%= appname %>');

            inject(function ( <%= _.camelize(name) %> ) {
                service = <%= _.camelize(name) %> ;
            });
        });

        it('should ...', function () {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
