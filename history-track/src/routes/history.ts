import { Router } from 'express';
import * as historyController from '../controllers/history';

const router = Router();

router.get('/', historyController.getHistory);
router.post('/new', historyController.createHistory);

export default router;
