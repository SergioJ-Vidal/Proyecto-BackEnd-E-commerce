const express = require('express');

const router = express.Router();

const CategoryController = require('../controllers/CategoryController');
const { authentication } = require('../middleware/authentication');


router.post('/create', CategoryController.create)
router.put('/update/:id', CategoryController.update)
// // router.get('/', ProductController.getAll)

// router.delete('/delete/:id', ProductController.delete)

// // router.post('/createProduct', ProductController.createProduct)

module.exports = router;