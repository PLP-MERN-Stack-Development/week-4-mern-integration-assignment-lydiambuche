import express from 'express';
import { createJournal, getJournalsByUser } from '../controllers/journalController.js'
const router = express.Router();

router.post('/', createJournal);                 
router.get('/:userId', getJournalsByUser);   



export default router;

