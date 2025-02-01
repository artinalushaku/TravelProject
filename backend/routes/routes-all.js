const express = require('express');
const router = express.Router();

const { 
    registerUser, registerUserForm, loginUser, getUsers, deleteUser, updateUser, verifyRole, countUsers 
  } = require('../controllers/userController');

  const { getLogs
  } = require('../controllers/logController');

  const { 
    getAllTravelPlans, addTravelPlan, deleteTravelPlan, updateTravelPlan 
  } = require('../controllers/travelController');
  
  const { 
    getAllRoomPrices, addRoomPrice, deleteRoomPrice, updateRoomPrice 
  } = require('../controllers/roomPricesController');

  const { 
    getAllDubaiPrices, addDubaiPrice, deleteDubaiPrice, updateDubaiPrice 
  } = require('../controllers/dubaiPricesController');

 
  const { 
    getAllMaqedoniPrices, addMaqedoniPrices, deleteMaqedoniPrices, updateMaqedoniPrices 
  } = require('../controllers/maqedoniPricesController');

  const { 
    getAllImages, addImage, deleteImage, updateImage 
  } = require('../controllers/sliderHomeController');

  const { 
    getAllHotels, addCard, deleteHotel, updateCard 
  } = require('../controllers/stambollCardsController');
  const { 
    getAllAranzhmanet, updateAranzhmani, deleteAranzhmanet, addAranzhmanet
  } = require('../controllers/aranzhmanetController');
  const { 
    getAllAirports, addAirports, deleteAirport, updateAirport
  } = require('../controllers/airportsController');




















  // User routes
  
const { isAuthenticated } = require('../middleware/authMiddleware');

router.post('/register',  registerUser);
router.post('/registerForm',  registerUserForm);

router.post('/AddUser', isAuthenticated, registerUser);

router.post('/login', (req, res, next) => loginUser(req, res, next));
router.get('/users-get', isAuthenticated, getUsers);
router.delete('/users/:id', isAuthenticated, deleteUser);
router.put('/users/:id', isAuthenticated, updateUser);
router.get('/users-count', isAuthenticated, countUsers);

router.get('/logs', getLogs); // Fetch all logs


module.exports = router;