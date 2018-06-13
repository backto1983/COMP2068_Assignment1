const express = require('express');
const viewsController = require('../controllers/viewsController')

const router = express.Router();

/* GET home page. */
router.get('/', viewsController.homePage);
router.get('/about', viewsController.about);
router.get('/projects', viewsController.projects);
router.get('/services', viewsController.services);
router.get('/contact', viewsController.contact);

module.exports = router;
