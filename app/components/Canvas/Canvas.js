'use strict';

import React from 'react';
import fabric from 'fabric/dist/fabric.require';
import AvatarConstructorStore from '../../stores/AvatarConstructorStore';

let canvas;

export default class Canvas extends React.Component {
    constructor(){
	super();
    }

    drawAvatar(){
	const { face } = this.props.avatar;

	canvas = new fabric.Canvas('canvas', {
	    width: 400,
	    height: 580
	});

	fabric.Image.fromURL(face, function(oImg) {
	    canvas.add(oImg);
	});


    }

    componentWillUpdate(){
	this.drawAvatar();
    }

    componentDidMount(){
	this.drawAvatar();
    }

    render(){
	return (
	    <div>
		<canvas id="canvas"></canvas>
	    </div>
	)
    }
}