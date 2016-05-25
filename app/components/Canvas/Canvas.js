'use strict';

import React from 'react';
import fabric from 'fabric/dist/fabric.require';
import AvatarConstructorStore from '../../stores/AvatarConstructorStore';

const defaultPositions = {
    face: {
	top: 80,
	left: 40
    },
    hair: {
	top: 40,
	left: 27
    },
    glasses: {
	top: 150,
	left: 47
    },
    clothes: {
	top: 280,
	left: 27
    }
};

export default class Canvas extends React.Component {
    constructor(){
	super();
	this.currentObject = {};
    }

    componentDidMount(){
	this.canvas = new fabric.Canvas('canvas', {
	    width: 400,
	    height: 580
	});
    }

    drawAvatar(prevProps){
	const { face, hair, glasses, clothes } = this.props;

	if(face && prevProps.face !== face) {
	    this.addObject('face', face);
	}

	if(hair && prevProps.hair !== hair){
	    this.addObject('hair', hair);
	}

	if(glasses && prevProps.glasses !== glasses){
	    this.addObject('glasses', glasses);
	}

	if(clothes && prevProps.clothes !== clothes) {
	    this.addObject('clothes', clothes);
	}
    }

    addObject(type, src) {
	this.removeObject(type);
	let position = defaultPositions[type];

	fabric.Image.fromURL(src, img => {
	    this.currentObject[type] = img;
	    img.set(position);
	    this.canvas.add(img);

	    img.on('selected', (img) => {
		console.log('Selected', img);
	    });
	});
    }

    removeObject(type) {
	this.canvas.remove(this.currentObject[type]);
    }

    componentDidUpdate(prevProps){
	this.drawAvatar(prevProps);
    }

    render(){
	return (
	    <canvas id="canvas"></canvas>
	)
    }
}