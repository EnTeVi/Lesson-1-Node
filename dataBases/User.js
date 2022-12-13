// const {Schema, model} = require('mongoose');
//
// const userSchema = new Schema({
//     name: {type: String, required: true, default: ''},
//     email: {type: String, required: true, trim: true, lowercase: true},
//     age: {type: Number, default: 18}
// }, {
//     timestamps: true //створює день створення і годину оновлення
// });
//
// module.exports = model('User', userSchema);


const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true, default: '' },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    age: { type: Number, default: 18 }
}, {
    timestamps: true
});

module.exports = model('User', userSchema);