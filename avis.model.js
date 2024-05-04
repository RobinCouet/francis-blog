import mongoose from "mongoose";

const AvisSchema = mongoose.Schema(
  {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Avis', AvisSchema);