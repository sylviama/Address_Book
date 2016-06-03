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


});



