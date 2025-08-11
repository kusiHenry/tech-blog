const sequelize = require('../config/connection');
const { User, Post, Category } = require('../models');
const userData = require('./users.json');
const postData = require('./posts.json');
const categoryData = require('./categories.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData);
  await User.bulkCreate(userData, { individualHooks: true });
  await Post.bulkCreate(postData);

  process.exit(0);
};

seedDatabase();
