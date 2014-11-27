'use strict';

/**
 * @ngdoc overview
 * @name fennergolfApp
 * @description
 * # fennergolfApp
 *
 * Main module of the application.
 */
angular
  .module('fennergolfApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/group-lessons', {
        templateUrl: 'views/group-lessons.html',
        controller: 'GroupLessonsCtrl'
      })   
      .when('/indoor-golf', {
        templateUrl: 'views/indoor-golf.html'
        // controller: 'IndoorGolfCtrl'
      }) 
      .when('/junior-clinics', {
        templateUrl: 'views/junior-clinics.html'
        // controller: 'JuniorClinicsCtrl'
      })     
      .when('/private-lessons', {
        templateUrl: 'views/private-lessons.html'
        // controller: 'JuniorClinicsCtrl'
      }) 
      .when('/contact', {
        templateUrl: 'views/contact.html'
        // controller: 'JuniorClinicsCtrl'
      })                              
      .otherwise({
        redirectTo: '/'
      });
  });
