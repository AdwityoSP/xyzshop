const express = require('express');
const router = express.Router();

const detailshoesController = require('../controllers').detailshoes;
const mastershoesController = require('../controllers').mastershoes;
const stockshoesController = require('../controllers').stockshoes;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'xyzshop' });
});

// DetailShoes
router.get('/detail', detailshoesController.list);
router.post('/detail/create', detailshoesController.add);

// MasterShoes
router.get('/brand', mastershoesController.list);
router.post('/brand/create', mastershoesController.add);

// StockShoes
router.get('/inventory', stockshoesController.list);
router.post('/inventory/create', stockshoesController.add);
router.get('/checkInventory/:id', stockshoesController.checkStock);
router.get('/checkList/:id', stockshoesController.getById);

module.exports = router; 