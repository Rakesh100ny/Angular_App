app.controller('dashboardCtrl', function ($scope,$rootScope,readJson,$mdDialog,$state)
{
  $rootScope.flag1=true;
  $rootScope.flag3=false;

    $scope.getData = readJson.getJson();
    $scope.getData.then(function(response){
      $scope.jsonRecord = response;
   });
  //  $scope.customFullscreen = false;
   $scope.showDialog = function(event,data) {
    $mdDialog.show({
      locals : {mobileInformation : data},
      controller: DialogCtrl,
      templateUrl: 'templates/mobileDialog.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    });

  };
  function DialogCtrl($scope, $mdDialog,mobileInformation) {
      $scope.mobileInformation = mobileInformation;
      $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }


});
