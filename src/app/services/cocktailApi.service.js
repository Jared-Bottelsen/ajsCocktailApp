let services = angular.module('appModule.services', [])
.factory('ApiService',['$http', CocktailApiService]);

function CocktailApiService($http) {

    return {
        getRandomCocktail: function() {
            $http({
                method: 'GET',
                url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.error(error);
            })
        }
    };
}