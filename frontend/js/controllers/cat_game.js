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
    let orderButton = anime({
        targets: "order_cat",
        scale: 0.8,
        autoplay: false
    });
    let soundButton = anime({
        targets: ".sound_cat",
        scale: 0.8,
        autoplay: false
    });

    //функции при нажатии на кнопки
    $scope.catParaClick = function () {
        paraButton.restart();
        setTimeout(api.redirect, 1000, "!/para_game_guide/para_cat_game");
    }
    $scope.catOrderClick = function () {
        orderButton.restart();
        setTimeout(api.redirect, 1000, "!/order_game_guide/cat_order_game");
    }
    $scope.catSoundClick = function () {
        soundButton.restart();
        setTimeout(api.redirect, 1000, '!/sound_game_guide/cat_sound_game')
    }
});