const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recentWorkoutSchema = new Schema({
    Excercises: [
        {type: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            trim: true,
            required:" workout name"
        },
        duration: {
            type: Number
        },
        weights: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets:{
            types: Number
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
});

const recentWorkout = mongoose.model("recentWorkout", recentWorkoutSchema);

module.exports = recentWorkout;