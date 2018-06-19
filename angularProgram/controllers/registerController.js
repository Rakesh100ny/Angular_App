
app.controller('registerCtrl', function($scope,$rootScope) {
    console.log("hi...");
    $scope.firstName="Rakesh";
    $scope.lastName="Soni";
    $scope.email = 'baberwalrakesh@yahoo.com';
    $scope.password = '@rk100ni';
    $scope.register=function(email,password)
    {
     $rootScope.email=email;
     $rootScope.password=password;
     $scope.result="Successfully Registered...!"
    }

});
