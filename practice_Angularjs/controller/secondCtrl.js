app.controller("secondCtrl", function ($scope) {

$scope.handleClick = function (msg) {

$scope.$emit('eventName', { message: msg }); }; });
