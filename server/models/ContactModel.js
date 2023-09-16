import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
      },
    logo: String,
    links: String,
});
const ContactModel= mongoose.model("ContactModel",contactSchema);
export default ContactModel
