class SoundGame {
    constructor(obj) {
        //добавляем данные опции
        this.animal = obj.animal
        this.level = obj.level
        this.soundsNow = []
        this.lastAddId = 0
        this.choosenSong = []
        //добавляем базу данных звуков
        if (this.animal == "cat") {
            this.allSoundsDatabase = [
                {fileName: "sounds/Коты звуки/cat-meow_g1oerneo (mp3cut.net).mp3", id: 1},
                {fileName: "sounds/Коты звуки/jg-032316-sfx-cat-meow (mp3cut.net).mp3", id: 2},
                {fileName: "sounds/Коты звуки/murchanie_kota_-_mrr-mrrr_luchshee_uspokoitelnoe_na_noch (mp3cut.net).mp3", id: 3},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_myaukane_koshki (mp3cut.net).mp3", id: 4},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_myaukane_koshki (mp3cut.net) (1).mp3", id: 5},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_myaukane_koshki (mp3cut.net) (2).mp3", id: 6},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_slushat_koshkam (mp3cut.net).mp3", id: 7},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_slushat_koshkam (mp3cut.net) (1).mp3", id: 8},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_slushat_koshkam (mp3cut.net) (2).mp3", id: 9},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_slushat_koshkam (mp3cut.net) (3).mp3", id: 10},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_slushat_koshkam (mp3cut.net) (4).mp3", id: 11},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_slushat_koshkam (mp3cut.net) (5).mp3", id: 12},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_slushat_koshkam (mp3cut.net) (6).mp3", id: 13},
                {fileName: "sounds/Коты звуки/myaukane_koshki_-_slushat_koshkam (mp3cut.net) (7).mp3", id: 14},
                {fileName: "sounds/Коты звуки/myaukane_kotyonka_-_myaukane_kotyonka (mp3cut.net).mp3", id: 15},
                {fileName: "sounds/Коты звуки/myaukane_kotyonka_-_myaukane_kotyonka (mp3cut.net) (1).mp3", id: 16},
                {fileName: "sounds/Коты звуки/myaukane_kotyonka_-_myaukane_kotyonka (mp3cut.net) (2).mp3", id: 17},
                {fileName: "sounds/Коты звуки/playful-cat-sounds_z1wz-rnd (mp3cut.net).mp3", id: 18},
            ]
        } else {
            this.allSoundsDatabase = [
                {fileName: "sounds/собаки звуки/barking_dog_sms meloboom (mp3cut.net).mp3", id: 1},
                {fileName: "sounds/собаки звуки 2/собаки звуки/Sobachijj_khor_-_Imperskijj_marsh_Star_Wars_63532972 (mp3cut.net) (1).mp3", id: 2},
                {fileName: "sounds/собаки звуки 2/собаки звуки/1.mp3", id: 3},
                {fileName: "sounds/собаки звуки/beat-bark meloboom (mp3cut.net).mp3", id: 4},
                {fileName: "sounds/собаки звуки 2/собаки звуки/3.mp3", id: 5},
                {fileName: "sounds/собаки звуки 2/собаки звуки/4.mp3", id: 6},
                {fileName: "sounds/собаки звуки/dog-vs-nokia-tune meloboom (mp3cut.net) (1).mp3", id: 7},
                {fileName: "sounds/собаки звуки/doggie-bark-song meloboom (mp3cut.net).mp3", id: 8},
                {fileName: "sounds/собаки звуки 2/собаки звуки/5.mp3", id: 9},
                {fileName: "sounds/собаки звуки 2/собаки звуки/6.mp3", id: 10},
                {fileName: "sounds/собаки звуки 2/собаки звуки/7.mp3", id: 11},
                {fileName: "sounds/собаки звуки 2/собаки звуки/8.mp3", id: 12},
                {fileName: "sounds/собаки звуки/jingle-bark meloboom (mp3cut.net).mp3", id: 13},
                {fileName: "sounds/собаки звуки 2/собаки звуки/9.mp3", id: 14},
                {fileName: "sounds/собаки звуки 2/собаки звуки/10.mp3", id: 15},
                {fileName: "sounds/собаки звуки/jingle-dogs meloboom (mp3cut.net).mp3", id: 16},
                {fileName: "sounds/собаки звуки 2/собаки звуки/11.mp3", id: 17},
                {fileName: "sounds/собаки звуки 2/собаки звуки/12.mp3", id: 18},
            ]
        }

        //создаем очередь для единичного проигрывания методом рандома
        let sounds = []
        for (let i = 0; i < this.level; i++) {
            let a = Math.round(Math.random() * (this.allSoundsDatabase.length - 1 - 0) + 0);
            this.soundsNow.push(this.allSoundsDatabase[a]);
            sounds.push(this.allSoundsDatabase[a].fileName);
        }
        console.log(sounds)

        //проигрываем все звуки
        let sound = new Howl({
            src: sounds[0],
            autoplay: true,
            volume: 0.5
        });
        sound.play();

        var z = 1
        let toggleMusic = function () {
            let sound = new Howl({
                src: sounds[z],
                autoplay: true,
                volume: 0.5
            });
            sound.play();
            if (z == sounds.length - 1) {
                clearInterval(viewer);
            }
            z++;
        }
        if (sounds.length != 1) {
            var viewer = setInterval(toggleMusic, 5500);
        }
    }

    addSound(id) {
        if (this.lastAddId == id) {
            //если уже нажимался добавляем
            let elem = document.createElement('img');
            elem.src = "img/sound.png"
            elem.classList.add("order_game_img");
            elem.id = "chooseSong" + id
            document.getElementById('actual_images').append(elem);
            this.choosenSong.push(this.allSoundsDatabase[id-1])
            //если число элементов совпадает с числом песен проверяем
            if (this.choosenSong.length == this.level) {
                if (JSON.stringify(this.choosenSong) == JSON.stringify(this.soundsNow)) {
                    document.getElementById("next_level_but").style.display = "block"
                }
                else {
                    let api = new Api();
                    document.getElementById("looser").style.display = "flex"
                    document.getElementById("add_response").style.display = "none"
                    //показав экран проигрыша редиректим обратно
                    setTimeout(api.redirect, 5000, "!/" + this.animal + "_game/")
                }
            }
        }
        else {
            //иначе проигрываем звук
            let music = new Howl({
                src: [this.allSoundsDatabase[id-1].fileName],
                autoplay: true,
                volume: 0.5
            });
            music.play();
            document.getElementById("input" + id).classList.add("choosen")
            if (this.lastAddId != 0) {
                document.getElementById("input" + this.lastAddId).classList.remove("choosen")
            }
        }
        //записываем в значение последнего проигрываемоего id этот  id
        this.lastAddId = id
    }
}