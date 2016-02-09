(function () {
    'use strict';

    var assert = require('assert');

    describe('ng-nategen generator', function () {
        it('can be imported without blowing up', function () {
            var app = require('../app');
            assert(app !== undefined);
        });
    });

})();
