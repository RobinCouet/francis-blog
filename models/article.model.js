import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    avis: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Avis' }],
    picture: {
      img: { type: String, required: true },
      img1: { type: String },
      img2: { type: String },
      img3: { type: String },
      img4: { type: String },
    },
    status: { type: Boolean, required: true },
    stock: { type: Number, required: true }
  });


export default mongoose.model('Article', ArticleSchema)
