import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    email: string,
    password: string,
    comparePassword: (password: string) => Promise<boolean>;
};

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

// Antes de guardar se ejecuta esta funcion que cifra el password
userSchema.pre<IUser>('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next(); // si el usuario no esta modificando su password termina la funcion
    // cifro el password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

// Comprobacion de password
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password); // devuelve true o false 
};

export default model<IUser>('User', userSchema);
