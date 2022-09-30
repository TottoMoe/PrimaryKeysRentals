const User = require('./User');
const Vehicle = require('./Vehicle');
const Review = require('./Review');

Vehicle.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Vehicle.hasMany(Review, {
  foreignKey: 'vehicle_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(Vehicle, {
  foreignKey: 'vehicle_id',
  onDelete: 'CASCADE',
});

User.hasMany(Vehicle, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Vehicle, Review };
