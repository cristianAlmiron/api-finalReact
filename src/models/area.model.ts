import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IArea extends Document {
    name: string,
    detail: string,
};

const areaSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true,
        lowercase: false,
        trim: true
    },
    detail: {
        type: String,
        unique: false,
        required: false,
        lowercase: false,
        trim: true
    }
});

export default model<IArea>('Area', areaSchema);
