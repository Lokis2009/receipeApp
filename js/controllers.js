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

recipeApp.controller('recipeAppCtr', ['$scope', '$http', '$location', function ($scope, $http, $location, $routeParams) {
	
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.active = 0;


	$http.get('https://api.myjson.com/bins/4aje5').success(function (data, status, headers, config) {
		$scope.recipes = data;
	});

	//saving in lokalStorage function
	$scope.saveRecipe = function (item) {
		
		
		var newReciep = {
			"title": this.title,
			"description": this.description,
			"photoUrl": this.photoUrl,
			"ingredients": this.ingredients
		}; // create new object - new Reciep
		
		var objRecipe = []; // create an array of objects

		if (localStorage.getItem(item) === null) { // chek is local storage clear

			objRecipe.push(newReciep);

			objRecipe = JSON.stringify(objRecipe); // object array to string

			localStorage.setItem(item, objRecipe); // save in local storage
		} else {
			
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

	$scope.favoritReciepes = JSON.parse(localStorage.getItem("reciepes"));		// сделать фабрику для даных

                            }]);

// Lists controller

recipeApp.controller('ListsCtr', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.favoritReciepes = JSON.parse(localStorage.getItem("favorite"));

	$scope.planReciepes = JSON.parse(localStorage.getItem("plan"));

	$scope.toBuys = JSON.parse(localStorage.getItem("toBuy"));

                            }]);

// reciepe Controller

recipeApp.controller('reciepeCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

	
		$scope.reciepeTitle = $routeParams.reciepeTitle;
		
	for (var i=0; $scope.recipes.length > i; i++ ){
		
		if ($scope.recipes[i].title==$scope.reciepeTitle){
			
			$scope.title=$scope.recipes[i].title;
			$scope.description=$scope.recipes[i].description;
			$scope.photoUrl=$scope.recipes[i].photoUrl;
			$scope.ingredients=$scope.recipes[i].ingredients;
			$scope.instruction=$scope.recipes[i].instruction;
			
			
		}
		
	}
	
	
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
			$scope.addReciepe.ingredients.push('');
	}


                         }]);

