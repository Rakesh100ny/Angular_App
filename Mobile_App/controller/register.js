app.controller('registerCtrl', function($scope,$rootScope,$localStorage)
 {
    $scope.firstName="";
    $scope.lastName="";
    $scope.email = '';
    $scope.password = '';
    $scope.register=function(email,password)
    {
     $localStorage.email=email;
     $localStorage.password=password;
     // $rootScope.email=email;
     // $rootScope.password=password;
     $scope.result="Successfully Registered...!"
    }

});
