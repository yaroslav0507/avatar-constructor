'use strict';

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AvatarComponentsTabs from '../AvatarComponentsTabs/AvatarComponentsTabs';

const PREDEFINED_IMAGES = {
    faces: [
	'face_1.png',
	'face_2.png'
    ],
    glasses: [
	'glasses_1.png',
	'glasses_3.png',
	'glasses_2.png',
	'glasses_4.png'
    ],
    beards: [
	'beard_1.png',
	'beard_2.png',
	'beard_3.png',
	'beard_4.png',
	'beard_5.png',
	'beard_6.png',
	'beard_7.png',
	'beard_8.png',
	'beard_9.png',
	'beard_10.png'
    ],
    wear: [
	'wear_1.png',
	'wear_2.png',
	'wear_3.png',
	'wear_4.png',
	'wear_5.png',
	'wear_6.png',
	'wear_7.png',
	'wear_8.png'
    ]
};

export const Faces = PREDEFINED_IMAGES.faces.map(image => {
    return {
	src: `img/grid-list/${image}`
    }
});

export const Hair = PREDEFINED_IMAGES.beards.map(image => {
    return {
	src: `img/grid-list/${image}`
    }
});

export const Clothes = PREDEFINED_IMAGES.wear.map(image => {
    return {
	src: `img/grid-list/${image}`
    }
});

export const Glasses = PREDEFINED_IMAGES.glasses.map(image => {
    return {
	src: `img/grid-list/${image}`
    }
});