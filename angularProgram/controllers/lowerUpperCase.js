app.controller('lowerUpperCtrl', function($scope) {
    $scope.x1 = "Ronny";
    $scope.x2 = angular.lowercase($scope.x1);
    $scope.x3 = "Roy";
    $scope.x4 = angular.uppercase($scope.x3);
});
