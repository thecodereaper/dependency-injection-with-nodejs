import { GET, route } from 'awilix-express';

@route('/api/heroes')
export default class HeroesController {

    constructor(heroesService) {

        this.heroesService = heroesService;
    }

    @GET()
    async getAllAsync(req, res, _next) {

        const heroes = await this.heroesService.getAllAsync();
        return res.status(200).json(heroes);
    }
}
