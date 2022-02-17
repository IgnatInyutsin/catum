main.controller('dog_sound_game', function ($scope, $http, $location, $cookies, $routeParams) {
    //контроллер страницы dog_sound_game
    $scope.$parent.pageName = 'dog_sound_game'

    //подключаем api
    let api = new Api()

    //создаем танцующего догги
    var reverseDog = false
    setInterval(function () {
        if (!reverseDog) {
            document.getElementById('dance').style.transform = "scale(-1, 1)"
            reverseDog = true
        } else {
            document.getElementById('dance').style.transform = "scale(1, 1)"
            reverseDog = false
        }
    }, 500);

    //редирект на нормальный юрл если этот не верный
    if ($routeParams.currentLevel == undefined) {
        api.redirect("!/dog_sound_game/1");
        location.reload()
    } else if ($routeParams.currentLevel == "18") {
        document.getElementById("winner").style.display = "flex"
        document.getElementById("start_button").style.display = "none"
        setTimeout(api.redirect, 5000, "!/index/")
    }

    //объект анимации кнопки
    let nextLevel = anime({
        targets: ".next_level",
        scale: 0.8,
        autoplay: false
    });

    $scope.nextLevelClick = function () {
        nextLevel.restart();
        setTimeout(api.redirect, 1000, "!/dog_sound_game/" + (Number($routeParams.currentLevel) + 1));
    }

    $scope.startClick = function () {
        let game = new SoundGame({ //создаем сессию игры
            level: Number($routeParams.currentLevel),
            animal: "dog"
        });
        $scope.game = game
        document.getElementById("start_button").style.display = "none"
    }
});