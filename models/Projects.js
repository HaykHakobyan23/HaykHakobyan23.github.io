import mongoose, {model, Schema, models} from "mongoose";

const ProjectsSchema = new Schema({
  title: { am: String, en: String, ru: String, },
  description: { am: String, en: String, ru: String, },
  price: {type: Number, required: true},
  images: [{type:String}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: {type:Object},
}, {
  timestamps: true,
});

export const Projects = models.Projects || model('Projects', ProjectsSchema);