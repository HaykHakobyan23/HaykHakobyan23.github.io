import {model, models, Schema} from "mongoose";

const TeamSchema = new Schema({
  names: { am: String, ru: String, en: String },
  position: { am: String, ru: String, en: String },
  images: [{type:String}],
}, {
  timestamps: true,
});

export const Team = models?.Team || model('Team', TeamSchema);