import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema({

    filename: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    tags: {
        type: [String],
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Image = models.Image || model("Image", ImageSchema);

export default Image;