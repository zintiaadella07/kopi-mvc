const Menu = require('../models/menu.model');

const JENIS = ['Espresso Based', 'Manual Brew', 'Signature', 'Non-Kopi'];

exports.getBeranda = (req, res) => {
    const semuaMenu = Menu.semua();
    res.render('pages/home', {
        pageTitle: 'Beranda',
        userName: 'Pecinta Kopi',
        totalMenu: semuaMenu.length,
        rekomendasi: semuaMenu.slice(0, 3)
    });
};

exports.getTentang = (req, res) => {
    res.render('pages/about', { pageTitle: 'Tentang Kami' });
};

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', { pageTitle: 'Katalog Menu', daftarMenu: Menu.semua() });
};

exports.getFormTambah = (req, res) => {
    res.render('pages/tambah', { pageTitle: 'Tambah Menu', jenisList: JENIS });
};

exports.postTambah = (req, res) => {
    // Cetak payload ke konsol terminal
    console.log('\n[BACK-END] Menerima Payload POST:');
    console.log(req.body);

    Menu.tambah({
        nama: req.body.nama,
        harga: Number(req.body.harga),
        jenis: req.body.jenis,
        deskripsi: req.body.deskripsi
    });

    // Post-Redirect-Get (PRG)
    res.redirect('/katalog');
};