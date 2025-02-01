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

  const { 
    getAllShtetet, addShtetet, deleteShtetet, updateShteti
  } = require('../controllers/shtetetController'); 

  const { 
    getAllQytetet, addQytetet, deleteQytetet, updateQytetet
  } = require('../controllers/qytetetController');

 





 
  
  
  const { abonohu, reserveOffer
  } = require('../controllers/nodeMailerController');
  
  
  const { sendContactEmail
  } = require('../controllers/nodeKontaktForm');
  
  router.post('/reserveOffer', reserveOffer);
  router.post('/abonohu', abonohu);
  
  router.post('/contact', sendContactEmail);














  // User routes
  
const { isAuthenticated } = require('../middleware/authMiddleware');

// User routes
router.post('/register',  registerUser);
router.post('/registerForm',  registerUserForm);

router.post('/AddUser', isAuthenticated, registerUser);

router.post('/login', (req, res, next) => loginUser(req, res, next));
router.get('/users-get', isAuthenticated, getUsers);
router.delete('/users/:id', isAuthenticated, deleteUser);
router.put('/users/:id', isAuthenticated, updateUser);
router.get('/users-count', isAuthenticated, countUsers);

router.get('/logs', getLogs); // Fetch all logs


// Travel plans routes
router.post('/travel-plans', isAuthenticated, addTravelPlan);
router.get('/travel-plans', getAllTravelPlans);
router.delete('/travel-plans/:id', isAuthenticated, deleteTravelPlan);
router.put('/travel-plans/:id', isAuthenticated, updateTravelPlan);

// Images routes
router.post('/add-images', addImage);
router.get('/images', getAllImages);
router.delete('/images-delete/:id', isAuthenticated, deleteImage);
router.put('/images-update/:id', isAuthenticated, updateImage);

// stamboll Cards routes
router.post('/add-cards', isAuthenticated, addCard);
router.get('/cards', getAllHotels);
router.delete('/cards-delete/:id', isAuthenticated, deleteHotel);
router.put('/cards-update/:id', isAuthenticated, updateCard);

// Room prices routes
router.post('/add-room-price', isAuthenticated, addRoomPrice);
router.get('/room-price', getAllRoomPrices);
router.delete('/room-prices-delete/:id', isAuthenticated, deleteRoomPrice);
router.put('/room-prices-update/:id', isAuthenticated, updateRoomPrice);

// Dubai prices routes
router.post('/add-dubai-price', isAuthenticated, addDubaiPrice);
router.get('/dubai-price', getAllDubaiPrices);
router.delete('/dubai-prices-delete/:id', isAuthenticated, deleteDubaiPrice);
router.put('/dubai-prices-update/:id', isAuthenticated, updateDubaiPrice);
router.post('/add-dubai-price', isAuthenticated, addDubaiPrice);

//Maqedoni prices routes
router.post('/add-maqedoni-price', isAuthenticated, addMaqedoniPrices);
router.get('/maqedoni-price', getAllMaqedoniPrices);
router.delete('/maqedoni-prices-delete/:id', isAuthenticated, deleteMaqedoniPrices);
router.put('/maqedoni-prices-update/:id', isAuthenticated, updateMaqedoniPrices);
router.post('/add-maqedoni-price', isAuthenticated, addMaqedoniPrices);

router.post('/add-Aranzhmani', addAranzhmanet);
router.delete('/Aranzhmani-delete/:id', isAuthenticated, deleteAranzhmanet);
router.put('/Aranzhmani-update/:id', isAuthenticated, updateAranzhmani);
router.get('/aranzhmanet', getAllAranzhmanet);

router.post('/add-airports', addAirports);
router.delete('/airports-delete/:id', isAuthenticated, deleteAirport);
router.put('/airports-update/:id', isAuthenticated, updateAirport);
router.get('/airports', getAllAirports);

router.post('/add-shtetin', addShtetet);
router.delete('/shtetin-delete/:id', isAuthenticated, deleteShtetet);
router.put('/shtetin-update/:id', isAuthenticated, updateShteti);
router.get('/shtetet', getAllShtetet);

router.post('/add-qytetet', addQytetet);
router.delete('/qytetet-delete/:id', isAuthenticated, deleteQytetet);
router.put('/qytetet-update/:id', isAuthenticated, updateQytetet);
router.get('/qytetet', getAllQytetet);


module.exports = router;