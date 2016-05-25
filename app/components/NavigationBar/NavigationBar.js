import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Account from 'material-ui/svg-icons/image/camera';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    title: {
	fontWeight: 100,
	fontSize: 16
    }
};

const NavigationBar = () => (
    <AppBar
	iconElementLeft={<IconButton><Account /></IconButton>}
	title={<span style={styles.title}>Hipster Avatar Constructor</span>}
	iconElementRight={<FlatButton
	label="GitHub Page"
	linkButton={true}
	href="https://github.com/yaroslav0507/avatar-constructor"
	target="_blank"/>}
    />
);

export default NavigationBar;