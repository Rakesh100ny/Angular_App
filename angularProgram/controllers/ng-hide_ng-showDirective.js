app.controller('hide_showCtrl', function($scope) {
    $scope.firstName = "Ronny";
    $scope.lastName = "Roy";
    $scope.myVar = false;
    $scope.toggle1= function() {
        $scope.myVar = !$scope.myVar;
    };
       $scope.toggle2= function() {
        $scope.myVar = !$scope.myVar;
    };

});
