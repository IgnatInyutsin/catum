/**
 Контроллер, выполняющийся при формировании каждой страницы
 */
main.controller('common', function ($scope, $http, $location, $cookies, $timeout) {

    $scope.showUpButton = false; // Кнопка перемотки вверх

    //создание куки-ячеек если их не было
    if ($cookies.get('dog_point') == undefined) $cookies.put("dog_point", "0");
    if ($cookies.get('cat_point') == undefined) $cookies.put("cat_point", "0");

    $scope.pageTop = function () { // Функция перемотки вверх
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    }

    if (document.location.hash == "") document.location.hash = '!/homepage/'; //если переходят по пустому хэшу то редирект на главную страницу
});