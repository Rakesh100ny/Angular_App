app.controller('homeCtrl', function($scope, $mdSidenav,$timeout,$state, readJson, $filter) {

  var manufacturerItem = [];
  var storageItem = [];
  var osItem = [];
  var cameraItem = [];

    $scope.firstRate = 0;

  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      console.log("id", componentId);
      if (componentId == 'left') {
        console.log("hii");
        $mdSidenav(componentId).toggle();
        var isOpen = $mdSidenav(componentId).isOpen();
        if (isOpen) {
          document.getElementById('dashboard').style.marginLeft = '320px';

        } else {
          document.getElementById('dashboard').style.marginLeft = '0px';
        }
      } else {
        console.log("hello");
        $mdSidenav(componentId).toggle();
      }

    };
  }

  $mdSidenav('left', true).then(function(instance) {
    // On close callback to handle close, backdrop click, or escape key pressed.
    // Callback happens BEFORE the close action occurs.
    instance.onClose(function() {
      document.getElementById('dashboard').style.marginLeft = '0px';
    });
  });

  $scope.sendLogin = function() {
    $state.go('login');
  }

  $scope.sendHome = function() {
    $scope.home="home";
    $state.go('home.dashboard');
  }

  // $scope.loading=true;
  // var arr = [];
  // $timeout(function(){
  //   $scope.getData = readJson.getJson();
  //   $scope.getData.then(function(response) {
  //     $scope.jsonRecord = response;
  //     $scope.loading=false;
  //   })
  // },1);

  $scope.getData = readJson.getJson();
  $scope.getData.then(function(response) {
    $scope.jsonRecord = response;
    // angular.forEach($scope.jsonRecord, function(value, key) {
    //   arr.push(value.specs.os)
    //   //console.log(arr);
    // });
    // console.log("$scope.jsonRecord",$scope.jsonRecord);
  })
   var cartItem=[];
  $scope.openCart=function(data){
    $scope.cart="cart";
    cartItem.push(data);
    $scope.length=cartItem.length;
    console.log("length",$scope.length);
    $scope.cart=cartItem;
    $state.go('home.cart');
  };

  $scope.Manufacturer = "manufacturer";
  $scope.Storage = "storage";
  $scope.Os = "os";
  $scope.Camera = "camera";
  $state.go('home.dashboard');


  // $scope.toggle = function(type, value) {
  //   switch (type) {
  //     case 'manufacturer':
  //
  //       var indexManufacturer = manufacturerItem.indexOf(value);
  //       if (indexManufacturer > -1) {
  //         manufacturerItem.splice(indexManufacturer, 1);
  //       } else {
  //         manufacturerItem.push(value);
  //       }
  //       break;
  //     case 'storage':
  //       var indexStorage = storageItem.indexOf(value);
  //       if (indexStorage > -1) {
  //         storageItem.splice(indexStorage, 1);
  //       } else {
  //         storageItem.push(value);
  //       }
  //       break;
  //     case 'os':
  //       var indexOs = osItem.indexOf(value);
  //       if (indexOs > -1) {
  //         osItem.splice(indexOs, 1);
  //       } else {
  //         osItem.push(value);
  //       }
  //       break;
  //     case 'camera':
  //       var indexCamera = cameraItem.indexOf(value);
  //       if (indexCamera > -1) {
  //         cameraItem.splice(indexCamera, 1);
  //       } else {
  //         cameraItem.push(value);
  //       }
  //       break;
  //   }
  // };

  $scope.toggle = function(type, value) {
    switch (type) {
      case 'manufacturer':
        unqiueFunction(manufacturerItem, value);

        break;
      case 'storage':
        unqiueFunction(storageItem, value);
        break;
      case 'os':
        unqiueFunction(osItem, value);
        break;
      case 'camera':
        unqiueFunction(cameraItem, value);
        break;
    }
  };

  unqiueFunction = function(uniqueArray, value) {

    var index = uniqueArray.indexOf(value);
    if (index > -1) {
      uniqueArray.splice(index, 1);
    } else {
      uniqueArray.push(value);
    }

  };


  $scope.arrayManufacturer = manufacturerItem;
  $scope.arrayStorage = storageItem;
  $scope.arrayOs = osItem;
  $scope.arrayCamera = cameraItem;

  console.log("manufacturerItem",$scope.arrayManufacturer);
  console.log("storageItem",$scope.arrayStorage);
  console.log("osItem",$scope.arrayOs);
  console.log("cameraItem",$scope.arrayCamera);
});


app.filter('myFilter', function() {
  return function(items, arrayManufacturer, arrayStorage, arrayOs, arrayCamera) {
    var displayData = [];
    var temp = [];

    if (arrayManufacturer.length > 0 || arrayStorage.length > 0 || arrayOs.length > 0 || arrayCamera.length > 0) {
      if (arrayManufacturer.length > 0) {
        iterateArray(items, arrayManufacturer, displayData);

      }
      if (displayData.length > 0) {
        temp = displayData;
        console.log("tempManufacturer", temp);
        displayData = [];
      } else {
        temp = items;
      }
      if (arrayStorage.length > 0) {
        iterateArray(temp, arrayStorage, displayData);
        temp = displayData;
        console.log("tempStorage", temp);
        displayData = [];
      }

      if (arrayOs.length > 0) {
        iterateArray(temp, arrayOs, displayData);
        temp = displayData;
        console.log("tempOs", temp);
        displayData = [];
      }

      if (arrayCamera.length > 0) {
        iterateArray(temp, arrayCamera, displayData);
        temp = displayData;
        console.log("tempCamera", temp);
        displayData = [];
      }
    } else {
      temp = items;
    }
    return temp;
  };
});

iterateArray = function(items, array, displayData) {
  angular.forEach(items, function(value) {
    angular.forEach(array, function(data) {
      if (value.specs.manufacturer == data) {
        displayData.push(value);
      } else if (value.specs.storage == data) {
        displayData.push(value);
      } else if (value.specs.os == data) {
        displayData.push(value);
      } else if (value.specs.camera == data) {
        displayData.push(value);
      }
    });
  });
};

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
   .primaryPalette('pink', {
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


// app.filter('myFilter', function() {
//   return function(items, arrayManufacturer, arrayStorage, arrayOs, arrayCamera)
//    {
//     var displayData = [];
//     var temp = [];
//
//     if(arrayManufacturer.length > 0 || arrayStorage.length>0 || arrayOs.length>0 || arrayCamera.length>0)
//     {
//     if (arrayManufacturer.length > 0)
//     {
//       angular.forEach(items, function(value)
//       {
//        angular.forEach(arrayManufacturer, function(data)
//        {
//         if (value.specs.camera == data)
//         {
//          displayData.push(value);
//         }
//        });
//       });
//       if(displayData.length>0)
//       {
//         temp = displayData;
//         console.log("tempManufacturer",temp);
//         displayData = [];
//       }
//       else
//       {
//         temp=items;
//       }
//      }
//       if (arrayStorage.length > 0)
//       {
//
//         angular.forEach(temp, function(value)
//         {
//          angular.forEach(arrayStorage, function(data)
//          {
//           if (value.specs.storage == data)
//           {
//            displayData.push(value);
//           }
//          });
//         });
//
//        temp = displayData;
//        console.log("tempStorage",temp);
//        displayData = [];
//       }
//
//       if (arrayOs.length > 0)
//       {
//
//         angular.forEach(temp, function(value)
//         {
//          angular.forEach(arrayOs, function(data)
//          {
//            if (value.specs.os == data)
//            {
//             displayData.push(value);
//            }
//          });
//         });
//        temp = displayData;
//        console.log("tempOs",temp);
//        displayData = [];
//        }
//
//        if (arrayCamera.length > 0)
//        {
//
//          angular.forEach(temp, function(value)
//          {
//           angular.forEach(arrayCamera, function(data)
//           {
//            if (value.specs.camera == data)
//            {
//             displayData.push(value);
//            }
//           });
//          });
//         temp = displayData;
//         console.log("tempCamera",temp);
//         displayData = [];
//        }
//       }
//       else
//       {
//         temp = items;
//       }
//     return temp;
//
//
//   };
// });
