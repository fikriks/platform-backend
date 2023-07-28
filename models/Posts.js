const mongoose = require("mongoose");
const URLSlugs = require('mongoose-slug-updater');

mongoose.plugin(URLSlugs);

const postsScheme = new mongoose.Schema({
  thumbnail: {
    type: String,
    required: true,
    require: [true, 'Thumbnail harus diiisi']
  },
  title: {
    type: String,
    required: true,
    require: [true, 'Judul harus diiisi']
  },
  content: {
    type: String,
    required: true,
    require: [true, 'Konten harus diiisi']
  },
  status: {
    type: String,
    required: true,
    enum: ['publish','draft'],
    default: 'publish',
    require: [true, 'Status harus diiisi']
  },
  writer: {
    type: String,
    required: true,
    require: [true, 'Penulis harus diiisi']
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
  },
  tagId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tags'
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    require: [true, 'Harus login terlebih dahulu!']
  },
  slug: {
    type: String,
    slug: "title",
    unique: true,
  },
},
{
    timestamps: true
});

module.exports = mongoose.model("Posts", postsScheme);