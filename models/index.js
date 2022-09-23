const User = require('./User');
const Vehicle = require('./Vehicle');
const Review = require('./Review');

Vehicle.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Vehicle.hasMany(Review, {
  foreignKey: 'vehiclId',
  onDelete: 'CASCADE',
});

Review.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = { User, Vehicle, Review };
