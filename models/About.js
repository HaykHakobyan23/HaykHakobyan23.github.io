import mongoose, { Schema, model, models } from "mongoose";

const AboutSchema = new Schema({
  title: { am: String, ru: String, en: String },
  description: { am: String, ru: String, en: String },
  images: [{ type: String }],
  text: String,
}, {
  timestamps: true
});

export const About = models?.About || model('About', AboutSchema);