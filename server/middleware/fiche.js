const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/bulletins/');
    },
    
    filename: function (req, file, callback) {
        console.log(file)
        callback(null, 'labo' + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({
    storage: storage,
});

module.exports = upload.single('fiche')