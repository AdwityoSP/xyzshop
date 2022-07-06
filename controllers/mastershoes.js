const MasterShoes = require('../models').MasterShoes;

module.exports = {
    list(req, res) {
        return MasterShoes.findAll()
            .then((masterShoes) => res.status(200).send(masterShoes))
            .catch((error) => {
                res.status(500).send(error)
            });
    },

    add(req, res) {
        return MasterShoes.create({
            name: req.body.name,
            price: req.body.price
        })
            .then((masterShoes) => res.status(200).send(masterShoes))
            .catch((error) => res.status(500).send(error))
    }
}