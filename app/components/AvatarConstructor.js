'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';
import NavigationBar from './NavigationBar/NavigationBar';
import Canvas from './Canvas/Canvas';
import AvatarComponentsTabs from './AvatarComponentsTabs/AvatarComponentsTabs';
import AvatarConstructorStore from '../stores/AvatarConstructorStore';

const styles = {
    div:{
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: 20,
	width: '100%'
    },
    paperLeft:{
	flex: 1,
	height: 600,
	margin: 10,
	textAlign: 'center',
	padding: 10
    },
    paperRight:{
	height: 600,
	maxWidth: 900,
	flex: 3,
	margin: 10,
	padding: 10,
	textAlign: 'center'
    }
};

export default class AvatarConstructor extends React.Component{
    constructor(){
	super();

	this.onStoreChanged();
    }

    onStoreChanged(){
	this.state = {
	    avatar: AvatarConstructorStore.getState()
	}
    }

    componentDidMount(){
	AvatarConstructorStore.addChangeListener(this.onStoreChanged);
    }

    componentWillUnmount() {
	AvatarConstructorStore.removeChangeListener(this.onStoreChanged);
    }

    render(){
	return (
	    <div>
		<NavigationBar />
		<div style={styles.div}>
		    <Paper style={styles.paperLeft}>
			<Canvas store={this.state}/>
		    </Paper>
		    <Paper style={styles.paperRight}>
			<AvatarComponentsTabs />
		    </Paper>
		</div>
	    </div>
	)
    }
}