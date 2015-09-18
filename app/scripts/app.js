'use strict';

/**
 * @ngdoc overview
 * @name justinPortfolio
 * @description
 * # justinPortfolio
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        //controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
        //controller: 'scripts/controllers'/
      })
      .when('/work', {
        templateUrl: 'views/work.html'
        //controller: 'scripts/controllers'/
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
        //controller: 'scripts/controllers'/
      })
      .otherwise({
        redirectTo: '/'
      });
  });
