import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    sharedNotesWith: [{
        user: { type: mongoose.Schema.ObjectId, ref: 'User' },
        note: { type: mongoose.Schema.ObjectId, ref: 'Note' }
    }],
    
    myNotes: [{ type: mongoose.Schema.ObjectId, ref: 'Note' }],

    receivedNotesFrom: [{
        note: { type: mongoose.Schema.ObjectId, ref: 'Note' },
        user: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }]
});

const User = mongoose.model('User', userSchema);
export default User;
