main.controller('dog_6x6', function ($scope, $http, $location, $cookies) {
    //контроллер страницы dog_6x6
    $scope.$parent.pageName = 'dog_6x6'
    //создаем "сессию" игры
    let game = new ParaGame({
        type: 6,
        animal: "dog"
    });
    $scope.game = game
});