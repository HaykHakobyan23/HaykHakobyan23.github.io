import mongoose, { Schema, model, models } from "mongoose";

const ContactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    discount: String,
    phoneNumber: String,
    messenger: String,
}, {
    timestamps: true
});

export const Contact = models.Contact || mongoose.model('Contact', ContactSchema); // Fix the model name here