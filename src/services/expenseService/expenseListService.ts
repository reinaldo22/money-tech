import { Expense } from "models/expense";
import { getRepository } from "typeorm";

class ExpenseListService {


    public async findAll() {
        const expenseRepositorie = await getRepository(Expense).find({relations: ['status']})

        return expenseRepositorie;

    }
}
export default ExpenseListService;