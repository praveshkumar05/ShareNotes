import Note from '../Model/notesModel.js'

export const craeteNotesController = async(req, res) =>{
    try {

        const {noteName, content} = req.body;
        const ownerName = req.user._id;

        switch (true) {
            case !noteName:
              return res.status(400).send({ success:false , error: "Name is required" });
            case !content:
              return res.status(400).send({success:false , error: "description is required" });
            case !ownerName:
              return res.status(400).send({success:false , error: "you are not logged In" });
          }

        const newNote = new Note({noteName, content, ownername});
        await newNote.save();

        return res.status(201).json({message: "notes is added", newNote});
    } catch (error) {
        
        console.log(error);

        res.status(400).send({
          success: false,
          error,
          message: "error in creating Note",
        });

    }
}