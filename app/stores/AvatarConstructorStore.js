'use strict';

import AvatarConstructorDispatcher from '../dispatcher/AvatarConstructorDispatcher';
import { EventEmitter } from 'events';
import ACTIONS from '../constants/ACTIONS';
import PREDEFINED_IMAGES from '../constants/PREDEFINED_IMAGES';


const CHANGE_EVENT = 'change';
let _avatar = {
    face: `/img/grid-list/${PREDEFINED_IMAGES.faces[0]}`
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

    setFace(src){
	_avatar.face = src;
    }

    getState(){
	return _avatar;
    }

    handleActions(action){
	switch (action.type){
	    case ACTIONS.SET_FACE : {
		this.setFace(action.src);
		this.emitChange();
	    }
	}
    }
}

const store = new Store();
AvatarConstructorDispatcher.register(store.handleActions.bind(store));
export default store;