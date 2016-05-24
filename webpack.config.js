'use strict';

global.webpack = require('webpack');
global.path = require('path');
require('dotenv').load();

module.exports = require('./webpack/config');