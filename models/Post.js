const mongoose = require('mongoose');

PostSchema = mongoose.Schema({
    
    uuid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    //date: {
      //  type: Date,
        //default: Date.now
    //}
});


module.exports = mongoose.model('pastebins', PostSchema)