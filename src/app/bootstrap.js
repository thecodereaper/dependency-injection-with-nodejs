import { asClass, InjectionMode, createContainer } from 'awilix';

import App from './app';
import AppConfig from './configs/app.config';
import HeroesRepository from './routes/heroes/heroes.repository';
import HeroesService from './routes/heroes/heroes.service';

export default class Bootstrap {
    
    constructor() {

        this.instance = this._createContainer();
    }

    run(callback) {

        const app = this.instance.resolve('app');
        app.start(this.instance, callback);
    }

    _createContainer() {

        const container = createContainer({injectionMode: InjectionMode.CLASSIC});
    
        container.register({
            app: asClass(App).singleton(),
            appConfig: asClass(AppConfig).singleton(),
            heroesRepository: asClass(HeroesRepository).singleton(),
            heroesService: asClass(HeroesService).singleton()
        });

        return container;
    }
}
