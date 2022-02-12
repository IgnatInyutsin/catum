main.controller('cat_game', function ($scope, $http, $location, $cookies) {
    //контроллер страницы cat_game
    $scope.$parent.pageName = 'cat_game';
    //подключение Api
    let api = new Api();

    //объект анимации кнопки
    let paraButton = anime({
        targets: ".para_cat",
        scale: 1.2,
        autoplay: false
    });

    $scope.catParaClick = function () {
        paraButton.restart();
        setTimeout(api.redirect, 1000, "!/para_game_guide/para_cat_game");
    }
});