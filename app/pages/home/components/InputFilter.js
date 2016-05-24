'use strict';

import React from 'react'

let InputFilter = React.createClass({
    render: function(){
	return (
	    <input type="text" className="input-filter" onChange={this.props.onChange} />
	)
    }
});

module.exports = InputFilter;