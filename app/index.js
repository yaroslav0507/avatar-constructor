'use strict';

require("./scss/core.scss");

import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './pages/home/homePage';

ReactDOM.render(
    <HomePage />,
    document.getElementById('content')
);
