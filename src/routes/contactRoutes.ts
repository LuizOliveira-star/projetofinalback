import { Router } from 'express';
import { getContacts, postContact, putContact, deleteContact } from '../controllers/contactController';

const router = Router();

router.get('/contacts', getContacts);

router.post('/contacts', postContact);

router.put('/contacts/:id', putContact);

router.delete('/contacts/:id', deleteContact);

export default router;
