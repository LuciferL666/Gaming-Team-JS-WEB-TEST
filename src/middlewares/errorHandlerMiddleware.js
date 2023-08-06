exports.errorHandler = (err, req, res) =>{ //23.2
    res.render('/404', { error: err.message }) //23.2 //24.3
}