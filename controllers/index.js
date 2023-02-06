const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// line 6-7 (put in by dev RH) requires the calander route
const routes = require('./calRoute');
// router.use('/', routes);

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
module.exports = router;
