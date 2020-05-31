import Bootstrap from './app/bootstrap';

const bootstrap = new Bootstrap();
bootstrap.run(port => console.log(`Server started an running on port ${port}.`));
