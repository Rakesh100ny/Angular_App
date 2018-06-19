
app.controller('loginCtrl', function($scope,$rootScope) {
    $scope.email = 'baberwalrakesh@yahoo.com';
    $scope.password = '@rk100ni';
    $scope.login=function(email,password)
    {
     if ($rootScope.email==email && $rootScope.password==password) {
       $scope.result="User Log-in Successfully...!"
     } else {
        $scope.result="Error..Please SignUp First Then After Login...!";
     }
    };
});
