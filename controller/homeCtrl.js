app.controller('homeCtrl', function($scope, $mdSidenav, $state, readJson, $filter) {
  var manufacturerItem = [];
  var storageItem = [];
  var osItem = [];
  var cameraItem = [];

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

  var arr = [];
  $scope.getData = readJson.getJson();
  $scope.getData.then(function(response) {
    $scope.jsonRecord = response;
    angular.forEach($scope.jsonRecord, function(value, key) {
      arr.push(value.specs.os)
      //console.log(arr);
    });
    // console.log("$scope.jsonRecord",$scope.jsonRecord);
  })

  $scope.Manufacturer = "manufacturer";
  $scope.Storage = "storage";
  $scope.Os = "os";
  $scope.Camera = "camera";

  $state.go('home.dashboard');


  $scope.toggle = function(type, value) {
    switch (type) {
      case 'manufacturer':
        var indexManufacturer = manufacturerItem.indexOf(value);
        if (indexManufacturer > -1) {
          manufacturerItem.splice(indexManufacturer, 1);
        } else {
          manufacturerItem.push(value);
        }
        break;
      case 'storage':
        var indexStorage = storageItem.indexOf(value);
        if (indexStorage > -1) {
          storageItem.splice(indexStorage, 1);
        } else {
          storageItem.push(value);
        }
        break;
      case 'os':
        var indexOs = osItem.indexOf(value);
        if (indexOs > -1) {
          osItem.splice(indexOs, 1);
        } else {
          osItem.push(value);
        }
        break;
      case 'camera':
        var indexCamera = cameraItem.indexOf(value);
        if (indexCamera > -1) {
          cameraItem.splice(indexCamera, 1);
        } else {
          cameraItem.push(value);
        }
        break;
    }
  };
  $scope.arrayManufacturer = manufacturerItem;
  $scope.arrayStorage = storageItem;
  $scope.arrayOs = osItem;
  $scope.arrayCamera = cameraItem;

   console.log("arrayManufacturer",manufacturerItem);
   console.log("arrayStorage",storageItem);
   console.log("arrayOs",osItem);
   console.log("arrayCamera",cameraItem);
});


app.filter('myFilter', function() {
  return function(items, arrayManufacturer, arrayStorage, arrayOs, arrayCamera)
   {
    var displayData = [];
    var temp = [];
    if (arrayManufacturer.length > 0 || arrayStorage.length>0 || arrayOs.length>0 || arrayCamera.length>0)
    {
    if (arrayManufacturer.length > 0)
    {
     angular.forEach(items, function(value)
     {
      angular.forEach(arrayManufacturer, function(data)
      {
        if (value.specs.manufacturer == data)
        {
         displayData.push(value);
        }
      });
      });
      temp = displayData;
      displayData = [];
     }
      if (arrayStorage.length > 0)
      {
       if(temp.length>0)
       {
         console.log("r1");
         angular.forEach(temp, function(value)
         {
          console.log("r2");
          angular.forEach(arrayStorage, function(data)
          {
            console.log("r3");
            console.log("VALUE1",value.specs.storage);
           if (value.specs.storage == data)
           {
            console.log("r4");
            console.log("VALUE2",value.specs.storage);
            displayData.push(value);
           }
          });
         });
       }
       else
       {
         console.log("r1");
         angular.forEach(items, function(value)
         {
          console.log("r2");
          angular.forEach(arrayStorage, function(data)
          {
            console.log("r3");
            console.log("VALUE1",value.specs.storage);
           if (value.specs.storage == data)
           {
            console.log("r4");
            console.log("VALUE2",value.specs.storage);
            displayData.push(value);
           }
          });
         });
       }
       temp = displayData;
       console.log("tempArray",temp);
       displayData = [];
      }

      if (arrayOs.length > 0)
      {
        if (temp.length>0)
        {
          angular.forEach(temp, function(value)
          {
           angular.forEach(arrayOs, function(data)
           {
             if (value.specs.os == data)
             {
              displayData.push(value);
             }
           });
          });
        } else
        {
          angular.forEach(items, function(value)
          {
           angular.forEach(arrayOs, function(data)
           {
             if (value.specs.os == data)
             {
              displayData.push(value);
             }
           });
          });
        }
       temp = displayData;
       displayData = [];
       }

       if (arrayCamera.length > 0)
       {
        if (temp.length>0) {
          angular.forEach(temp, function(value)
          {
           angular.forEach(arrayCamera, function(data)
           {
            if (value.specs.camera == data)
            {
             displayData.push(value);
            }
           });
          });
        } else
        {
          angular.forEach(items, function(value)
          {
           angular.forEach(arrayCamera, function(data)
           {
            if (value.specs.camera == data)
            {
             displayData.push(value);
            }
           });
          });
        }

        temp = displayData;
        displayData = [];
       }
      }
      else
      {
        temp = items;
      }
    return temp;
  };
});
