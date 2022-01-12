angular.module('appModule')
.controller('cocktailInfoCtrl', ['$scope', 'ApiService', CocktailInformationController]);

function CocktailInformationController($scope, ApiService) {
    $scope.randomCocktailData = [];

    let handleSuccess = function(data, status) {
        $scope.randomCocktailData = data.data.drinks;
        console.log($scope.randomCocktailData);
    }

    ApiService.getRandomCocktail().then(handleSuccess);
};