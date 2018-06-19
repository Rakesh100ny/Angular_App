app.controller('homeCtrl', function($scope,$rootScope, $state, readJson,$mdSidenav,$filter) {
  $state.go('home.dashboard');


  var roleItem=[];
  var battingItem=[];
  var bowlingItem=[];
  var nationalityItem=[];

  // console.log("hii Ranu");
  $scope.getData = readJson.getJson();
  $scope.getData.then(function(response) {
    $scope.jsonRecord = response['teaminfo'];
 })

 $scope.toggleLeft = buildToggler('left');

  function buildToggler(componentId) {
    return function() {
      console.log("id", componentId);
        $mdSidenav(componentId).toggle();
        var isOpen = $mdSidenav(componentId).isOpen();
        if (isOpen) {
          document.getElementById('playerInfo').style.marginLeft = '320px';

        } else {
          document.getElementById('playerInfo').style.marginLeft = '0px';
        }

    };
  }

  $mdSidenav('left', true).then(function(instance) {
    // On close callback to handle close, backdrop click, or escape key pressed.
    // Callback happens BEFORE the close action occurs.
    instance.onClose(function() {

      document.getElementById('playerInfo').style.marginLeft = '0px';
    });
  });


  $scope.player_role="player_role";
  $scope.player_batting_style="player_batting_style";
  $scope.player_bowling_style="player_bowling_style";
  $scope.player_nationality="player_nationality";




  $scope.selected = function(type, value) {
    console.log("value",value);
    console.log("type",type);
   switch (type) {
     case 'player_role':
       unqiueFunction(roleItem, value);

       break;
     case 'player_batting_style':
       unqiueFunction(battingItem, value);
       break;
     case 'player_bowling_style':
       unqiueFunction(bowlingItem, value);
       break;
     case 'player_nationality':
       unqiueFunction(nationalityItem, value);
       break;
   }
 };

 unqiueFunction = function(uniqueArray, value) {

   var index = uniqueArray.indexOf(value);
   if (index > -1) {
     uniqueArray.splice(index, 1);
     console.log("r1");
   } else {
     uniqueArray.push(value);
     console.log("uniqueArray",uniqueArray);
     console.log("r2");
   }
 };


   $scope.arrayRoleItem = roleItem;
   $scope.arrayBattingItem = battingItem;
   $scope.arrayBowlingItem = bowlingItem;
   $scope.arrayNationalityItem = nationalityItem;

   // console.log("roleItem",$scope.arrayRoleItem);
   // console.log("battingItem",$scope.arrayBattingItem);
   // console.log("bowlingItem"$scope.arrayBowlingItem);
   // console.log("nationalityItem",$scope.arrayNationalityItem);

  var ddItem = [];
  var glItem = [];
  var kxipItem = [];
  var kkrItem = [];
  var miItem = [];
  var srsItem = [];
  var rcbItem = [];
  var shItem = [];
  $scope.showDetails = function(value) {

    console.log("name", value);
    switch (value) {
      case 'Delhi Daredevils':
        var id = '1';

        $scope.getData = readJson.getPlayerRecord();
        $scope.getData.then(function(response) {

          $scope.playerRecord = response['Playersinfo'];
          console.log("plyInfo", $scope.playerRecord);
          angular.forEach($scope.playerRecord, function(value, key) {

            if (value.team_id == id) {
              ddItem.push(value)

            }

          });
        })
        $scope.playerDetails = ddItem;
        // path='/1';
        // $location.path("/a"+path);
        $state.go('home.playerDetails');
        break;
      case 'Gujrat Lions':
        var id = '2';

        $scope.getData = readJson.getPlayerRecord();
        $scope.getData.then(function(response) {

          $scope.playerRecord = response['Playersinfo'];
          console.log("plyInfo", $scope.playerRecord);
          angular.forEach($scope.playerRecord, function(value, key) {

            if (value.team_id == id) {
              glItem.push(value)

            }

          });
        })
        $scope.playerDetails = glItem;
        // path='/1';
        // $location.path("/a"+path);
        $state.go('home.playerDetails');
        break;
      case 'Kings XI Punjab':
        var id = '3';

        $scope.getData = readJson.getPlayerRecord();
        $scope.getData.then(function(response) {

          $scope.playerRecord = response['Playersinfo'];
          console.log("plyInfo", $scope.playerRecord);
          angular.forEach($scope.playerRecord, function(value, key) {

            if (value.team_id == id) {
              kxipItem.push(value)

            }

          });
        })
        $scope.playerDetails = kxipItem;
        // path='/1';
        // $location.path("/a"+path);
        $state.go('home.playerDetails');
        break;
      case 'Kolkata Knight Riders':
        var id = '4';

        $scope.getData = readJson.getPlayerRecord();
        $scope.getData.then(function(response) {

          $scope.playerRecord = response['Playersinfo'];
          console.log("plyInfo", $scope.playerRecord);
          angular.forEach($scope.playerRecord, function(value, key) {

            if (value.team_id == id) {
              kkrItem.push(value)

            }

          });
        })
        $scope.playerDetails = kkrItem;
        // path='/1';
        // $location.path("/a"+path);
        $state.go('home.playerDetails');
        break;
      case 'Mumbai':
        var id = '5';

        $scope.getData = readJson.getPlayerRecord();
        $scope.getData.then(function(response) {

          $scope.playerRecord = response['Playersinfo'];
          console.log("plyInfo", $scope.playerRecord);
          angular.forEach($scope.playerRecord, function(value, key) {

            if (value.team_id == id) {
              miItem.push(value)

            }

          });
        })
        $scope.playerDetails = miItem;
        // path='/1';
        // $location.path("/a"+path);
        $state.go('home.playerDetails');
        break;
      case 'Rising Pune Supergiants':
        var id = '6';

        $scope.getData = readJson.getPlayerRecord();
        $scope.getData.then(function(response) {

          $scope.playerRecord = response['Playersinfo'];
          console.log("plyInfo", $scope.playerRecord);
          angular.forEach($scope.playerRecord, function(value, key) {

            if (value.team_id == id) {
              srsItem.push(value)

            }

          });
        })
        $scope.playerDetails = srsItem;
        // path='/1';
        // $location.path("/a"+path);
        $state.go('home.playerDetails');
        break;
      case 'Royal Challengers Bangalore':
        var id = '7';

        $scope.getData = readJson.getPlayerRecord();
        $scope.getData.then(function(response) {

          $scope.playerRecord = response['Playersinfo'];
          console.log("plyInfo", $scope.playerRecord);
          angular.forEach($scope.playerRecord, function(value, key) {

            if (value.team_id == id) {
              rcbItem.push(value)

            }

          });
        })
        $scope.playerDetails = rcbItem;
        // path='/1';
        // $location.path("/a"+path);
        $state.go('home.playerDetails');
        break;
      case 'Sunrisers Hyderabad':
        var id = '8';

        $scope.getData = readJson.getPlayerRecord();
        $scope.getData.then(function(response) {

          $scope.playerRecord = response['Playersinfo'];
          console.log("plyInfo", $scope.playerRecord);
          angular.forEach($scope.playerRecord, function(value, key) {

            if (value.team_id == id) {
              shItem.push(value)

            }

          });
        })
        $scope.playerDetails = shItem;
        // path='/1';
        // $location.path("/a"+path);

        $state.go('home.playerDetails');
        break;
    }
  };



});

app.filter('myFilter', function() {
  return function(items, arrayRoleItem, arrayBattingItem, arrayBowlingItem, arrayNationalityItem) {
    console.log("role",arrayRoleItem);
    console.log("battingData",arrayBattingItem);
    console.log("bowling",arrayBowlingItem);
    console.log("nationality",arrayNationalityItem);
    console.log("jsonData",items);
    var displayData = [];
    var temp = [];

    if (arrayRoleItem.length > 0 || arrayBattingItem.length > 0 || arrayBowlingItem.length > 0 || arrayNationalityItem.length > 0) {
      if (arrayRoleItem.length > 0)
      {
        iterateArray(items, arrayRoleItem, displayData);
      }
      console.log("displayData Length",displayData.length);
      if (displayData.length > 0)
       {
        temp = displayData;
        console.log("tempRole", temp);
        displayData = [];
      }
      else
      {
        console.log("data aa gya..!");
        temp = items;
      }


      if (arrayBattingItem.length > 0) {
        iterateArray(temp, arrayBattingItem, displayData);
        temp = displayData;
        console.log("tempBatting", temp);
        displayData = [];
      }

      if (arrayBowlingItem.length > 0) {
        iterateArray(temp, arrayBowlingItem, displayData);
        temp = displayData;
        console.log("tempBowling", temp);
        displayData = [];
      }

      if (arrayNationalityItem.length > 0) {
        iterateArray(temp,arrayNationalityItem,displayData);
        temp = displayData;
        console.log("tempNationality", temp);
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
      if (value.player_role == data) {
        console.log("value1",value.player_role);
        displayData.push(value);
      } else if (value.player_batting_style == data) {
        console.log("value2",value.player_batting_style);
        displayData.push(value);
      } else if (value.player_bowling_style == data) {
        console.log("value3",value.player_bowling_style);
        displayData.push(value);
      } else if (value.player_nationality == data) {
        console.log("value4",value.player_nationality);
        displayData.push(value);
      }
    });
  });
};
