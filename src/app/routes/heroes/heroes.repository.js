export default class HeroesRepository {

    constructor() {

        this.heroes = [
            { id: 1, name: 'Wolverine' },
            { id: 2, name: 'Superman' },
            { id: 3, name: 'Wonder Woman' },
            { id: 4, name: 'Black Widow' },
            { id: 5, name: 'Iron Man' }
        ];
    }

    async findAllAsync() {

        return this.heroes;
    }
}
