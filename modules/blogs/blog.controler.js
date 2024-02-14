const BlogModel = require("./blog.model");

const create = (payload) => {
  return BlogModel.create(payload);
};

const getAll = () => {
  return BlogModel.find();
};

const getById = (_id) => {
  return BlogModel.findOne({ _id });
};

const updateById = async (_id, payload) => {
  if (!_id) throw new Error("Id is required");
  const blog = await BlogModel.findOne({ _id });
  if (!blog) throw new Error("Blog didn't found!!");
  await BlogModel.updateOne({ _id: blog.id }, payload);
  return "Blog updated successfully";
};

const deleteById = (_id) => {
  return BlogModel.deleteOne({ _id });
};

module.exports = { create, getAll, getById, updateById, deleteById };
