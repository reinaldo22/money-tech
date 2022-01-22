import { Request, Response } from "express";
import ExpenseService from "../../services/expenseService/expenseCreateService";

class ExpenseCreateController {

    public async create(req: Request, res: Response): Promise<Response> {

        const { name,value, date } = req.body;

        const createExpense = new ExpenseService();
        

        const expense = await createExpense.execute({
            name,
            value,
            date
        });
       
        return res.status(201).json(expense);


    }
}
export default new ExpenseCreateController();