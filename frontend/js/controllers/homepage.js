main.controller('homepage', function ($scope, $http, $location, $cookies) {
    //контроллер страницы homepage
    $scope.$parent.pageName = 'homepage';

    //подключение Api
    let api = new Api();

    //объект анимации кнопки
    let button = anime({
        targets: ".homepage_button",
        scale: 0.8,
        autoplay: false
    });

    $scope.homepageClick = function () {
        button.restart();
        setTimeout(api.redirect, 1000, '!/index/')
    }
});