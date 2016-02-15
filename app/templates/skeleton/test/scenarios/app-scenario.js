(function(){
    'use strict';

    describe('application <%= _.camelize(appname) %>', function() {

        var logo = element(by.id('logo'));
        var homeHeader = element(by.binding('message'));

        browser.get('http://localhost:9000/app');

        beforeEach(function() {
            // do tasks before running each scenario
        });

        it('should have a title', function() {

            expect(browser.getTitle()).toBeDefined();

        });

        it('should reload the app on click of logo', function() {

            logo.click();
            expect(homeHeader.getText()).toEqual('Congratulations! Your app is fully up and running.');

        });

    });

})();
