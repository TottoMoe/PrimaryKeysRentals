const router = require('express').Router();
const { Vehicle } = require('../../models');

//GET all vehicle for homepage
router.get('/', async (req, res) => {
  try {
    const dbVehicleData = await Vehicle.findAll();
    const vehicles = dbVehicleData.map((vehicle) =>
      vehicle.get({ plain: true })
    );
    res.json(vehicles);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one vehicle
router.get('/vehicle/:id', async (req, res) => {
  try {
    const dbVehicleData = await Vehicle.findByPk(req.params.id);

    const vehicles = dbVehicleData.map((vehicle) =>
      vehicle.get({ plain: true })
    );
    res.json(vehicles);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST one vehicle
router.post('/', async (req, res) => {
  try {
    const newVehicle = await Post.create({
      vehicle: req.body.title,
      module: req.body.module,
      year: req.body.year,
      price: req.body.price,
      filename: req.body.filename,
      user_id: req.session.user_id,
    });
    console.log('new vehicle', newVehicle);
    res.status(200).json(newVehicle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const vehicleData = await Vehicle.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (vehicleData) {
      res.status(200).json(vehicleData);
    } else {
      res.status(404).json({ message: 'No vehicles found with this id' });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const vehicleData = await Vehicle.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (vehicleData) {
      res.status(200).json(vehicleData);
    } else {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
