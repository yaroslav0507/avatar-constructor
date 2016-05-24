'use strict';

import React from 'react';
import PREDEFINED_IMAGES from '../../constants/PREDEFINED_IMAGES';

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