'use strict';

import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import SaveIcon from 'material-ui/svg-icons/content/save';

import fabric from 'fabric/dist/fabric.require';
import AvatarConstructorStore from '../../stores/AvatarConstructorStore';
import defaultPositions from '../../constants/DEFAULT_POSITIONS';


export default class Canvas extends React.Component {
    constructor(){
	super();
	this.currentObject = {};
	this.width = 400;
	this.height = 480;
    }

    componentDidMount(){
	this.canvas = new fabric.Canvas('canvas', {
	    width: this.width,
	    height: this.height
	});
	this.drawBackground();
	this.drawAvatar({face: '', hair: '', glasses: '', clothes: ''});
    }

    drawBackground(){
	const { background } = this.props;
	this.canvas.setBackgroundImage(background);
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
	    type === 'face' ? this.canvas.sendToBack(img) : '';
	    type === 'glasses' ? this.canvas.bringToFront(img) : '';
	});
    }

    removeObject(type) {
	this.canvas.remove(this.currentObject[type]);
    }

    componentDidUpdate(prevProps){
	this.drawAvatar(prevProps);
    }

    onSaveButtonClicked(event){
	let link = event.target;
	link.href = this.canvas.toDataURL();
	link.download = 'avatar.png';
    }

    render(){
	function saveAvatar(event){
	    console.log(event);
	    this.onSaveButtonClicked(event);
	}
	return (
	    <div className="canvas-wrapper">
		<canvas id="canvas"></canvas>

		<a href="#" className="material-link" onClick={saveAvatar.bind(this)}>Save Image</a>
	    </div>
	)
    }
}