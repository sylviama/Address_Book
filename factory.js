app.factory("contactStorage", function($q, $http, authFactory){
  
  var newObj={
    firstName:"",
    lastName:"",
    address:"",
    phoneNumber:"",
    uid:""
  };

  //get
  var listContacts=function(){
    var user=authFactory.getUser();

    return $q(function(resolve, reject){
      var items=[];
      $http.get(`https://sylviaaddressbook.firebaseio.com/contacts.json?orderBy="uid"&equalTo="${user.uid}"`)
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

      $http.delete("https://sylviaaddressbook.firebaseio.com/contacts/"+itemId+".json")
      .success(function(response){
        resolve(response);
      })
    })
  };

  //add New/post
  var addNew=function(newObj){
    var user=authFactory.getUser();
    console.log(user.uid);

    return $q(function(resolve,reject){

      $http.post(
        "https://sylviaaddressbook.firebaseio.com/contacts.json",
        JSON.stringify({
          firstName:newObj.firstName,
          lastName:newObj.lastName,
          address:newObj.address,
          phoneNumber:newObj.phoneNumber,
          uid:user.uid
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
        "https://sylviaaddressbook.firebaseio.com/contacts/"+itemId+".json")
      .success(function(response){
          resolve(response)
        })
    })
  };

  //edit: put
  var putContact=function(itemId,newObj){
    var user=authFactory.getUser();

    return $q(function(resolve,reject){
      $http.put(
        "https://sylviaaddressbook.firebaseio.com/contacts/"+itemId+".json",
        JSON.stringify({
          firstName:newObj.firstName,
          lastName:newObj.lastName,
          address:newObj.address,
          phoneNumber:newObj.phoneNumber,
          uid:user.uid
        })
        ).success(function(response){
          resolve(response);
        })
    })
  }




  return{listContacts:listContacts, deleteContacts:deleteContacts, addNew:addNew, getSingle:getSingle,
    putContact:putContact};

});




