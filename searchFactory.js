app.factory("searchFactory", function($q, $http){
  
  var movie={
    title:"",
    year:"",
    runtime:""
  };

  // var generateLink=function(movie){
  //   var urlLink="http://www.omdbapi.com/?t="+movie.title+"&r=json";
  //   console.log(urlLink);
  //   return urlLink;
  // }

  //get database search result
  var getSearchResult=function(urlLink){
    // var user=authFactory.getUser();

    return $q(function(resolve, reject){
      // var link= generateLink();
      $http.get(urlLink)
      .success(function(response){
        resolve(response);
        console.log(response);
      })
    })

  };

  return{getSearchResult:getSearchResult};

})

