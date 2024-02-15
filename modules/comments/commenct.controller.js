const { commentModel } = require("./comment.model");

const createComment = async (payload) => {
  return await commentModel.create(payload);
};

const viewAllComments = async () => {
  return await commentModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "postedBy",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $lookup: {
        from: "blogs",
        localField: "postedTo",
        foreignField: "_id",
        as: "blog",
      },
    },
    {
      $unwind: {
        path: "$user",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $unwind: {
        path: "$blog",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 0,
        comment: 1,
        postedBy: "$user.name",
      },
    },
  ]);
};

const blogComments = async (payload) => {
  if (!payload) throw new Error("Please, specify the blog ");
  // console.log(payload);
  return commentModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "postedBy",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $lookup: {
        from: "blogs",
        localField: "postedTo",
        foreignField: "_id",
        as: "blog",
      },
    },
    {
      $unwind: {
        path: "$user",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $unwind: {
        path: "$blog",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 0,
        comment: 1,
        postedBy: 0,
        postedBy: "$user.name",
        postedTo: 0,
        postedTo: "$blog.slug",
      },
    },
    {
      $match: {
        postedTo: `${payload}`,
      },
    },
  ]);
};

module.exports = { createComment, viewAllComments, blogComments };
