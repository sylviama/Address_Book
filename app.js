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

