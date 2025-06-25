import { Router } from 'express';
import { signup, login, logout } from '../controllers/auth.controller';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;



/*import type { Application, Request, Response, NextFunction } from "express";

import { ROUTES } from './user';
// A finir
const generateRoutes = (app: Application) => {
    ROUTES.forEach((route: any) => {
        const { url, reqType, callback } = route;
        if (reqType === 'GET') {
            // Handle GET request
            // app.post(url, callback);            
            app.get(url, (req: Request, res: Response, next: NextFunction) => {
                console.log(`GET request received at ${url}`)});
        } else if (reqType === 'POST') {
            // app.post(url, callback);
            app.post(url, (req: Request, res: Response, next: NextFunction) => {
                console.log(`POST request received at ${url}`)});            
        } else if (reqType === 'PUT') {
            // app.put(url, callback); 
            app.put(url, (req: Request, res: Response, next: NextFunction) => {
                console.log(`PUT request received at ${url}`)});                 
        } else if (reqType === 'DELETE') {
            // app.delete(url, callback); 
            app.delete(url, (req: Request, res: Response, next: NextFunction) => {
                console.log(`PUT request received at ${url}`)});         
        } else {
            console.log(`No specific request type defined for ${url}`);
        }
    })
}

export { generateRoutes };*/