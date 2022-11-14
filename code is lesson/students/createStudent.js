function studentBuilder(name, age) {
    return {
        name,
        age,
        sleep: () => {
            console.log('No is student')
        }
    }
}

// як тільки експортуєься файл він виконується повністю

// перший спосіб експорту
module.exports = {
    studentBuilder
}

// другий
// module.exports.Xname = studentBuilder;
// module.exports.lesson = 1;
//
// третій
// module.exports = {
//     created: (name, age) => {
//         return{
//             name,age,sleep: () => {console.log('dsfsdgfs')}
//         }
//     }
// }