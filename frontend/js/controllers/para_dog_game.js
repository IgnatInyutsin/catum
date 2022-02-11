main.controller('para_dog_game', function ($scope, $http, $location, $cookies) {
    //контроллер страницы para_dog_game
    $scope.$parent.pageName = 'para_dog_game';
    //подключение Api
    let api = new Api();

    //объект анимации кнопки
    let paraButton = anime({
        targets: ".para_4x4_dog_button",
        scale: 0.8  ,
        autoplay: false
    });
    let paraButton2 = anime({
        targets: ".para_6x6_dog_button",
        scale: 0.8  ,
        autoplay: false
    });

    $scope.dogFourGameClick = function () { //работает при нажатии кнопки
        paraButton.restart();
        setTimeout(api.redirect, 1000, "!/dog_4x4/");
    }
    $scope.dogSixGameClick = function () { //срабатывает при клике на кнопку 6x6
        paraButton2.restart();
        setTimeout(api.redirect, 1000, "!/dog_6x6/");
    }
});