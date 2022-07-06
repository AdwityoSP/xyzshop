const message = require('../libs/message')

class DetailShoesValidator {
    validate(req) {
        if (!req.body.name) {
            return ({
                error_code: message.INVALID_PARAMS.CODE,
                message: message.INVALID_PARAMS.NAME_ERROR
            })
        }

        if (!req.body.color) {
            return ({
                error_code: message.INVALID_PARAMS.CODE,
                message: message.INVALID_PARAMS.NAME_ERROR
            })
        }

        return {};
    }
}

module.exports = DetailShoesValidator