import mongoose from "mongoose";

const bioSkillSchema = mongoose.Schema({
  title: String,
  selectedImage: String,
});
const BioSkillModel= mongoose.model("BioSkillModel",bioSkillSchema);
export default BioSkillModel
