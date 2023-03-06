/**
 * npm install @mui/x-data-grid
 */

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Form, useLoaderData } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllMovie, getAllKategori } from "../../api/movieApi";

const handleDeleteMovie = (event) => {};

const MovieData = (props) => {
    const loaderData = useLoaderData();
    return (
        <div style={{ height: 631, width: "100%" }}>
            <Form method="delete" action="/admin/movie"></Form>
            <DataGrid
                rows={loaderData.rows}
                columns={loaderData.columns}
                pageSize={10}
                rowsPerPageOptions={[10, 25, 50, 100]}
                // checkboxSelection
            />
        </div>
    );
};

export default MovieData;

export const loader = async () => {
    const query = await getAllMovie();
    let result = {};
    result.columns = [
        { field: "id", headerName: "ID", type: "number" },
        {
            field: "img",
            headerName: "Foto Movie",
            flex: 1,
            renderCell: (params) => {
                return (
                    <img
                        style={{ objectFit: "contain", height: "100px" }}
                        src={params.row.img}
                        alt={params.row.nama}
                    />
                );
            },
        },
        { field: "nama", headerName: "Nama Movie", flex: 1 },
        { field: "tahun_terbit", headerName: "Tahun Terbit Movie", flex: 1 },
        { field: "publisher", headerName: "Publisher Movie", flex: 1 },
        {
            field: "kategori",
            headerName: "Kategori Movie",
            flex: 1,
            valueGetter: (params) => {
                return params.row?.kategori?.nama;
            },
        },
        {
            field: "release",
            headerName: "Release Details",
            flex: 1,
            valueGetter: (params) => {
                if (params.row.release) {
                    return params.row.release.reduce((hasil, item) => {
                        return hasil + item.tipe + " (" + item.airing + "), ";
                    }, "");
                }
            },
        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: (params) => {
                return (
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={handleDeleteMovie}
                        data-id={params.id}
                    >
                        Hapus
                    </Button>
                );
            },
        },
    ];

    result.rows = query;
    result.kategoriList = await getAllKategori();
    return result;
};
