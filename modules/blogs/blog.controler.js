const BlogModel = require("./blog.model");
const { generateSlug } = require("../../utils/slug");

const create = (payload) => {
  payload.slug = generateSlug(payload.title);
  return BlogModel.create(payload);
};

const getAll = () => {
  return BlogModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "result",
      },
    },
    {
      $unwind: {
        path: "$result",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        tags: 1,
        content: 1,
        slug: 1,
        author: 0,
        author: "$result.name",
        status: 1,
      },
    },
  ]);
};

const getById = (slug) => {
  return BlogModel.findOne({ slug });
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
