app.controller("searchCtrl", function($scope, searchFactory){
  $scope.movie={
    title:"",
    year:"",
    runtime:""
  };

  $scope.generateLink=function(movie){
    console.log(movie);
    var urlLink="http://www.omdbapi.com/?t="+movie.title+"&r=json";
    console.log(urlLink);

    searchFactory.getSearchResult(urlLink).then(function(response){
      console.log(response);
    });
  }

  // $scope.getResult=function(){
  //   searchFactory.getSearchResult().then(function(response){
  //     console.log(response);
  //   })
  // }





})