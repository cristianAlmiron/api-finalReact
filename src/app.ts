import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index'
import path from 'path';


const app = express();

//settings

app.set('port', process.env.PORT || 3000);

//middlewares

app.use(morgan('dev'));

//routes

app.use('/api', indexRoutes);

// this folder for this app will be use4d to store public files

app.use('/uploads', express.static(path.resolve('uploads')));

app.use(express.json());

export default app;