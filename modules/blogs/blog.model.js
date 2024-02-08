const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Tile is missing"] },
  tags: { type: String }, //["Science", "mern-stack"] ??
  content: { type: String },
  author: { type: String, required: [true, "Author is missing"] },
  words: { type: Number, default: 0 },
  status: { type: String, enum: ["published", "draft"], default: "draft" }, // [ published, draft] ??
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const BlogModel = new mongoose.model("Blog", blogSchema);

module.exports = BlogModel;

//instead of wrting above two line of code we can write follwoing code

// module.exports = new model("Blog" , blogSchemna);
