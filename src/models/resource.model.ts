import { Document, model, Schema } from 'mongoose';

export interface IResource extends Document {
    name: string,
    url_image: string,
    date_of_purchase: Date;
    date_of_maintenance: Date;
    description: string;
    imagePath: string
};

const resourceSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    url_image: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    date_of_purchase: {
        type: Date,
        unique: false,
        required: true,
    },
    date_of_maintenance: {
        type: Date,
        unique: false,
        required: true,
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    imagePath: {
        type: String,
        trim: true
    }
});

export default model<IResource>('Resource', resourceSchema);
