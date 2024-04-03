const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://rajatpant215:zwhjfno74tUHxcs0@cluster0.qzspste.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected");
  } catch (error) {
    console.log("Error");
  }
};

module.exports = mongoDB;