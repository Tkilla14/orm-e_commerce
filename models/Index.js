// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships between models

// A Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', 
});

// A Product belongs to many Tags through the ProductTag model
Product.belongsToMany(Tag, {
  through: ProductTag, 
  foreignKey: 'product_id',
});

// A Tag belongs to many Products through the ProductTag model
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id', 
});

// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', 
});

// Export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};