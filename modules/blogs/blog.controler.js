const BlogModel = require("./blog.model");
const { generateSlug } = require("../../utils/slug");
const { default: slugify } = require("slugify");

const querry = [];

const create = (payload) => {
  payload.slug = generateSlug(payload.title);
  return BlogModel.create(payload);
};

const getProducts = () => {
  return BlogModel.find();
};

const getAll = () => {
  return BlogModel.aggregate([
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "postedTo",
        as: "blogsComment",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: {
        path: "$author",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        numberOfComments: {
          $size: "$blogsComment",
        },
      },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        content: 1,
        slug: 1,
        comment: 0,
        comment: "$blogsComment.comment",
        numberOfComments: 1,
        author: 0,
        author: "$author.name",
      },
    },
  ]);
};

const getById = (slug) => {
  return BlogModel.aggregate([
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "postedTo",
        as: "blogsComment",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: {
        path: "$author",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        numberOfComments: {
          $size: "$blogsComment",
        },
      },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        content: 1,
        slug: 1,
        comment: 0,
        comment: "$blogsComment.comment",
        numberOfComments: 1,
        author: 0,
        author: "$author.name",
      },
    },
    {
      $match: {
        slug: `${slug}`,
      },
    },
  ]);
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

module.exports = {
  getProducts,
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
