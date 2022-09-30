/* eslint-disable no-undef */
const router = require('express').Router();
const { Review, User, Vehicle } = require('../models');
const withAuth = require('../utils/auth');

// View all vehicles upon logging in
router.get('/', withAuth, async (req, res) => {
  try {
    const vehicleData = await Vehicle.findAll();

    const vehicles = vehicleData.map((vehicle) => vehicle.get({ plain: true }));

    res.render('homepage', {
      vehicles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// View one specific vehicle
router.get('/vehicle/:id', withAuth, async (req, res) => {
  try {
    const vehicleData = await Vehicle.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Review,
          include: {
            model: User,
          },
        },
      ],
    });

    const vehicle = vehicleData.get({ plain: true });

    res.render('single-vehicle', {
      vehicle,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to the home page
  console.log(req.session);
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Get signup page
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to the home page
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
