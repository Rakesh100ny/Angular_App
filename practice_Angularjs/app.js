var app =
  angular.module('myApp', ['ui.router', 'ngMaterial']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('parent', {
      url: '/parent',
      templateUrl: 'template/parent.html',
      controller: 'firstCtrl'
    })

    .state('child', {
      url: '/child',
      templateUrl: 'template/child.html',
      controller: 'secondCtrl'
    });

  $urlRouterProvider.otherwise('/child');

}]);
