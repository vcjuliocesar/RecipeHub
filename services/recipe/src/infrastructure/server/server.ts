import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from '../adapters/indexRoutes';
import recipeRoutes from '../adapters/recipeRoutes';

export class Server {

    private readonly app:express.Application

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        //DB

        //CONFIG
        this.app.set('port',process.env.PORT || 3000);
        //MIDDLEWARES
        this.middlewares();
        
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(cors());
    }

    routes() {
        this.app.use(indexRoutes)
        this.app.use('/api/recipe',recipeRoutes)
    }

    start(){
        this.app.listen(this.app.get('port'),() => {
            console.log('Server on port ',this.app.get('port'));
        });
    } 
}

