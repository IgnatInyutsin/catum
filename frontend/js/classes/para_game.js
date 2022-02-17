class ParaGame {
    constructor(obj) {
        //подключаем Api
        let api = new Api();

        //переносим данные в объект
        this.type = obj.type
        this.animal = obj.animal
        this.untapped = [0, 0]
        this.winpoint = 0
        this.clicks = 0
        //взависимости от типа добавляем данные о карточках догги или котов
        if (this.animal == "dog") {
            this.allCardsDatabase = [
                {fileName: 'unnamed.jpg', id: 1, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-14-54-909.jpg', id: 2, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-15-27-561.jpg', id: 3, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-51-37-586.jpg', id: 4, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-52-10-829.jpg', id: 5, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-52-48-043.jpg', id: 6, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-53-21-119.jpg', id: 7, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-53-53-938.jpg', id: 8, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-54-38-570.jpg', id: 9, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-55-07-683.jpg', id: 10, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-58-27-534.jpg', id: 11, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-58-27-643.jpg', id: 12, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-58-28-466.jpg', id: 13, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-58-28-800.jpg', id: 14, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-58-30-108.jpg', id: 15, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-58-30-246.jpg', id: 16, untap: false},
                {fileName: 'изображение_viber_2022-02-09_19-58-55-964.jpg', id: 17, untap: false},
                {fileName: 'bebra.jpg', id: 18},
            ]
        } else {
            this.allCardsDatabase = [
                {fileName: 'изображение_viber_2022-02-09_18-12-32-692.jpg', id: 1, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-13-19-688.jpg', id: 2, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-13-49-362.jpg', id: 3, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-14-20-535.jpg', id: 4, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-16-01-661.jpg', id: 5, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-16-24-989.jpg', id: 6, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-16-53-943.jpg', id: 7, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-17-19-063.jpg', id: 8, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-17-54-173.jpg', id: 9, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-18-19-858.jpg', id: 10, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-19-21-570.jpg', id: 11, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-19-54-569.jpg', id: 12, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-20-28-302.jpg', id: 13, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-21-02-339.jpg', id: 14, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-21-24-798.jpg', id: 15, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-22-11-382.jpg', id: 16, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-22-35-641.jpg', id: 17, untap: false},
                {fileName: 'изображение_viber_2022-02-09_18-22-59-042.jpg', id: 18, untap: false},
            ]
        }

        //проверяем тип и генерируем поле
        if (this.type == 4) {
            //собираем базу из рандомных карточек
            this.cardsInGames = []
            //добавляем карты рандомно
            let i = 0
            while (this.cardsInGames.length < 16) {
                //рандомный индекс
                i = Math.round(Math.random() * (this.allCardsDatabase.length - 1 - 0) + 0);
                //добавляем 2 таких карточки в наш массив
                this.cardsInGames.push(this.allCardsDatabase[i]);
                this.cardsInGames.push(this.allCardsDatabase[i]);
                //удаляем эту карточку из наших иных данных
                this.allCardsDatabase.splice(i,1);
            }
            //мешаем карты рандомно
            this.cardsInGames = api.shuffle(this.cardsInGames);
        }
        else if (this.type == 6) {
            //собираем базу из рандомных карточек
            this.cardsInGames = []
            //добавляем карты рандомно
            let i = 0
            while (this.cardsInGames.length < 36) {
                //рандомный индекс
                i = Math.round(Math.random() * (this.allCardsDatabase.length - 1 - 0) + 0);
                //добавляем 2 таких карточки в наш массив
                this.cardsInGames.push(this.allCardsDatabase[i]);
                this.cardsInGames.push(this.allCardsDatabase[i]);
                //удаляем эту карточку из наших иных данных
                this.allCardsDatabase.splice(i,1);
            }
            //мешаем карты рандомно
            this.cardsInGames = api.shuffle(this.cardsInGames);
        }

        //расставляем картиночки на свои места
        for (let i=1; i<=this.cardsInGames.length; i++) {
            if (this.animal == "cat") {
                document.getElementById("img" + i).src = "img/МЕМЫЕ КОТЫ 1к1/" + this.cardsInGames[i-1].fileName
            }
            else {
                document.getElementById("img" + i).src = "img/МЕМНЫЕ СОБАКИ 1к1/" + this.cardsInGames[i-1].fileName
            }
        }

    }

    //функция разворота карточек
    flip(n) {
        if ((this.untapped[0] == 1 && n == this.untapped[1]) || (this.cardsInGames[n-1].untap)){
            return console.log("LOL");
        }
        if (this.untapped[0] == 2) {
            document.getElementById("card" + this.untapped[1]).classList.remove("flip");
            document.getElementById("card" + this.untapped[2]).classList.remove("flip");
            this.untapped[0] = 0
        }
        document.getElementById("card" + n).classList.add("flip");
        this.untapped[0] += 1

        //проверка, сколько карточек тапнуто
        if (this.untapped[0] == 1) {
            this.untapped[1] = n
        }
        else if (this.untapped[0] == 2) {
            this.untapped[2] = n
            this.clicks += 1
            if (this.cardsInGames[this.untapped[2]-1].id == this.cardsInGames[this.untapped[1]-1].id) { //если карточки одинаковые засчитываем их в победные очки
                this.untapped[0] = 0
                this.winpoint += 2
                this.cardsInGames[this.untapped[1] - 1].untap = true
                this.cardsInGames[n - 1].untap = true
            }
        }

        //проверка победных очков
        if (this.winpoint == this.type*this.type) {
            //убираем игровое поле
            document.getElementById("game_panel").style.display = "none"
            document.getElementById("win_screen").style.display = "flex"
            //подключаем api
            let api = new Api();
            //добавляем очки в общий зачет
            let startSum;
            if (this.type == 4) {
                startSum = 450
            } else {
                startSum = 1000
            }
            let points = Number(api.getCookie(this.animal + "_point")) + (startSum-this.clicks*15)
            document.cookie = this.animal + "_point=" + points
            //переносим на страницу ранее
            setTimeout(api.redirect, 5000, '!/index/');
        }
    }
}