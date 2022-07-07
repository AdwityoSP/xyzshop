const detailShoes = require('./detail-shoes.controller');

const MasterShoes = require('../models').MasterShoes;
const DetailShoes = require('../models').DetailShoes;
const StockShoes = require('../models').StockShoes;

module.exports = {
    list(req, res) {
        return StockShoes.findAll()
            .then((stockShoes) => res.status(200).send(stockShoes))
            .catch((error) => {
                res.status(500).send(error)
            });
    },

    add(req, res) {
        if (req.body.stock.length == 0) {
            return res.status(400).send(
                {
                    error_code: "400",
                    message: "Stock must be filled"
                }
            )
        }
        return StockShoes.create({
            masterId: req.body.masterId,
            detailId: req.body.detailId,
            stock: req.body.stock
        })
            .then((stockShoes) => res.status(200).send(stockShoes))
            .catch((error) => res.status(500).send(error))
    },

    checkStock(req, res) {
        return StockShoes.findByPk(req.params.id)
            .then((stock) => {
                if (!stock == 0) {
                    return res.status(200).send({
                        message: 'Item Availabel'
                    });
                }
                return res.status(500).send({
                    message: 'Item Unavailabel'
                })
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    },

    getById(req, res) {
        return StockShoes.findByPk(req.params.id, {
            include: [
                {
                    model: MasterShoes,
                    as: 'mastershoes'
                },
                {
                    model: DetailShoes,
                    as: 'detailshoes'
                }
            ]
        })
        .then((stockShoes) => {
            if (!stockShoes) {
                return res.status(404).send({
                    message: 'Model Not Found'
                })
            }
            // if (detailShoes) {
            //     return res.status(200).send({
            //         message: 'Detail Ketemu'
            //     })
            // }
            return res.status(200).send(stockShoes);
        })
        .catch((error) => {
            res.status(400).send(error)
        })
    }
}