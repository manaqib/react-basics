class Player {
    constructor({ id, name, position, shirt, age, clubs, international }) {
        this.id = id;
        this.name = name,
            this.position = position;
        this.shirt = shirt;
        this.age = age;
        this.clubs = clubs;
    }
}

class Stats {
    constructor({ apps, goals, years }) {
        this.apps = apps;
        this.goals = goals;
        this._years = years;
    }
    years() {
        const [start, end] = this._years.split("-");
        return parseInt(end) - parseInt(start);
    }
}
class Club {
    constructor({ team, stats }) {
        this.team = team;
        this.stats = stats;
    }

    tenure() {
        return this.stats.years();
    }
}

const clubs = [new Club({
    team: "Le Mans",
    stats: new Stats({
        apps: 64,
        goals: 12,
        years: "1998-2002"
    })
})];
const player = new Player({
    id: 1,
    name: "Didier Drogba",
    position: "Striker",
    shirt: 11,
    age: 20,
    clubs: clubs
})
console.log(clubs[0].tenure());
console.log(player.clubs)

