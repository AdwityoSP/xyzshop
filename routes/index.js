const express = require('express');
const router = express.Router();

const detailshoesController = require('../controllers').detailshoes;
const mastershoesController = require('../controllers').mastershoes;
const stockshoesController = require('../controllers').stockshoes;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'xyzshop' });
});

// DetailShoes
router.get('/detailshoes', detailshoesController.list);
router.post('/detailshoes/create', detailshoesController.add);

// MasterShoes
router.get('/mastershoes', mastershoesController.list);
router.post('/mastershoes/create', mastershoesController.add);

// StockShoes
router.get('/stockshoes', stockshoesController.list);
router.get('/checkstock/:id', stockshoesController.checkStock);
router.get('/checkshoes/:id', stockshoesController.getById);

module.exports = router; 