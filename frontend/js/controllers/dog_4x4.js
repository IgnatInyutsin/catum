main.controller('dog_4x4', function ($scope, $http, $location, $cookies) {
    //контроллер страницы dog_4x4
    $scope.$parent.pageName = 'dog_4x4'
    //создаем "сессию" игры
    let game = new ParaGame({
        type: 4,
        animal: "dog"
    });
    $scope.game = game
});