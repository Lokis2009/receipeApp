'use strict'

var recipeApp = angular.module('recipeApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'ngSanitize']);

//routing

recipeApp.config(['$routeProvider', '$locationProvider', function ($routeProvide, $locationProvider) {




	$routeProvide
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})

	.when('/myRec', {
		templateUrl: 'templates/myrec.html',
		controller: 'MyRecCtrl'
	})

	.when('/lists', {
		templateUrl: 'templates/lists.html',
		controller: 'ListsCtr'
	})

	.when('/newReciep', {
		templateUrl: 'templates/newReciepe.html',
		controller: 'NewReciepeCtr'
	})

	.when('/reciepes/:reciepeTitle', {
		templateUrl: 'templates/reciepe.html',
		controller: 'reciepeCtrl'
	})


	.otherwise({
		redirectTo: '/'
	});
}]);

recipeApp.controller('recipeAppCtr', ['$scope', '$http', '$location', function ($scope, $http, $location) {


	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.active = 0;


	$http.get('https://api.myjson.com/bins/4aje5').success(function (data, status, headers, config) {
		$scope.recipes = data;
	});



      }]);

/// Home controller
recipeApp.controller('HomeCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {


  }]);
/// filter to convert text to HTML in instruction
recipeApp.filter('toTrusted', function ($sce) {
	return function (value) {
		return $sce.trustAsHtml(value);
	};
});

recipeApp.config(['$sceProvider', function ($sceProvider) {
	$sceProvider.enabled(true);
}]);


/// Ideas controller
recipeApp.controller('IdeasCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

                         }]);
// My Receipes Controller

recipeApp.controller('MyRecCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.favoritReciepes = JSON.parse(localStorage.getItem("reciepes"));

                            }]);

// Lists controller

recipeApp.controller('ListsCtr', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.favoritReciepes = JSON.parse(localStorage.getItem("favorite"));

	$scope.planReciepes = JSON.parse(localStorage.getItem("plan"));

	$scope.toBuys = JSON.parse(localStorage.getItem("toBuy"));

                            }]);

recipeApp.controller('reciepeCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

	$scope.reciepeTitle = $routeParams.reciepeTitle;

	//saving in lokalStorage function
	$scope.saveRecipe = function (item) {

		var newReciep = {
			"id": $scope.reciepeTitle,
			"title": $scope.recipes[$scope.reciepeTitle].title,
			"description": $scope.recipes[$scope.reciepeTitle].description,
			"photoUrl": $scope.recipes[$scope.reciepeTitle].photoUrl,
			"ingredients": $scope.recipes[$scope.reciepeTitle].ingredients
		}; // create new object - new Reciep
		var objRecipe = []; // create an array of objects

		if (localStorage.getItem(item) === null) { // chek is local storage clear

			/*newReciep= JSON.stringify(newReciep);  // object to string
                
                                localStorage.setItem("reciepes",newReciep);  // save in local storage
*/
			objRecipe.push(newReciep);

			objRecipe = JSON.stringify(objRecipe); // object array to string

			localStorage.setItem(item, objRecipe); // save in local storage
		} else {
			/*  var objRecipe =[]; // create an array of objects*/

			var old = JSON.parse(localStorage.getItem(item)); // geting saved reciepes 

			for (var i = 0; i < old.length; i++) {
				objRecipe.push(old[i])
			};


			objRecipe.push(newReciep);

			objRecipe = JSON.stringify(objRecipe); // object array to string

			localStorage.setItem(item, objRecipe); // save in local storage

		};


	};


                            }]);

// NewReciepe Controller

recipeApp.controller('NewReciepeCtr', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.addReciepe = {};

	$scope.addReciepe.ingredients = [];

	$scope.addReciepe.ingredients.length = 3

	$scope.saveNew = function () {
		console.log($scope.addReciepe);

	}

	$scope.addInput = function () {
		$('#inputAdd').append('<input type="text" class="form-control" id="ingridients[' + $scope.addReciepe.ingredients.length + ']" name="ingridients[' + $scope.addReciepe.ingredients.length + ']" placeholder="название и количество" ng-model="addReciepe.ingredients[' + $scope.addReciepe.ingredients.length + ']">');
	}


                         }]);