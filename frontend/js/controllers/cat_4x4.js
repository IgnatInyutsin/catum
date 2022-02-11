main.controller('cat_4x4', function ($scope, $http, $location, $cookies) {
    //контроллер страницы cat_4x4
    $scope.$parent.pageName = 'cat_4x4'
    //создаем "сессию" игры
    let game = new ParaGame({
        type: 4,
        animal: "cat"
    });
    $scope.game = game
});