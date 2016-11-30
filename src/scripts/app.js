'use strict';

angular
  .module('test', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',

    'test.main'
  ])
  .constant('Config', {
	  localhost: "localhost:8000",
	});