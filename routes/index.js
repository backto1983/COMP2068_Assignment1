/**
 * File Name: index.js
 * Author Name: Henrique Oliveira
 * Website Name: Assignment 1 - Express Portfolio Website
 * File Description: view routing
 */

const express = require('express');
const viewsController = require('../controllers/viewsController')

// Using router to handle different browser requests
const router = express.Router();

/* GET home page. */
router.get('/', viewsController.homePage);
router.get('/about', viewsController.about);
router.get('/projects', viewsController.projects);
router.get('/services', viewsController.services);
router.get('/contact', viewsController.contact);

module.exports = router;