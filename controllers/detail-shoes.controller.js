const DetailShoesValidator = require('../validators/detail-shoes.validator');
const DetailShoes = require('../models').DetailShoes;

// module.exports = {
//     list(req, res) {
//         return DetailShoes.findAll()
//             .then((detailShoes) => res.status(200).send(detailShoes))
//             .catch((error) => {
//                 res.status(500).send(error)
//             });
//     },

//     add(req, res) {
//         console.log(req)
//         if (req.body.name.length == 0) {
//             return res.status(400).send(
//                 {
//                     error_code: "400",
//                     message: "Name must be filled"
//                 }
//             )
//         }

//         return DetailShoes.create({
//             name: req.body.name,
//             color: req.body.color,
//             size: req.body.size
//         })
//             .then((detailShoes) => res.status(200).send(detailShoes))
//             .catch((error) => res.status(500).send(error))
//     }
// }

class DetailShoesController {
    static async list(req, res) {
        try {
            const validator = new DetailShoesValidator();
            const error_message = validator.validate(req);

            if (Object.keys(error_message).lenght !== 0) {
                return res.status(400).send(error_message)
            }

            const result = await DetailShoes.create({
                name: req.body.name,
                color: req.body.color,
                size: req.body.size
            });
            return res.status(201).send({ data: result });
        }
        catch (err) {
            return res.status(err.status || 500).json(
                {
                    error_code: err.status || "500",
                    message: err.message || 'Internal server error'
                }
            )
        }
    }

    static async add(req, res) {
        try {

        } catch {

        }

    }
}

module.exports = DetailShoesController