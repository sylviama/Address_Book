var app=angular.module("addressBookApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/items/list", {
    templateUrl: "listView.html"
  })
  .when("/items/new", {
    templateUrl: "addNewView.html"
  })
  .otherwise("items/list");
});