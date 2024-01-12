import mongoose, {model, Schema, models} from "mongoose";

const WhatwedoSchema = new Schema({
  title: { am: String, en: String, ru: String, },
  description: { am: String, en: String, ru: String, },
  images: [{type:String}],
}, {
  timestamps: true,
});

export const Whatwedo = models.Whatwedo || model('Whatwedo', WhatwedoSchema);