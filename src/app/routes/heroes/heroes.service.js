export default class HeroesService {

    constructor(heroesRepository) {

        this.heroesRepository = heroesRepository;
    }

    async getAllAsync() {

        return await this.heroesRepository.findAllAsync();
    }
}
