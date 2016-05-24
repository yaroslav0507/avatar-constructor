'use strict';

import React from 'react';

let UserInfo = React.createClass({
    render(){
	return (
	    <li>
		<div className="user__name">{this.props.user.name}</div>
		<div className="user__phone">{this.props.user.phone}</div>
	    </li>
	)
    }
});

module.exports = UserInfo;