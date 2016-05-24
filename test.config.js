(function () {
    require('core-js/es5');
    window.TestUtils = require('react/lib/ReactTestUtils');

    var chai = require('chai');
    chai.should();

    loadSpecs();

    function loadSpecs() {
        var context = require.context('./app', true, /\.spec\.js$/);
        context.keys().forEach(context);
    }

    beforeEach(function() {
        window.env = sinon.sandbox.create();
    });

    afterEach(function() {
        window.env.restore();
    });
})();
