const { KategoriMovie } = require("../models");

const queryKategori = async (req, res) => {
    let result = await KategoriMovie.find().exec();
    if (result.length < 1) {
        return res.status(404).json({ message: "Kategori Tidak Ditemukan" });
    } else {
        return res.status(200).json(result);
    }
};

module.exports = {
    queryKategori,
};
