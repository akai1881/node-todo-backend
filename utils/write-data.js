const fs = require('fs');

const writeDataFile = (path, data, cb) => {
    fs.writeFile(path, JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            console.log(err);
            throw err;
        }

        if (typeof cb === 'function') {
            cb();
        }
    });
};

module.exports = writeDataFile;
