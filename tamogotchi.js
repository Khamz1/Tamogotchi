const tamogotchi = {
    name: 'mansur',
    meal: 1,
    energy: 2,
    mood: 4,
    gorilla: 0,
    getStatus() {
        let hungryTam = this.meal < 3 ? "Моц велл со" : "Мец вац со";
        let sleepyTam = this.energy < 3 ? "Ха харц диз" : "1ад вита со ";
        let moodlyTam = this.mood < 3 ? moodlyTam = "Мне скучно" : "тховс дик ву ";
        if(this.gorilla==3){this.mood==5}
        console.log(`имя:${this.name},еда:${hungryTam},энергия:${sleepyTam},настроение:${moodlyTam}`)
        if(this.meal||this.energy||this.mood<=0){console.log("Т1ехьакх латт")}

    },
    setName(changename) {
        return this.name = changename
    },
    eat() {
        if (this.meal++ && this.meal < 5) {
            this.mood--
        }

    },
    sleep() {
        if (this.energy++ && this.energy < 5) {
            this.meal--;
        }


    },
    play() {
        if (this.mood++ && this.mood < 5) {
            this.meal--;
        }
    },
}

