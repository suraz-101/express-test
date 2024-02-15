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
        postedTo: "$blog.slug",
      },
    },
  ]);
};

module.exports = { createComment, viewAllComments };
