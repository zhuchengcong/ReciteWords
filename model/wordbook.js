var mongoose = require('../util/dbutil');

var schema = mongoose.Schema({
    bookname:String,
    bookinfo:String,
    words:[{
        word:String,
        memory_count:0
    }],
    reciting:[[String]],
    status:String
});

var wordbook = mongoose.model('wordbook', schema);
module.exports = {
    findWordBook: () => {

    },
    insertWordBook: () => {

    },
    deleteWordBook: () => {

    },
    updateWordBook:()=>{

    }
}