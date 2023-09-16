import mongoose from "mongoose";

const bioCardSchema = mongoose.Schema({
  title: String,
  selectedImage: String,
});
const BioCardModel= mongoose.model("BioCardModel",bioCardSchema);
export default BioCardModel
