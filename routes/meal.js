const express = require("express");
const router = express.Router();
const {getMeal,addMeal,deleteMeal,putMeal} = require('../controllers/meal');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");

router
.route("/")
.get(getSong)
.post([
    check('name','Name is required').not().isEmpty(),
    check('price','price is required').not().isEmpty(),
    check('flavor','flavor is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('price','price is number').isInt(),
    check('flavor','flavor is string').isString(),
    validationFields
],addMeal);

router
.route("/:id")
.delete(deleteMeal)
.put(putMeal);  

module.exports=router;