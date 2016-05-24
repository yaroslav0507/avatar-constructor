'use strict';

import React from 'react';

const styles = {
    canvas: {
	width: 437,
	height: 466,
	margin: 'auto',
	backgroundImage: 'url(img/prev_avatar.png)'
    }
};

export default class Canvas extends React.Component {
    render(){
	return (
	    <div style={styles.canvas}></div>
	)
    }
}