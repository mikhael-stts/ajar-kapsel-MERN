# Description

-   Program sederhana ini untuk mengcover kuliah kapsel mengenai MERN, dimana tentu saja materinya hanya kulitnya saja, sebagai contoh saja

# Requirement yang harus diinstall

-   Node, NPM (https://nodejs.org/en/download/)
-   mongodb, mongosh dan mongodb compass (https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

# Extension VSCODE yang diajurkan

-   Node.js Extension Pack milik Wade Anderson
-   node-snippets milik Chris Noring
-   JavaScript (ES6) code snippets milik charalampos karypidis
-   Javascript Booster milik Stephan Burguchev
-   ES7+ React/Redux/React-Native snippet (lalu jalankan perintahnya di dokumentasinya)
-   HTML to JSX (kalau males banget)
-   sisanya silakan research sendiri yaa (misal extension vscode untuk mongodb / redux / dst...)

# Cara Pemakaian

-   git clone dari github / download as zip dan extract
-   npm install di masing-masing folder (frontend dan backend)

# FRONTEND (seandainya mau coba dari awal banget / create project kosongan)

## INSTALASI Project menggunakan Vite

-   npm create vite@latest contoh -- --template react
-   buka folder contoh tersebut dengan open with code
-   npm install
-   npm run dev
-   buka di browser dengan alamat yang tertera contoh http://localhost:5173/

## Library penunjang frontend

### UI Framework MUI

-   Install
    -   npm install @mui/material @emotion/react @emotion/styled
    -   npm install @fontsource/roboto
    -   npm install @mui/icons-material
    -   npm install @mui/x-data-grid

### State Management dengan redux

-   Jalankan
    -   npm install @reduxjs/toolkit
    -   npm install react-redux
    -   npm install --save-dev @redux-devtools/core
-   Installah Redux DevTools Addons untuk browser kesayangan kalian, misal Redux DevTools Addons for Firefox

### React Router

-   Jalankan
    -   npm install react-router-dom

### React Query

-   Jalankan
    -   npm instal qs
    -   npm instal axios
    -   npm instal react-query

## Setelah instalasi

-   Cobalah untuk mengikuti alur kodingan mulai dari index.html hingga komponen paling dalam

# BACKEND (seandainya mau coba dari awal banget / create project kosongan)

## Install Express

-   Install npm, node, dan express

## Install MongoDB

-   Install mongodb windows community edition dari https://www.mongodb.com/try/download/community
    -   Untuk cara gampang, install complete saja, lalu tinggal next-next sampai selesai (seharusnya dengan ini sekalian meng-install compass)
    -   Peringatan, jangan install mongo compass pada step ini, karena super lama (kemungkinan karena mereka download compass di background)

## Install MongoSH

-   Bila ingin menggunakan terminal untuk menggunakan MongoDB, bisa menggunakan mongosh
-   Install di https://www.mongodb.com/try/download/shell
-   Setelah install extract ke sebuah folder/lokasi yang kalian mau, lalu daftarkan ke environment variable laptop/komputer kalian

## MongoDB GUI

-   Ada banyak pilihan
    -   MongoDB Compass gratis, langsung dari developer, katanya tidak terlalu jago
    -   Robo3T / Studio 3T, katanya sih bagus, ada versi free dan berbayar
    -   NoSqlBooster support javascript, lebih jago, tapi bayar
-   Untuk kuliah ini kita akan pakai mongosh dan compass

## Library penunjang backend

-   npm i express
-   npm i mongoose
-   npm i cors
