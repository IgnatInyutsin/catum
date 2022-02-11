main.controller('para_cat_game', function ($scope, $http, $location, $cookies) {
    //контроллер страницы para_cat_game
    $scope.$parent.pageName = 'para_cat_game';
    //подключение Api
    let api = new Api();

    //объект анимации кнопки
    let paraButton = anime({
        targets: ".para_4x4_cat_button",
        scale: 0.8  ,
        autoplay: false
    });
    let paraButton2 = anime({
        targets: ".para_6x6_cat_button",
        scale: 0.8  ,
        autoplay: false
    });

    $scope.catFourGameClick = function () { //срабатывает при клике на кнопку 4х4
        paraButton.restart();
        setTimeout(api.redirect, 1000, "!/cat_4x4/");
    }
    $scope.catSixGameClick = function () { //срабатывает при клике на кнопку 6x6
        paraButton2.restart();
        setTimeout(api.redirect, 1000, "!/cat_6x6/");
    }
});