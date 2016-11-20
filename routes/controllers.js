var testController = require('../controllers/test');
module.exports = function (app) {
    testController.registerRoutes(app);
};