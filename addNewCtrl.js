app.controller("addNewCtrl", function($scope, $http, $location,contactStorage){

  $scope.newObj={
    firstName:"",
    lastName:"",
    address:"",
    phoneNumber:"",
    uid:""
  };



  $scope.submitFunction=function(newObj){
    contactStorage.addNew(newObj).then(function(){
      $location.url("/items/list");
    })
  }

})