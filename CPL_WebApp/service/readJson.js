app.service('readJson',function($http){
  this.getJson=function(){
    return $http.get("JSON/newTeamInfo.json").then(function(response){
      return response.data;
    });
  }

this.getPlayerRecord=function(){
  return $http.get("JSON/newPlayerInfo.json").then(function(response){
    return response.data;
  });
}

});
