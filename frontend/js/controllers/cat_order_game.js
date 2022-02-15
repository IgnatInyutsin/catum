main.controller('cat_order_game', function ($scope, $http, $location, $cookies, $routeParams) {
    //контроллер страницы cat_order_game
    $scope.$parent.pageName = 'dog_order_game'

    //подключаем api
    let api = new Api()

    //редирект на нормальный юрл если этот не верный
    if ($routeParams.currentLevel == undefined) {
        api.redirect("!/cat_order_game/0");
        location.reload();
    }

    //создаем "сессию" игры
    console.log($routeParams.currentLevel)
    let game = new OrderGame({
        level: Number($routeParams.currentLevel),
        animal: "cat"
    });
    $scope.game = game

    //объект анимации кнопки
    let nextLevel = anime({
        targets: ".next_level",
        scale: 0.8,
        autoplay: false
    });

    $scope.nextLevelClick = function () {
        nextLevel.restart();
        setTimeout(api.redirect, 1000, "!/cat_order_game/" + (Number($routeParams.currentLevel) + 1));
    }
});