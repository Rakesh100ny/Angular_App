
app.controller('addCtrl', function($scope)
{
 $scope.add=function(num1,num2)
 {
   $scope.result=Number(num1)+Number(num2);
 };
});
