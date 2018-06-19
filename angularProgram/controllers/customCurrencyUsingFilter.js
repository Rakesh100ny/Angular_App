app.controller('customFilterCtrl',function ($scope, $filter)
{
 $scope.$watch('num', function (val)
 {
  $scope.result = $filter('currency')(val, '₹', 2);
 }, true);
});
