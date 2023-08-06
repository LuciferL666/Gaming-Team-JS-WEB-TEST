const {getErrorMessage} = require('../utils/errorHelpers')

exports.errorHandler = (err, req, res) =>{ //23.2
    res.render('/404', { error: getErrorMessage(err) }) //23.2 //24.4
};