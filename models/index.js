// import all models
const Post = require("./post");
const Category = require("./category");
const User = require("./user");

Category.hasMany(Post, { foreignKey: 'categoryId', as: 'posts' });
Post.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  Post,
  Category,
  User,
};
