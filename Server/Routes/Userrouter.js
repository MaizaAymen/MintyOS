const express = require('express');
const router = require('express').Router();
const userController = require('../Controller/UserController');


router.post('/register',userController.register);
router.post('/login',userController.login);
module.exports = router;