//создаем модуль main (подключается в index.html)
var main = angular.module("main", ['ngRoute', 'ngCookies']);

main.config(function ($routeProvider) {
    $routeProvider.when("/index/", {
        controller: "index",
        templateUrl: "views/controllers/index.html"
    });
    $routeProvider.when("/cat_game/", {
        controller: "cat_game",
        templateUrl: "views/controllers/cats.html"
    });
    $routeProvider.when("/dog_game/", {
        controller: "dog_game",
        templateUrl: "views/controllers/dog_game.html"
    });
    $routeProvider.when("/para_dog_game/", {
        controller: "para_dog_game",
        templateUrl: "views/controllers/para_dog_game.html"
    });
    $routeProvider.when("/para_cat_game/", {
        controller: "para_cat_game",
        templateUrl: "views/controllers/para_cat_game.html"
    });
    $routeProvider.when("/cat_4x4/", {
        controller: "cat_4x4",
        templateUrl: "views/controllers/cat_4x4.html"
    });
    $routeProvider.when("/dog_4x4/", {
        controller: "dog_4x4",
        templateUrl: "views/controllers/dog_4x4.html"
    });
    $routeProvider.when("/cat_6x6/", {
        controller: "cat_6x6",
        templateUrl: "views/controllers/cat_6x6.html"
    });
    $routeProvider.when("/dog_6x6/", {
        controller: "dog_6x6",
        templateUrl: "views/controllers/dog_6x6.html"
    });
    $routeProvider.when("/para_game_guide/:redirect_url", {
        controller: "para_game_guide",
        templateUrl: "views/controllers/para_game_guide.html"
    });
    $routeProvider.when("/order_game_guide/:redirect_url", {
        controller: "order_game_guide",
        templateUrl: "views/controllers/order_game_guide.html"
    });
    $routeProvider.when("/sound_game_guide/:redirect_url", {
        controller: "sound_game_guide",
        templateUrl: "views/controllers/sound_game_guide.html"
    });
    $routeProvider.when("/homepage/", {
        controller: "homepage",
        templateUrl: "views/controllers/homepage.html"
    });
    $routeProvider.when("/homepage/", {
        controller: "homepage",
        templateUrl: "views/controllers/homepage.html"
    });
    $routeProvider.when("/dog_order_game/:currentLevel?", {
        controller: "dog_order_game",
        templateUrl: "views/controllers/dog_order_game.html"
    });
    $routeProvider.when("/cat_order_game/:currentLevel?", {
        controller: "cat_order_game",
        templateUrl: "views/controllers/cat_order_game.html"
    });
    $routeProvider.when("/dog_sound_game/:currentLevel?", {
        controller: "dog_sound_game",
        templateUrl: "views/controllers/dog_sound_game.html"
    });
    $routeProvider.when("/cat_sound_game/:currentLevel?", {
        controller: "cat_sound_game",
        templateUrl: "views/controllers/cat_sound_game.html"
    });
});