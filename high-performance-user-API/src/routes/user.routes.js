import Router from 'express';
import { getUser } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/:userId', getUser);

export default userRouter;
