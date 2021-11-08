import { connect, ConnectOptions } from 'mongoose';
import config from './config/config'

export async function startConnection() {
    await connect(config.DB.URI, dbOptions, () => {
        console.log('Database is connected')
    });
};

const dbOptions: ConnectOptions = {
    bufferCommands: true,
    dbName: config.DB.NAME,
    user: config.DB.USER,
    pass: config.DB.PASSWORD,
    autoIndex: true,
    autoCreate: true,
};

