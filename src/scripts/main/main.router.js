 'use strict';

  function mainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
  
    $stateProvider
      .state('hi', {
         url: '/hi',
         views: {
              '': { 
                templateUrl: 'src/scripts/greeting/hello.html',
                // controller:
              },
              'say@hi': { 
                template : '<h1>안녕하세요</h1>'
              }
        }
     })
     .state('bye', {
         url: '/bye',
         views: {
              '': { 
                templateUrl: 'src/scripts/greeting/bye.html',
              },
              'say@bye': { 
                template : '<h1>안녕히 가세요</h1>'
              }
        }
     });
  }

  mainRouter.$inject = ['$stateProvider','$urlRouterProvider'];

  angular.module('test.main.router', [])
    .config(mainRouter);

