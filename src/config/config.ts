export default {
    jwtSecret: process.env.JWT_SECRET || 'top-secret',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/proyectoFinalReact',
        USER: process.env.MONGODB_USER || '',
        PASSWORD: process.env.MONGODB_PASSWORD || '',
        NAME: process.env.MONGODB_NAME
    }
};