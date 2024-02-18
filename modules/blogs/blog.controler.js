const BlogModel = require("./blog.model");
const { generateSlug } = require("../../utils/slug");
const { default: slugify } = require("slugify");

const create = (payload) => {
  payload.slug = generateSlug(payload.title);
  return BlogModel.create(payload);
};

const getPublishedBlogs = () => {
  return BlogModel.find({ status: "published" });
};

const getAll = async (search, page = 1, limit = 3) => {
  // const { title, author } = search;
  const querry = [];
  console.log(search.author);
  querry.push({
    $sort: {
      createAt: 1,
    },
  });

  querry.push(
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "BlogAuthor",
      },
    },
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "postedTo",
        as: "BlogComment",
      },
    },
    {
      $unwind: {
        path: "$BlogAuthor",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        author: "$BlogAuthor.name",
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
        author: 1,
        status: 1,
      },
    }
  );

  if (search?.title) {
    querry.push({
      $match: {
        title: new RegExp(`${search.title}`, "gi"),
      },
    });
  }
  if (search?.author) {
    querry.push({
      $match: {
        author: new RegExp(`${search.author}`, "gi"),
      },
    });
  }

  querry.push({
    $facet: {
      metadata: [
        {
          $count: "total",
        },
      ],
      data: [
        {
          $skip: (+page - 1) * +limit,
        },
        {
          $limit: +limit,
        },
      ],
    },
  });

  // return await BlogModel.aggregate(querry);

  const result = await BlogModel.aggregate(querry);
  // return result;
  return {
    data: result[0].data,
    total: result[0].metadata[0].total,
    page: page,
    limit: limit,
  };
  // console.log(data]);
  // const startIndex = (page - 1) * limit;
  // const endIndex = startIndex + limit;

  // const data = blogs.slice(startIndex, endIndex);
  // return {
  //   data: data[0],
  //   total: data[0].metadata[0].total,

  //   page: Number(page),
  //   limit: Number(limit),
  // };
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
  getPublishedBlogs,
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
