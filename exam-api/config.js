const path = require("path");

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, "public/uploads"),
    db: {
        name: "exam-13",
        url: 'mongodb://localhost',
    },
};