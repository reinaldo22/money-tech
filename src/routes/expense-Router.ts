import {Router} from 'express';
import ExpenseCreateController from '../controllers/expenseController/expenseCreateController';
import ExpenseListController from 'controllers/expenseController/expenseListController';
const routes = Router();


routes.post('/expense', ExpenseCreateController.create)
routes.get('/expense/list', ExpenseListController.findAll)
export default routes;