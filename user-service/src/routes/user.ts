import { Router } from 'express';
import * as userController from '../controllers/user';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/register', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', authController.login);

export default router;




/*interface Route {
    url: string;
    reqType?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    callback?: (req: any, res: any) => void;
}

const ROUTES: Route[] = [
    // LIST
    {
        url: '/',
        reqType: 'GET',
        
    },
        {
        url: '/test',
        reqType: 'GET',
        callback: (req: any, res: any) => {
            res.send('Test route for user service');
        }
    },
    // POST FOR CREATE
    {
        url: '/',
        reqType: 'POST',
    },
    // PUT FOR UPDATE
    {
        url: '/<id>',
        reqType: 'PUT',
    },
    // GET USER
    {
        url: '/<id>',
        reqType: 'GET',

    }
    ,
    // GET USER
    {
        url: '/<id>',
        reqType: 'DELETE',

    }
];

export { ROUTES, Route }; */