/**
 * https://mongoosejs.com/docs/api/query.html
 */

const { Movie, KategoriMovie } = require("../models");
const mongoose = require("mongoose");

const queryMovie = async (req, res) => {
    let { keyword, tahun_terbit_awal, tahun_terbit_akhir } = req.query;
    let result = Movie.find();
    // result = result.or([{ kategori_id: 1 }, { kategori_id: 2 }]);

    if (keyword !== undefined) {
        result = result.where("nama", new RegExp(keyword, "i"));
    }

    if (tahun_terbit_awal !== undefined) {
        // result = result.where({ tahun_terbit: { $gte: tahun_terbit_awal } });
        result = result.where("tahun_terbit").gte(Number(tahun_terbit_awal));
    }

    if (tahun_terbit_akhir !== undefined) {
        // result = result.where({ tahun_terbit: { $lte: tahun_terbit_akhir } });
        result = result.where("tahun_terbit").lte(Number(tahun_terbit_akhir));
    }

    result = await result
        .sort({ _id: 1, kategori_id: -1, tahun_terbit: -1 })
        .populate("kategori")
        .exec();

    if (result.length < 1) {
        return res.status(404).json({ message: "Movie Tidak Ditemukan" });
    } else {
        return res.status(200).json(result);
    }
};

const getSingleMovie = async (req, res) => {
    const movie = await Movie.findById(Number(req.params.id))
        .populate("kategori")
        .exec();
    console.log(movie);
    const result = movie;

    if (!result) {
        return res.status(404).json({ message: "Movie Tidak Ditemukan" });
    } else {
        return res.status(200).json(result);
    }
};

const postMovie = async (req, res) => {
    /**
     * untuk mencari maximum ID
     * db.movie.aggregate([{$group:{_id:"", "maxId":{$max:"$_id"}}}])
     *
     * https://www.mongodb.com/docs/manual/reference/operator/aggregation/max/
     *
     * Bila penasaran soal project
     * db.movie.aggregate([
    {$project:{nama:1,tahun_terbit:1,publisher:1,maxAiring:{$max:"$release.airing"}}}
])
     *
     * */
    const getMaxId = await Movie.aggregate()
        .group({ _id: null, maxId: { $max: "$_id" } })
        .project({ _id: 0, maxId: 1 })
        .exec();

    console.log(getMaxId);

    const id = Number(getMaxId[0].maxId) + 1;

    const body = req.body;
    console.log(body);
    body["_id"] = id;

    const result = await Movie.create(body);

    if (result) {
        return res.status(200).json({ msg: "Berhasil insert", id: id });
    } else {
        return res.status(500).json({ msg: "Gagal insert" });
    }
};

const putMovie = async (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const result = await Movie.findOneAndUpdate({ _id: id }, body, {
        new: true,
    });

    if (result) {
        return res.status(200).json({ msg: "Berhasil Update", result: result });
    } else {
        return res.status(500).json({ msg: "Gagal Update" });
    }
};

const deleteMovie = async (req, res) => {
    const id = Number(req.params.id);
    const result = await Movie.deleteOne({ _id: id });

    if (result) {
        return res.status(200).json({ msg: "Berhasil Delete", result: result });
    } else {
        return res.status(500).json({ msg: "Gagal Delete" });
    }
};

module.exports = {
    queryMovie,
    getSingleMovie,
    postMovie,
    putMovie,
    deleteMovie,
};
