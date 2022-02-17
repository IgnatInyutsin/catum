class OrderGame {
    constructor(obj) {
        //Подключаем api
        let api = new Api()

        //создаем параметры
        this.level = obj.level
        this.animal = obj.animal
        this.cardsNow = []
        this.activeCardId = 0
        this.activeCards = []

        //обнуляем все настройки
        document.getElementById('view_images').style.display = "flex"
        document.getElementById('view1').style.display = "flex"
        document.getElementById('view2').style.display = "flex"
        document.getElementById('view3').style.display = "flex"
        document.getElementById('add_response').style.display = "none"

        //добавляем все карточки в базу данных
        if (this.animal == "dog") {
            this.allCardsDatabase = [
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/unnamed.jpg', id: 1, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_18-14-54-909.jpg', id: 2, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_18-15-27-561.jpg', id: 3, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-51-37-586.jpg', id: 4, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-52-10-829.jpg', id: 5, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-52-48-043.jpg', id: 6, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-53-21-119.jpg', id: 7, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-53-53-938.jpg', id: 8, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-54-38-570.jpg', id: 9, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-55-07-683.jpg', id: 10, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-58-27-534.jpg', id: 11, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-58-27-643.jpg', id: 12, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-58-28-466.jpg', id: 13, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-58-28-800.jpg', id: 14, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-58-30-108.jpg', id: 15, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-58-30-246.jpg', id: 16, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/изображение_viber_2022-02-09_19-58-55-964.jpg', id: 17, untap: false},
                {fileName: 'img/МЕМНЫЕ СОБАКИ 1к1/bebra.jpg', id: 18},
            ]
        } else {
            this.allCardsDatabase = [
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-12-32-692.jpg', id: 1, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-13-19-688.jpg', id: 2, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-13-49-362.jpg', id: 3, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-14-20-535.jpg', id: 4, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-16-01-661.jpg', id: 5, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-16-24-989.jpg', id: 6, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-16-53-943.jpg', id: 7, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-17-19-063.jpg', id: 8, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-17-54-173.jpg', id: 9, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-18-19-858.jpg', id: 10, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-19-21-570.jpg', id: 11, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-19-54-569.jpg', id: 12, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-20-28-302.jpg', id: 13, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-21-02-339.jpg', id: 14, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-21-24-798.jpg', id: 15, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-22-11-382.jpg', id: 16, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-22-35-641.jpg', id: 17, untap: false},
                {fileName: 'img/МЕМЫЕ КОТЫ 1к1/изображение_viber_2022-02-09_18-22-59-042.jpg', id: 18, untap: false},
            ]
        }

        //генерация рандомных карточек на первом экране
        let a;
        for (let i=1; i<5; i++) {
            a = Math.round(Math.random() * (this.allCardsDatabase.length - 1 - 0) + 0);
            if (i >= 2) {
                if (this.cardsNow[i - 2].id != this.allCardsDatabase[a].id) {
                    document.getElementById('img' + i).src = this.allCardsDatabase[a].fileName
                } else {
                    i--;
                    continue
                }
            } else {
                document.getElementById('img' + i).src = this.allCardsDatabase[a].fileName
            }
            this.cardsNow.push(this.allCardsDatabase[a])
        }

        //расставляем карточки на экране выбора по своим местам
        for (let i=0; i<this.allCardsDatabase.length; i++) {
            document.getElementById('input' + this.allCardsDatabase[i].id).src = this.allCardsDatabase[i].fileName
        }

        //показываем мультики
        var z = 4
        let toggleImg = function () {
            if (z == 1  ) {
                document.getElementById('view_images').style.display = 'none'
                document.getElementById('add_response').style.display = 'flex'
                clearInterval(viewer)
            } else {
                document.getElementById('view' + z).style.display = "none"
                z = z-1
            }
        }
        let viewer = setInterval(toggleImg, 5000/Math.pow(1.25, this.level));
    }

    addImage(id, $scope) { //при нажатии на карточку
        //добавляем в список
        this.activeCards.push(this.allCardsDatabase[id-1]);
        //убираем цвет с прошлой карточки
        if (this.activeCardId != 0) {
            document.getElementById("input" + this.activeCardId).classList.remove('choosen');
        }
        //выделяем карточку цветом
        document.getElementById("input" + id).classList.add('choosen');
        this.activeCardId = id
        //вставляем картинку в поле выбранных картинок
        let elem = document.createElement('img');
        elem.src = document.getElementById('input' + id).src
        elem.classList.add("order_game_img");
        elem.id = "chooseImg" + id
        console.log(elem);
        document.getElementById('actual_images').append(elem);
        //если выбрано 4 проверяем равность
        if (this.activeCards.length == 4) {
            console.log(this.activeCards)
            console.log(this.cardsNow)
            if (this.activeCards[0].id  ==  this.cardsNow[3].id &&
                this.activeCards[1].id  ==  this.cardsNow[2].id &&
                this.activeCards[2].id  ==  this.cardsNow[1].id &&
                this.activeCards[3].id  ==  this.cardsNow[0].id) {
                //подключаем api
                let api = new Api();
                //записываем победные баллы
                document.cookie = this.animal + "_point=" + (Number(api.getCookie(this.animal + "_point")) + Math.round(10*Math.pow(1.25, this.level)))
                //добавляем кнопку перехода на следующий уровень
                document.getElementById("next_level_but").style.display = "block"
                document.getElementById('add_response').style.display = "none"
            }
            else {
                let api = new Api();
                document.getElementById("looser").style.display = "block"
                document.getElementById("add_response").style.display = "none"
                setTimeout(api.redirect, 5000, "!/" + this.animal + "_game")
            }
        }
    }
}