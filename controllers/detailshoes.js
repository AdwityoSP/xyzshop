const DetailShoes = require('../models').DetailShoes;

module.exports = {
    list(req, res) {
        return DetailShoes.findAll()
            .then((detailShoes) => res.status(200).send(detailShoes))
            .catch((error) => {
                res.status(500).send(error)
            });
    },

    add(req, res) {
        return DetailShoes.create({
            id: req.body.id,
            name: req.body.name,
            color: req.body.color,
            size: req.body.size
        })
            .then((detailShoes) => res.status(200).send(detailShoes))
            .catch((error) => res.status(500).send(error))
    }
}