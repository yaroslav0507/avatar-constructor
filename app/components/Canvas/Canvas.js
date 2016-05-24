'use strict';

import React from 'react';
import fabric from 'fabric/dist/fabric.require';
import AvatarConstructorStore from '../../stores/AvatarConstructorStore';

export default class Canvas extends React.Component {
    constructor(){
	super();
	this.currentObject = {};
    }

    initialize(){
	this.canvas = new fabric.Canvas('canvas', {
	    width: 400,
	    height: 580
	});
    }

    drawAvatar(){
	const { face, hair, glasses, clothes } = this.props.avatar;

	face && this.addObject('face', face);
	hair && this.addObject('hair', hair);
	glasses && this.addObject('glasses', glasses);
	clothes && this.addObject('clothes', clothes);
    }

    addObject(type, src) {
	this.removeObject(type);
	fabric.Image.fromURL(src, img => {
	    this.currentObject[type] = img;
	    this.canvas.add(img);
	});
    }

    removeObject(type) {
	this.canvas.remove(this.currentObject[type]);
    }

    componentDidUpdate(){
	this.drawAvatar();
    }

    componentDidMount(){
	this.initialize();
    }

    render(){
	return (
	    <div>
		<canvas id="canvas"></canvas>
	    </div>
	)
    }
}