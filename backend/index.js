const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
app.use(
    cors({
        origin: ["http://localhost:3001", "http://localhost:5173"],
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const movieRouter = require("./src/routes/movie");
const kategoriRouter = require("./src/routes/kategori");
app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/kategori", kategoriRouter);

const initApp = async () => {
    console.log("Connecting to mongo");
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/kuliah_iso_movie`);
        console.log("Berhasil connect");

        app.listen(port, () =>
            console.log(`Example app listening on port ${port}!`)
        );
    } catch (error) {
        console.error(error);
    }
};

initApp();
