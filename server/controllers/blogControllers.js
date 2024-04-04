const blogModel = require("../models/blogModel");

const blogsGet = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ hata: "Blogları getirirken hata:" + error.message });
  }
};
const blogGet = async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.findById(id);
  if (!blog) {
    return res
      .status(400)
      .json({ hata: "blog getirirken hata : blog bulunamadı" });
  }
  return res.status(200).json(blog);
};
const blogCreate = async (req, res) => {
  const { category, title, text, image, authorName, authorEmail, authorImage } =
    req.body;
  try {
    const newBlog = await blogModel.create({
      category,
      title,
      text,
      image,
      authorName,
      authorEmail,
      authorImage,
    });
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(400).json({ hata: "Blog oluşturma hatası:" + error.message });
  }
};
const blogDelete = async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.findOneAndDelete({ _id: id });
  if (!blog) {
    return res.status(404).json({ hata: "Bloğu silerken hata" });
  }
  res.status(200).json(blog);
};

const blogUpdate = async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );
  if (!blog) {
    res.status(404).json({ hata: "Notu güncellerken hata" });
  }
  res.status(200).json(blog);
};

module.exports = {
  blogCreate,
  blogsGet,
  blogGet,
  blogDelete,
  blogUpdate,
};
