/* global process */
import angular from 'angular';
import ngAria from 'angular-aria';
import uiRouter from 'angular-ui-router';
import 'lodash';
import 'restangular';

import '../styles/main.scss';

import config from 'app.config';

import appConfig from './app.config';
import appRoute from './app.route';
import appComponent from './app.component';

angular.module('app', [
  ngAria,
  'restangular',
  uiRouter
])
.config(appConfig)
.config(appRoute)
.constant('CONFIG', config)
.constant('ENVIRONNEMENT', process.env.ENV_NAME)
.component('app', appComponent);
