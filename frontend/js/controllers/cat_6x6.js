main.controller('cat_6x6', function ($scope, $http, $location, $cookies) {
    //контроллер страницы cat_6x6
    $scope.$parent.pageName = 'cat_6x6'
    //создаем "сессию" игры
    let game = new ParaGame({
        type: 6,
        animal: "cat"
    });
    $scope.game = game
});