import mongoose, { Schema } from "mongoose";

const SiteUrlSchema = new Schema({
  siteUrl: { type: String, required: true },
  images: [{ type: String }],
}, {
  timestamps: true,
});

// Check if the model already exists in the models object
let SiteUrl;

try {
  // Attempt to get the model if the connection is established
  SiteUrl = mongoose.model('SiteUrl');
} catch (e) {
  // The model doesn't exist, create it
  SiteUrl = mongoose.model('SiteUrl', SiteUrlSchema);
}

export { SiteUrl };