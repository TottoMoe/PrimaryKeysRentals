const sequelize = require("../config/config");
const userData = require("./userData.json");
const vehicleData = require("./vehicleData.json");
const reviewData = require("./reviewData.json");
const { User, Vehicle, Review } = require("../models");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, { individualHooks: true });
  await Vehicle.bulkCreate(vehicleData);
  await Review.bulkCreate(reviewData);

  process.exit(0);
};

seedDatabase();
