app.controller("firstCtrl", function ($scope) {

$scope.$on('eventName', function (event, args) {

$scope.message = args.message;

}); });
