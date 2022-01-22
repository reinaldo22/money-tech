import { Request, Response } from "express";
import ExpenseListService from "services/expenseService/expenseListService";

class ExpenseListController {

    public async findAll(req: Request, res: Response): Promise<Response> {


        const listExpense = new ExpenseListService();
        const result = await listExpense.findAll()

        return res.status(201).json(result);


    }
}
export default new ExpenseListController();