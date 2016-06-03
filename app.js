app.controller("addressBookCtrl", function($scope){
	$scope.items=[
	{
		firstName:"Sylvia",
		lastName:"Ma",
		phoneNumber:9993339999,
		address:"1010 Vintage Rd, Nashville, TN"
	},
	{
		firstName:"Al",
		lastName:"Coury",
		phoneNumber:9993889999,
		address:"223 Vintage Rd, Nashville, TN"
	},
	{
		firstName:"Zoe",
		lastName:"Barn",
		phoneNumber:9003339999,
		address:"10 Vintage Rd, Nashville, TN"
	}];

	$scope.newObj={}
	$scope.submitFunction=function(){
		$scope.items.push($scope.newObj);
	}
});

//plan:
//1. change into firebase
//2.has post, update, delete functions
//3.change into factory
//4.move navbar out

//login, register page
//nav bar button go with it
//firebase authority



