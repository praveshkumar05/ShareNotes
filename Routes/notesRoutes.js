import express from 'express'
import { craeteNotesController } from '../Controller/notesController.js';





const router = express.Router();

router.post('/add/:id',craeteNotesController)
export default router;