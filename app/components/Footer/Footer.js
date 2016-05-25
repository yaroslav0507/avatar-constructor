'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';

export default class Footer extends React.Component {
    render() {
	return (
	    <div className="footer">
		© Created by <a href="https://github.com/yaroslav0507"
				className="footer__author"
	    			target="_blank">Yaroslav Zaklinskyi</a>
	    </div>
	)
    }
}