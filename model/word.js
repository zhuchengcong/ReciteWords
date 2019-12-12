var mongoose = require('../util/dbutil');

var schema = mongoose.Schema({
    change:  String,
    eglish_mean: String,
    mean: String,
    phonetc_symbol: String,
    sort_lan: [
        [String]
    ],
    sound_m_url: String,
    sound_y_url: String,
    word: { type: String, index: true, unique: true, trim: true }
});

var word = mongoose.model('word', schema);
module.exports = {
    findWord: () => {

    },
    insertWord: () => {

    },
    deleteWord: () => {

    },
    updateWord:()=>{

    }
}