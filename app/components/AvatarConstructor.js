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
	width: '100%',
	maxWidth: 1200,
	margin: 'auto'
    },
    paperLeft:{
	flex: 1,
	height: 655,
	margin: 10,
	textAlign: 'center',
	padding: 10
    },
    paperRight:{
	height: 655,
	maxWidth: 900,
	flex: 3,
	margin: 10,
	textAlign: 'center'
    }
};

export default class AvatarConstructor extends React.Component{
    constructor(){
	super();

	this.state = {
	    avatar: AvatarConstructorStore.getDefaultState()
	}
    }

    onStoreChanged(){
	this.setState({
	    avatar: AvatarConstructorStore.getState()
	});
    }

    componentDidMount(){
	AvatarConstructorStore.addChangeListener(this.onStoreChanged.bind(this));
    }

    componentWillUnmount() {
	AvatarConstructorStore.removeChangeListener(this.onStoreChanged.bind(this));
    }

    render(){
	return (
	    <div>
		<NavigationBar />
		<div style={styles.div}>
		    <Paper style={styles.paperLeft}>
			<Canvas {...this.state.avatar}/>
		    </Paper>
		    <Paper style={styles.paperRight}>
			<AvatarComponentsTabs />
		    </Paper>
		</div>
	    </div>
	)
    }
}