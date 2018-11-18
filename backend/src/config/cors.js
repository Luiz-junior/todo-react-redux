module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');

    next();
};