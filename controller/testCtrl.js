app.controller('mainController',function($scope){
  $scope.orders = [
    { id:1, customer: { name: 'John', id: 10 } },
    { id:2, customer: { name: 'William', id: 20 } },
    { id:3, customer: { name: 'John', id: 10 } },
    { id:4, customer: { name: 'William', id: 20 } },
    { id:5, customer: { name: 'Clive', id: 30 } }
  ]
});
