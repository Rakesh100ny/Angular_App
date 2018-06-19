var app =
  angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'angular.filter','jkAngularRatingStars']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
{
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'template/home.html',
      controller: 'homeCtrl'
    })

    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'template/dashboard.html',
      controller: 'dashboardCtrl'

    })

    .state("home.playerDetails", {
    url: "/playerDetails",
    templateUrl: "template/playerInfo.html",
    controller: 'playerCtrl'

    });

  $urlRouterProvider.otherwise('/home');

}]);
