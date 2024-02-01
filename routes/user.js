const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validationFields } = require("../middlewares/validate-fields");
const { createUser, deactivateUser } = require('../controllers/user');

router
  .route("/")
  .post([
    check('name', 'name is required').not().isEmpty(),
    check('login', 'login is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('password', 'password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character')
      .isLength({ min: 8 })
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    check('rol', 'rol is required').not().isEmpty(),
    validationFields
  ], createUser);

router
  .route("/:id")
  .delete(deactivateUser);

module.exports = router;
