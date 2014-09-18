'use strict';

var angular = require('angular');
var uiRouter = require('uiRouter');
var mainCtrl = require('../components/ctrl.mainCtrl.js');
var giphy = require('../components/giphy.js');

var app = angular.module('app', [ 'ui.router' ]);

app.controller(
  'mainCtrl', mainCtrl, [ 'giphy' ]
)
app.service(
    'giphy', giphy, [ '$http' ]
)
