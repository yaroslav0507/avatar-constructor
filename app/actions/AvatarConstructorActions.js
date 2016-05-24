'use strict';

import dispatcher from '../dispatcher/AvatarConstructorDispatcher';
import ACTION_CONSTANTS from '../constants/ACTIONS';

const AvatarConstructorActions = {
    setFace: function (src) {
	dispatcher.dispatch({
	    type: ACTION_CONSTANTS.SET_FACE,
	    src: src
	})
    }
};

export default AvatarConstructorActions;