const fs = require('node:fs');

const builder = require('./students/createStudent');



// потрібно в настройках проіндексувати щоб включити вктокомпліти
// всі функції асинїхронні


// зчивування файла
// fs.readFile('./text.txt', (err, data) => {
//     console.log(err, 'ERR');
//     console.log(data);
    // console.log(data.toString()); перетворення buffer в текст
// } )


// дописує до файлу якісь дані
// fs.appendFile('./text.txt', 'Hello \n', (err) => {
//     console.log('Err', err);
// })


// видаляє всі дані і записує нові
// fs.writeFile('./text.txt', 'Write File', (err) => {
//     console.log('ERR', err);
// })


// зчитує дані з одного файна і додає їх до іншого
// fs.readFile('./text.txt', (err, data) => {
//     fs.appendFile('./copy.txt', data, (err) => {
//         console.log(err);
//     })
// })


// Можна робити дерикторії, читати, файли видаляти, переіменовувати, переміщати і тд
// fs.mkdir('./students', (err) => {
//     console.log(err);
// })


// створив файл і записав в нього дані
// fs.appendFile('./students/data.json', JSON.stringify({name: 'Dima'}), (err) => {
//     console.log(err);
// })


// очищення файлу
// fs.truncate('./copy.txt', (err) => {
//     console.log(err);
// })


// виделення файлу
// fs.unlink('./copy.txt', (err) => {
//     console.log(err);
// })



// видалення директорії
//recursive:true видалає все рекурсивно, всі директорії з файлами
// fs.rmdir('./students', {recursive:true}, (err) => {
//     console.log(err);
// })


// переіменування
// fs.rename('./text.txt', './texts.txt', (err) => {
//     console.log(err);
// })

// переіменування та переміщення
// fs.rename('./users.js', './students/user.js', (err) => {
//     console.log(err);
// })


// копіювання з файлу в файл
// fs.copyFile('./users.json', './copy.json', (err) => {
//     console.log(err);
// })


// створення файлу з текстом
// fs.appendFile('jupi.txt', 'Hey man? your patsh is crash', (err) => {
//     console.log(err);
// })



// зчитування дерикторії(даних)
// зчитуємо дерикторію, вибираємо папку яку треба прочитатиБ отримуємо з неї помилку і файли,
//     потрібно лише файли, логаємо, отримуємо масив стрінгів(назви файлів)
// невідомо чи це файл чи папка, тому потрібен цикл
// далі читаємо цей файл, перетворюємо в стрінгу і виводимо
// fs.readdir('./students', (err, files) => {
//     console.log(files);
//
//     for(const fileName of files) {
//     fs.stat(`./students/${fileName}`, (err1, stats) => {
//         console.log(stats.isDirectory());
//
//         if (stats.isFile()) {
//             fs.readFile(`./students/${fileName}`, (err2, data) => {
//                 console.log(data.toString());
//             })
//         }
//     })
//     }
// })
//
//
//
//
// fs.readdir('./students', {withFileTypes: true}, (err, files) => {
//     console.log(files);
//
//     for (const file of files) {
//         console.log(file.isFile());
//
//
//     }
// })

// let student = builder.studentBuilder('Sonya', 16);
// console.log(student);
// console.log(student.name);