'use strict';

import dispatcher from '../dispatcher/AvatarConstructorDispatcher';
import ACTION_CONSTANTS from '../constants/ACTIONS';

const AvatarConstructorActions = {
    setFace: function (src) {
	dispatcher.dispatch({
	    type: ACTION_CONSTANTS.SET_FACE,
	    src: src
	})
    },

    setHair: function (src) {
	dispatcher.dispatch({
	    type: ACTION_CONSTANTS.SET_HAIR,
	    src: src
	})
    },

    setGlasses: function (src) {
	dispatcher.dispatch({
	    type: ACTION_CONSTANTS.SET_GLASSES,
	    src: src
	})
    },

    setClothes: function (src) {
	dispatcher.dispatch({
	    type: ACTION_CONSTANTS.SET_CLOTHES,
	    src: src
	})
    }
};

export default AvatarConstructorActions;