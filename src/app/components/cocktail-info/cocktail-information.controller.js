angular.module('appModule')
.controller('cocktailInfoCtrl', ['$scope', 'ApiService', CocktailInformationController]);

function CocktailInformationController($scope, ApiService) {
    $scope.testing = ApiService.getRandomCocktail()
    console.log($scope.testing);
    console.log(ApiService.getRandomCocktail());
};