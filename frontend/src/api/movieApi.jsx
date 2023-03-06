import axios from "axios";
import qs from "qs";

const movieApi = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});

export const getAllKategori = async () => {
    const response = await movieApi.get("/kategori");
    return response.data;
};

export const getAllMovie = async () => {
    const response = await movieApi.get("/movie");
    return response.data;
};

export const postMovie = async (data) => {
    // kalau mau pakai JSON AJA
    // const response = await movieApi.post("/movie", data);

    // kalau mau pakai x-www-form-encoded
    const response = await movieApi.post("/movie", qs.stringify(data), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    return response;
};
