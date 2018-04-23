app.controller('dashboardCtrl', function ($scope,readJson,$mdDialog)
{
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
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
   .primaryPalette('yellow', {
     'default': '400', // by default use shade 400 from the pink palette for primary intentions
     'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
     'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
     'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
   })
   // If you specify less than all of the keys, it will inherit from the
   // default shades
   .accentPalette('purple', {
     'default': '200' // use shade 200 for default, and keep all other shades the same
   });
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark()
});
