const express      = require('express');
const router       = express();
const cookieSession = require('cookie-session');

router.use(cookieSession({
  name: 'UpSwing',
  keys: ['upswing is the way and key']
}));

// Endpoint receives request from the frontend and runs the req.session in order to delete cookie and logout user
router.post('/', (req, res) => {
    console.log('here...')
	req.session = null;
    console.log('almost there...')
    res.status(200).send('Sucessfully logged out!');
});

module.exports = router;