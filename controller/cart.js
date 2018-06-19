app.controller('cartCtrl',function($scope,$rootScope){
  $rootScope.flag1=false;
  $rootScope.flag3=true;

  $scope.openCart=function(data){
    $state.go('home.cart');
    console.log("data",data);
  };
});
