angular.module('appModule')
.controller('randomCtrl', ['$scope', 'ApiService', RandomCocktailController]);

function RandomCocktailController ($scope, ApiService) {
    $scope.randomCocktailData = [];

    let handleSuccess = function(data, status) {
        $scope.randomCocktailData = data.data.drinks;
        console.log($scope.randomCocktailData);
    }

    // ApiService.getRandomCocktail().then(handleSuccess);

    $scope.generateRandomCocktail = function() {
        ApiService.getRandomCocktail().then(handleSuccess);
    }
};