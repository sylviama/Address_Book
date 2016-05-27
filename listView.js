app.controller("listViewCtrl", function($scope, $http, $location){
  $scope.items=[];
  $scope.newObj={};

  //get
  $scope.listContacts=function(){
    $http.get("https://sylviaaddressbook.firebaseio.com/.json")
    .success(function(response){
      Object.keys(response).forEach(function(key){
              response[key].id=key;
      $scope.items.push(response[key]);//need to push the "key" which actually the objects
      });
    });
  };

  $scope.listContacts();

  //delete
  $scope.deleteContact=function(contactId){
    console.log(contactId);
    $http.delete("https://sylviaaddressbook.firebaseio.com/"+contactId+".json")
    .success(function(){
      $scope.items=[];
      $scope.listContacts();
    })
  }



});