export default class AppConfig {

    constructor() {

        this.environment = process.env.NODE_ENV;
        this.port = process.env.PORT;
    }
}
