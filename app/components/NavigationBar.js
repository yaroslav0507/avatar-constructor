import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const NavigationBar = () => (
    <AppBar
	title={<span>Avatar Constructor</span>}
	iconElementRight={<FlatButton label="Save" />}
    />
);

export default NavigationBar;