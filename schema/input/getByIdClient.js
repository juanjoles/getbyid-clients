const {InputValidation} = require('ebased/schema/inputValidation');

class getByIdClient extends InputValidation {
    constructor(payload, meta) {
        super({
            source: meta.status,
            payload: payload,
            source: "CLIENT.GETBYID",
            specversion:"v1.0.0",
            schema:{
                dni:{type:String, required:true}
            },
        });
    }
}

module.exports = {getByIdClient}