'use strict';

global.webpack = require('webpack');
global.path = require('path');
global.projectDir = __dirname;
require('dotenv').load();

module.exports = require('./webpack/config');