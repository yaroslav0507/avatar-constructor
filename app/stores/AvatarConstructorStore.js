'use strict';

import AvatarConstructorDispatcher from '../dispatcher/AvatarConstructorDispatcher';
import { EventEmitter } from 'events';
import ACTIONS from '../constants/ACTIONS';
import PREDEFINED_IMAGES from '../constants/PREDEFINED_IMAGES';

const CHANGE_EVENT = 'change';
let _avatar = {};

let _defaultAvatar = {
    face: `/img/grid-list/${PREDEFINED_IMAGES.faces[0]}`,
    hair: `/img/grid-list/${PREDEFINED_IMAGES.beards[0]}`,
    glasses: `/img/grid-list/${PREDEFINED_IMAGES.glasses[0]}`,
    clothes: `/img/grid-list/${PREDEFINED_IMAGES.wear[6]}`,
    background: `/img/backgrounds/${PREDEFINED_IMAGES.backgrounds[0]}`
};

class Store extends EventEmitter {
    constructor(){
	super()
    }

    emitChange(){
	this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb){
	this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb){
	this.removeListener(CHANGE_EVENT, cb)
    }

    setAvatarComponent(component, src){
	_avatar[component] = src;
    }

    getState(){
	return _avatar;
    }

    getDefaultState(){
	return _defaultAvatar;
    }

    handleActions(action){
	switch (action.type){
	    case ACTIONS.SET_FACE : {
		this.setAvatarComponent('face', action.src);
		this.emitChange();
		break;
	    }

	    case ACTIONS.SET_HAIR : {
		this.setAvatarComponent('hair', action.src);
		this.emitChange();
		break;
	    }

	    case ACTIONS.SET_GLASSES : {
		this.setAvatarComponent('glasses', action.src);
		this.emitChange();
		break;
	    }

	    case ACTIONS.SET_CLOTHES : {
		this.setAvatarComponent('clothes', action.src);
		this.emitChange();
		break;
	    }
	}
    }
}

const store = new Store();
AvatarConstructorDispatcher.register(store.handleActions.bind(store));
export default store;