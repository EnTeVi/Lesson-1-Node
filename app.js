// const fs = require('fs');
const fs = require('fs/promises');
const path = require('path');

// fs.readdir('./boys', {withFileTypes: true}, (err, files) => {
//     console.log(files);
//
//     for (const file of files) {
//         console.log(file.isFile());
//
//         if (file.age === 19) {
//             console.log(file.name);
//         }
//     }
// })

// fs.readdir('./boys', (err, files) => {
//     console.log(files);
//
//     for(const fileName of files) {
//         fs.stat(`./boys/${fileName}`, (err1, stats) => {
//             console.log(stats.isDirectory());
//
//             if (stats.isFile()) {
//                 fs.readFile(`./boys/${fileName}`, (err2, data) => {
//                     console.log(data.toString());
//                     if (data.gender === 'female') {
//                         fs.copyFile(`./boys/${fileName}`, './girls/sophia.json', (err4) => {
//                             console.log(err4);
//                             fs.unlink(`./boys/${fileName}`, (err5) => {
//                                 console.log(err5);
//                             })
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })




const sorting = async (readFolder, writeFolder, gender) => {
    const folderPath = path.join(__dirname, readFolder);

    const files = await fs.readdir(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const data = await fs.readFile(filePath);
        const user = JSON.parse(data);

        if (user.gender === gender) {
            await fs.rename(filePath, path.join(__dirname, writeFolder, file));
        }
    }
}


sorting('boys', 'girls', 'female');
sorting('girls', 'boys', 'male');