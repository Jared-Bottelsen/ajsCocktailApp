angular.module('appModule')
.controller('headerCtrl', [
    '$scope', 
    '$http',
    AppHeaderController
]);

function AppHeaderController($scope, $http) {
    $scope.test = 'Hello World';
    $scope.drinks = [];

    $scope.getData = function() {
        $http({
            method: 'GET',
            url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        })
        .then(function(response) {
            console.log(response);
            $scope.drinks = response.data;
        })
        .catch(function(error) {
            console.error(error);
        })
    }

    // $scope.getData();

}