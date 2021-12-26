angular.module('appModule')
.controller('headerCtrl', AppHeaderController);

function AppHeaderController($scope) {
    $scope.test = 'Hello World'
}