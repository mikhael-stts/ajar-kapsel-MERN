# Install Express

-   Install npm, node, dan express

# Install MongoDB

-   Install mongodb windows community edition dari https://www.mongodb.com/try/download/community
    -   Untuk cara gampang, install complete saja, lalu tinggal next-next sampai selesai (seharusnya dengan ini sekalian meng-install compass)
    -   Peringatan, jangan install mongo compass pada step ini, karena super lama (kemungkinan karena mereka download compass di background)

# Install MongoSH

-   Bila ingin menggunakan terminal untuk menggunakan MongoDB, bisa menggunakan mongosh
-   Install di https://www.mongodb.com/try/download/shell
-   Setelah install extract ke sebuah folder/lokasi yang kalian mau, lalu daftarkan ke environment variable laptop/komputer kalian

# MongoDB GUI

-   Ada banyak pilihan
    -   MongoDB Compass gratis, langsung dari developer, katanya tidak terlalu jago
    -   Robo3T / Studio 3T, katanya sih bagus, ada versi free dan berbayar
    -   NoSqlBooster support javascript, lebih jago, tapi bayar
-   Untuk kuliah ini kita akan pakai mongosh dan compass

# Cheat Sheet

-   https://www.mongodb.com/developer/products/mongodb/cheat-sheet/

# Catatan Basic

-   show dbs
-   use kuliah_iso_movie
-   show collections
-   db.dropDatabase("kuliah_iso_movie")
-   Insert
    -   db.kategori_movie.insertOne({\_id:"1",nama:"Action"})
    -   db.kategori_movie.insert([{_id:"2",nama:"Romance"},{_id:"3",nama:"Comedy"}])
    -   db.movie.insert([
        {_id:1,nama:"Harry Potter", tahun_terbit: "1991"}
        ])
    -   kategori_id = db.kategori_movie.findOne({nama:"Romance"}).\_id
    -   db.movie.insert([
        {_id:2,nama:"Percy Jackson", tahun_terbit:"1992", kategori:kategori_id}
        ])
    -   db.movie.findOne({\_id:2},{nama:1, tahun_terbit:1, \_id:0})
    -   db.movie.findOne({\_id:2},{nama:0})
    -   db.movie.find().sort({tahun_terbit:-1, nama:1}).skip(1).limit(10)
    -   db.movie.find({tahun_terbit: {$ne:1948,$ne:1965}}).sort({tahun_terbit:1})
    -   db.movie.find({nama:{$eq:"Pyaar Impossible"}, tahun_terbit: 1985})
    -   db.movie.find({nama:/of/, tahun_terbit: {$gt:2000,$lte:2002}})
    -   db.movie.find({$or:[{nama:/Year/},{tahun_terbit:{$gt:1990,$lte:1991}}]}).sort({tahun_terbit:1})
    -   db.movie.countDocuments({$or:[{nama:/Year/},{tahun_terbit:{$gt:1990,$lte:1991}}]})
-   exit

# Catatan Grouping

-   db.movie.aggregate([{$group:{_id:"", "maxId":{$max:"$_id"}}}])
-   db.movie.aggregate([
    {$project:{nama:1,tahun_terbit:1,publisher:1,maxAiring:{$max:"$release.airing"}}}
    ])

# Install Mongoose

-   npm install mongoose --save

# Fakta mengejutkan ttng const

-   https://usefulangle.com/post/342/javascript-const-object-change-property
