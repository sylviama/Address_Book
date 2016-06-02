app.factory("contactStorage", function($q, $http){
  var newObj={
    firstName:"",
    lastName:"",
    address:"",
    phoneNumber:""
  };

  //get
  var listContacts=function(){
    return $q(function(resolve, reject){
      var items=[];

      $http.get("https://sylviaaddressbook.firebaseio.com/.json")
    .success(function(response){
      Object.keys(response).forEach(function(key){
        response[key].id=key;
        items.push(response[key]);//need to push the "key" which actually the objects
        resolve(items);
      });
    })
    });
  };

  //delete
  var deleteContacts=function(itemId){
    return $q(function(resolve,reject){

      $http.delete("https://sylviaaddressbook.firebaseio.com/"+itemId+".json")
      .success(function(response){
        resolve(response);
      })
    })
  };

  //add New/post
  var addNew=function(newObj){
    return $q(function(resolve,reject){

      $http.post(
        "https://sylviaaddressbook.firebaseio.com/.json",
        JSON.stringify({
          firstName:newObj.firstName,
          lastName:newObj.lastName,
          address:newObj.address,
          phoneNumber:newObj.phoneNumber
        }))
      .success(function(response){
        resolve(response);
      })
    });
  };

  //edit:get single
  var getSingle=function(itemId){
    return $q(function(resolve,reject){
      $http.get(
        "https://sylviaaddressbook.firebaseio.com/"+itemId+".json")
      .success(function(response){
          resolve(response)
        })
    })
  };

  //edit: put
  var putContact=function(itemId,newObj){
    return $q(function(resolve,reject){
      $http.put(
        "https://sylviaaddressbook.firebaseio.com/"+itemId+".json",
        JSON.stringify({
          firstName:newObj.firstName,
          lastName:newObj.lastName,
          address:newObj.address,
          phoneNumber:newObj.phoneNumber
        })
        ).success(function(response){
          resolve(response);
        })
    })
  }




  return{listContacts:listContacts, deleteContacts:deleteContacts, addNew:addNew, getSingle:getSingle,
    putContact:putContact};

});




