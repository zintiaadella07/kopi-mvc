// Model sederhana: data disimpan di memori (array of object)
const daftarMenu = [
    { id: 1, nama: 'Espresso Double', harga: 22000, jenis: 'Espresso Based', deskripsi: 'Dua shot espresso pekat dengan crema tebal.' },
    { id: 2, nama: 'Kopi Susu Gula Aren', harga: 25000, jenis: 'Signature', deskripsi: 'Espresso, susu segar, dan gula aren cair.' },
    { id: 3, nama: 'V60 Kintamani', harga: 30000, jenis: 'Manual Brew', deskripsi: 'Biji Arabika Kintamani Bali, aroma buah dan floral.' },
    { id: 4, nama: 'Cappuccino', harga: 27000, jenis: 'Espresso Based', deskripsi: 'Espresso dengan susu steam dan busa lembut.' },
    { id: 5, nama: 'Cold Brew Citrus', harga: 32000, jenis: 'Signature', deskripsi: 'Seduh dingin 18 jam dengan irisan jeruk.' },
    { id: 6, nama: 'Matcha Latte', harga: 28000, jenis: 'Non-Kopi', deskripsi: 'Matcha Jepang dengan susu oat.' }
];

exports.semua = () => daftarMenu;

exports.tambah = ({ nama, harga, jenis, deskripsi }) => {
    const idBaru = daftarMenu.length ? daftarMenu[daftarMenu.length - 1].id + 1 : 1;
    daftarMenu.push({ id: idBaru, nama, harga, jenis, deskripsi });
};