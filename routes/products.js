const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/ProductController');
const { authentication } = require('../middleware/authentication');


router.post('/create', ProductController.create)
router.put('/update/:id', ProductController.update)
// router.get('/', ProductController.getAll)
router.delete('/delete/:id', ProductController.delete)
router.get('/getAll', ProductController.getProductCategories)
router.get('/findbyId/:id', ProductController.getById)
router.get('/findbyName/:name', ProductController.getOneByName)
router.get('/findbyPrice/:price', ProductController.getOneByPrice)
router.get('/orderbyPrice', ProductController.orderByPrice)
module.exports = router;