"use strict"

var app=angular.module("addressBookApp", ["ngRoute"]);

let isAuth=(authFactory)=> new Promise((resolve,reject)=>{
  if(authFactory.isAuthenticated()){
    console.log("autenticated");
    resolve();
  }else{
    console.log("not autenticated");
  };
});

app.config(function($routeProvider){
  $routeProvider
  .when("/logout", {
    templateUrl:"./login.html",
    controller:"loginCtrl"
  })
  .when("/items/list", {
    templateUrl: "./listView.html",
    controller:"listViewCtrl"
  })
  .when("/items/new", {
    templateUrl: "./addNewView.html",
    controller:"addNewCtrl"
  })
  .when("/items/:contactId/edit", {
    templateUrl: "./addNewView.html",
    controller:"editCtrl"
  })
  .otherwise("items/list");
});

app.run(($location)=>{
  var todoRef=new Firebase("https://sylviaaddressbook.firebaseio.com/");

  todoRef.onAuth(authData=>{
    if(!authData){
      $location.path("/logout");
    }
  })
})
