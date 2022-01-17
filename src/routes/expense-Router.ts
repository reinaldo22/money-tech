import {Router} from 'express';
import ExpenseCreateController from '../controllers/expenseController/expenseCreateController';
const routes = Router();


routes.post('/expense', ExpenseCreateController.create)

export default routes;