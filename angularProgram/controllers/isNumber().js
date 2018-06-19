app.controller('numberCtrl', function($scope) {
    $scope.x1 = "Ronny";
    $scope.x2 = angular.isNumber($scope.x1);
    $scope.x3 = 1234;
    $scope.x4 = angular.isNumber($scope.x3);
});
