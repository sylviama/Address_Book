app.controller("listViewCtrl", function($scope, $http, $location,contactStorage){
  $scope.items=[];

  //list
  contactStorage.listContacts().then(function(response){
    $scope.items=response;
  });


  //delete
  $scope.deleteContact=function(itemId){
    contactStorage.deleteContacts(itemId).then(function(){
      
      //then empty
      $scope.items=[];
      //and loopthrough again
      contactStorage.listContacts().then(function(response){
      $scope.items=response;
      });
    });
  };
  //delete
  // $scope.deleteContact=function(contactId){
  //   console.log(contactId);
  //   $http.delete("https://sylviaaddressbook.firebaseio.com/"+contactId+".json")
  //   .success(function(){
  //     $scope.items=[];
  //     $scope.listContacts();
  //   })
  // }



});





