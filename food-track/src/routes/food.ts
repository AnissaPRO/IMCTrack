import { Router } from 'express';
import * as foodController from '../controllers/food';


const router = Router();

router.get('/', foodController.getFoods);

export default router;