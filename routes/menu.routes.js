const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');

router.get('/', menuController.getBeranda);
router.get('/tentang', menuController.getTentang);
router.get('/katalog', menuController.getKatalog);
router.get('/katalog/tambah', menuController.getFormTambah);
router.post('/katalog/tambah', menuController.postTambah);

module.exports = router;