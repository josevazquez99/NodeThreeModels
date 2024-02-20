const express = require("express");
const router = express.Router();
const {getFruit,addFruit,deleteFruit,putFruit,getFruitById} = require('../controllers/fruit');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");
//const { existsEmail } = require("../helpers/db-validators");
router
.route("/")
.get(getFruit)
.post([
    check('name','Name is required').not().isEmpty(),
    check('flavor','flavor is required').not().isEmpty(),
    check('weight','weight is required').not().isEmpty(),
    check('price','price is required').not().isEmpty(),
    check('name','name is string').isString(),
    check('flavor','flavor is string').isString(),
    check('weight','weight is string').isString(),
    check('price','Price is number').isInt(),
    //check('email').custom(existsEmail),
    validationFields
],addFruit);

router
.route("/:id")
.delete(deleteFruit)
.put([
    check('name','Name is required').not().isEmpty(),
    check('flavor','flavor is required').not().isEmpty(),
    check('weight','weight is required').not().isEmpty(),
    check('price','price is required').not().isEmpty(),
    check('name','name is string').isString(),
    check('flavor','flavor is string').isString(),
    check('weight','weight is string').isString(),
    check('Price','Price is number').isInt(),
    validationFields
],putFruit) 
.get(getFruitById); 

module.exports=router;