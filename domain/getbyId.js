const {getByIdClient} = require('../schema/input/getByIdClient');
const {getClientById} = require('../service/getClientById');


module.exports = async (commandPayload, commandMeta) => {
    const client = new getByIdClient(commandPayload,commandMeta).get();
    const getClient = await getClientById(client);
    return {body: getClient};
};
