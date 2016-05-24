'use strict';

require("./scss/core.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AvatarConstructor from './components/AvatarConstructor';

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
	<AvatarConstructor />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
