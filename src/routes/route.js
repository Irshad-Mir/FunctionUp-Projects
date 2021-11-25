const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")


router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)


module.exports = router;