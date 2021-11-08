import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IResource extends Document {
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
