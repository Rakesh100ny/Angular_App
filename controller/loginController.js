app.controller('loginCtrl',function($scope,$rootScope,$state,$localStorage){

  $scope.email = '';
  $scope.password = '';
  $scope.login=function(email,password)
  {
    // $localStorage.password=password;
    // $localStorage.email=email;
   if ($localStorage.email==email && $localStorage.password==password) {
      
      console.log("$localStorage.email",$localStorage.email);
      console.log("$localStorage.password",$localStorage.password);

     // $scope.result="User Log-in Successfully...!"
           $state.go('home');
   } else {
      $scope.result="Error..Please SignUp First Then After Login...!";
   }
  };
});
//   $scope.sendHome=function()
//   {
//     var email=$scope.email;
//     var password=$scope.password;
//     if(email==$scope.email && password==$scope.password)
//     {
//       console.log("EMAIL    : ",email);
//       $state.go('home');
//       console.log("Password : ",password);
//     }
//     else {
//       console.log("Error please correct User id & Password...!");
//     }
//
//  }
// });
