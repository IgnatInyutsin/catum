main.controller('dog_game', function ($scope, $http, $location, $cookies) {
    //контроллер страницы dog_game
    $scope.$parent.pageName = 'dog_game';
    //подключение Api
    let api = new Api();

    //объект анимации кнопки
    let paraButton = anime({
        targets: ".para_dog",
        scale: 0.8,
        autoplay: false
    });
    let orderButton = anime({
        targets: "order_dog",
        scale: 0.8,
        autoplay: false
    });
    let soundButton = anime({
        targets: "sound_dog",
        scale: 0.8,
        autoplay: false
    });

    //редирект и анимация при нажатии кнопки
    $scope.dogParaClick = function () {
        paraButton.restart();
        setTimeout(api.redirect, 1000, "!/para_game_guide/para_dog_game");
    }
    $scope.dogOrderClick = function () {
        orderButton.restart();
        setTimeout(api.redirect, 1000, "!/order_game_guide/dog_order_game");
    }
    $scope.dogSoundClick = function () {
        soundButton.restart();
        setTimeout(api.redirect, 1000, '!/sound_game_guide/dog_sound_game')
    }

});