main.controller('sound_game_guide', function ($scope, $http, $location, $cookies, $routeParams) {
    //контроллер страницы sound_game_guide
    $scope.$parent.pageName = 'sound_game_guide';
    //подключение Api
    let api = new Api();

    //объект анимации кнопки
    let paraButton = anime({
        targets: ".para_dog",
        scale: 0.8  ,
        autoplay: false
    });

    $scope.redirectOnGame = function () { //срабатывает при нажатии на кнопку
        paraButton.restart();
        setTimeout(api.redirect, 1000, '!/' + $routeParams.redirect_url + '/');
    }
});