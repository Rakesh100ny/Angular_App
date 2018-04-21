var app =
  angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'angular.filter']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider,$mdThemingProvider) {
  $stateProvider

    .state('test', {
      url: '/test',
      templateUrl: 'templates/test.html',
      controller: 'mainController'
    })

    .state('checkbox', {
      url: '/checkbox',
      templateUrl: 'templates/checkboxAction.html',
      controller: 'checkboxCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })


    .state('checkFilter', {
      url: '/checkFilter',
      templateUrl: 'templates/checkboxUsingFilter.html',
      controller: 'checkBoxFilterCtrl'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })



    .state('readJson', {
      url: '/readJson',
      templateUrl: 'templates/readingData.html',
      controller: 'jsonCtrl'
    })

    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'dashboardCtrl'
    });
  $urlRouterProvider.otherwise('/login');


}]);
