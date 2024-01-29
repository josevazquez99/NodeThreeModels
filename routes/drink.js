const express = require("express");
const router = express.Router();
const {getDrink,addDrink,deleteDrink,putDrink,getDrinkById} = require('../controllers/drink');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");
const { existsName } = require("../helpers/db-validators");

router
.route("/")
.get(getDrink)
.post([
    check('name','Name is required').not().isEmpty(),
    check('category','Category  is required').not().isEmpty(),
    check('price','Price is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('category','Category is string').isString(),
    check('price','Price is number').isInt(),
    check('name').custom(existsName),
    validationFields
],addDrink);

router
.route("/:id")
.get(getDrinkById)
.delete(deleteDrink)
.put([
    check('name','Name is required').not().isEmpty(),
    check('category','Category of disc is required').not().isEmpty(),
    check('price','Price is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('category','Category is string').isString(),
    check('price','Price is number').isInt(),
    check('name').custom(existsName),
    validationFields
],putDrink);  

module.exports=router;