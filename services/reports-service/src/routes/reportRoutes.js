const express = require('express');
const router = express.Router();
const rateLimitMiddleware = require("../middlewares/ratelimit.js");
const reportController = require('../controllers/ReportController.js');

router.get('/getReports/:reviewId', reportController.getReports);
router.post('/postReport', rateLimitMiddleware, reportController.postReport);

module.exports = router;