app.controller("addNewCtrl", function($scope, $http, $location,contactStorage){

  $scope.newObj={
    firstName:"",
    lastName:"",
    address:"",
    phoneNumber:""
  };



  $scope.submitFunction=function(newObj){
    contactStorage.addNew(newObj).then(function(){
      $location.url("/items/list");
    })
  }

  // $scope.submitFunction=function(){
  //   $http.post(
  //     "https://sylviaaddressbook.firebaseio.com/.json",
  //     JSON.stringify({
  //       firstName:$scope.newObj.firstName,
  //       lastName:$scope.newObj.lastName,
  //       address:$scope.newObj.address,
  //       phoneNumber:$scope.newObj.phoneNumber
  //     }))
  //   .success(function(){
  //     $location.url("/items/list");
  //   });
  // }
})