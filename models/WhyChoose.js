import mongoose, {model, Schema, models} from "mongoose";

const WhyChooseSchema = new Schema({
  title: { am: String, ru: String, en: String },
  description: { am: String, en: String, ru: String },
}, {
  timestamps: true,
});

export const WhyChoose = models.WhyChoose || model('WhyChoose', WhyChooseSchema);