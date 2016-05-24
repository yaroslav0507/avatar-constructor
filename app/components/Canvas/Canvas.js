'use strict';

import React from 'react';
import fabric from 'fabric/dist/fabric.require';

let canvas;
const styles = {
    canvas: {
	width: 437,
	height: 466,
	margin: 'auto',
	backgroundImage: 'url(img/prev_avatar.png)'
    }
};

export default class Canvas extends React.Component {
    componentDidMount(){

	canvas = new fabric.Canvas('canvas', {
	    width: 400,
	    height: 400
	});

	var rect = new fabric.Rect({
	    left: 100,
	    top: 100,
	    fill: 'red',
	    width: 20,
	    height: 20
	});

	canvas.add(rect);

    }

    render(){
	return (
	    <canvas id="canvas" style={styles.canvas}></canvas>
	)
    }
}