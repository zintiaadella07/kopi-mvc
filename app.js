const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const menuRoutes = require('./routes/menu.routes');

// View engine: EJS (berkas di folder /views)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware: berkas statis & parser form
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Router
app.use('/', menuRoutes);

// Fallback 404
app.use((req, res) => {
    res.status(404).render('pages/404', { pageTitle: '404 - Tidak Ditemukan' });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`[SERVER] Kedai Kopi aktif di http://localhost:${PORT}`);
});