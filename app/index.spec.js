var React = require('react');
var HomePage = require("./pages/homePage.js");

describe('homepage', function () {

    it('renders without problems', function () {
        var root = TestUtils.renderIntoDocument(<HomePage/>);
        root.should.be.a.object;
    });

});