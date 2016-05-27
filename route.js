var app=angular.module("addressBookApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
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
