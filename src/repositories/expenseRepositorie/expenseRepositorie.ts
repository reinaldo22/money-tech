import { Expense } from "../../models/expense";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Expense)
class ExpenseRepositorie extends Repository<Expense>{
 
    public async findById(id: string): Promise<Expense | undefined> {
        const expense = await this.findOne({
            where: { id }
        });
        return expense;
    }
}
export { ExpenseRepositorie };