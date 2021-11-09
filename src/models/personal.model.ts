import mongoose, { Document, model, Schema } from 'mongoose';

export interface IPersonal extends Document {
    name: string,
    surname: string,
    area: string,
    date_of_admission: Date,
    date_of_birth: Date,
    description: string,
    imagePath: string,
    seniority: string,
    resources: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Resource"
        }
    ]
}

const personalSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: false,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        lowercase: false,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    area: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Area"
    }
});

export default model<IPersonal>('Personal', personalSchema);