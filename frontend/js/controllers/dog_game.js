main.controller('dog_game', function ($scope, $http, $location, $cookies) {
    //контроллер страницы dog_game
    $scope.$parent.pageName = 'dog_game';
    //подключение Api
    let api = new Api();

    //объект анимации кнопки
    let paraButton = anime({
        targets: ".para_dog",
        scale: 1.2,
        autoplay: false
    });

    $scope.dogParaClick = function () {
        paraButton.restart();
        setTimeout(api.redirect, 1000, "!/para_dog_game/");
    }

});