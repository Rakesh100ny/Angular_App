app.controller('functionCtrl', function($scope) {
    $scope.person={
    firstName :"Ranu",
    lastName : "Roy",
  };
    $scope.fullName = function() {
      var x=$scope.person;
        return x.firstName + " " + x.lastName;
    };
});
