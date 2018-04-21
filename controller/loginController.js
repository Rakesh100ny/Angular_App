app.controller('loginCtrl',function($scope,$state){

  $scope.sendHome=function()
  {
   $state.go('home');
 }
});
