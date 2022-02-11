main.controller('index', function ($scope, $http, $location, $cookies) {
    //контроллер страницы index
    $scope.$parent.pageName = 'index';

    //подключение Api
    let api = new Api();

    //объект анимации объекта догги
    let doggy = anime({
        targets: ".dog_img",
        scale: 0.8,
        autoplay: false
    });
    //объект анимации объекта бонго-кэта
    let bongoCat = anime({
        targets: ".cat_img",
        scale: 0.8,
        autoplay: false
    });

    //функция при клике на сторону догги
    $scope.doggyClick = function () {
        doggy.restart();
        setTimeout(api.redirect, 1000, "!/dog_game/");
    }
    //функция при клике на сторону котиков
    $scope.cattyClick = function () {
        bongoCat.restart();
        setTimeout(api.redirect, 1000, "!/cat_game/");
    }
});