app.controller('stringCtrl', function($scope) {
    $scope.x1 = "Ronny";
    $scope.x2 = angular.isString($scope.x1);
    $scope.x3 = 1234;
    $scope.x4 = angular.isString($scope.x3);
});
