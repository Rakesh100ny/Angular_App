app.controller('propertiesCtrl', function($scope) {
    $scope.firstName = "Ranu";
    $scope.lastName = "Roy";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});
