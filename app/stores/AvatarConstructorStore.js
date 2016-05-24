'use strict';

import AvatarConstructorDispatcher from '../dispatcher/AvatarConstructorDispatcher';
import { EventEmitter } from 'events';
import ACTIONS from '../constants/ACTIONS';

const CHANGE_EVENT = 'change';
let _avatar = {};

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
	console.log(src);
	_avatar.face = src;
	this.emitChange();
    }

    getState(){
	return _avatar;
    }

    handleActions(action){
	switch (action.type){
	    case ACTIONS.SET_FACE :
		this.setFace(action.src);
	}
    }
}

const store = new Store();
AvatarConstructorDispatcher.register(store.handleActions.bind(store));
export default store;