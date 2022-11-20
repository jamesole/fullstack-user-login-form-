const express = require('express');
const router = express.Router();
const {findUsers, createUser, deleteUser} = require('../controller/userRoutes');


router.route('/').get(findUsers);
router.route('/').post(createUser);
router.route('/:id').delete(deleteUser);

module.exports = router;
