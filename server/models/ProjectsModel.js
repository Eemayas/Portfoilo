import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  tags: [
    {
      name: String,
      color: String,
    },
  ],
  image: String,
  source_code_link: String,
  imageList: [
    {
      url: String,
      title: String,
    },
  ],
});
const ProjectModel = mongoose.model("ProjectModel", projectSchema);
export default ProjectModel;
