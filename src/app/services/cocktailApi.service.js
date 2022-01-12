angular.module('appModule.services', [])
.factory('ApiService',['$http', CocktailApiService]);

function CocktailApiService($http) {

    return {
        getRandomCocktail: function() {
            return $http({
                method: 'GET',
                url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
            });
        }
    }
}