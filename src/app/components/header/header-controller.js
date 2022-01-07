angular.module('appModule')
.controller('headerCtrl', [
    '$scope', 
    'ApiService',
    AppHeaderController
]);

function AppHeaderController($scope, ApiService) {
    $scope.test = 'Hello World';
    ApiService.getRandomCocktail();
}