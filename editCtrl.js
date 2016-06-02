app.controller("editCtrl", function($scope,$http,$location,$routeParams,contactStorage){

//edit:get first
contactStorage.getSingle($routeParams.contactId).then(function(response){
  $scope.newObj=response;
});

//edit:post
$scope.submitFunction=function(newObj){
  contactStorage.putContact($routeParams.contactId, newObj).then(function(response){
    $location.url("/items/list");
  })
};



  // $scope.editContact=function(){

    //get Single Contact


  //   $http.get("https://sylviaaddressbook.firebaseio.com/"+$routeParams.contactId+".json")
  //   .success(function(response){
  //     $scope.newObj=response;
  //   })
  // };

  // $scope.editContact();

  //put
  // $scope.submitFunction=function(newObj){
  //   $http.put(
  //     "https://sylviaaddressbook.firebaseio.com/"+$routeParams.contactId+".json",
  //     JSON.stringify({
  //       firstName:newObj.firstName,
  //       lastName:newObj.lastName,
  //       address:newObj.address,
  //       phoneNumber:newObj.phoneNumber
  //     }))
  //   .success(function(){
  //     $location.url("/items/list");
  //   })
  // }

});



