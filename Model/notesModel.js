import { text } from "express";
import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    noteName: {
        type: String,
        required: true,
        trim: true,
        default: 'text'
    },
    content : String,   
    ownerName:{type : mongoose.Schema.ObjectId, ref: 'User'}
}, {timestamps: true});

const Note =  mongoose.model('Note',notesSchema);
export default Note;