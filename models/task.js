const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    _id: {
        type: Number,
        minlength: 3,
        maxlength: 20,
    },
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
    },
    description: {
        type: String,
        required: true,
        minlength: 23,
        maxlength: 43,
        
    },
},
    {timestamps: true }
);

const taskModel = model('Task', taskSchema);

module.exports = taskModel;