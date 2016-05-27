app.controller("addNewCtrl", function($scope, $http, $location){

  $scope.newObj={
    firstName:"",
    lastName:"",
    address:"",
    phoneNumber:""
  };

  $scope.submitFunction=function(){
    $http.post(
      "https://sylviaaddressbook.firebaseio.com/.json",
      JSON.stringify({
        firstName:$scope.newObj.firstName,
        lastName:$scope.newObj.lastName,
        address:$scope.newObj.address,
        phoneNumber:$scope.newObj.phoneNumber
      }))
    .success(function(){
      $location.url("/items/list");
    });
  }
})