import { Expense } from "../../models/expense";
import { ExpenseRepositorie } from "../../repositories/expenseRepositorie/expenseRepositorie";
import { getCustomRepository } from "typeorm";
import { StatusRepository } from "../../repositories/statusRepositorie/statusRepositorie";
import AppError from "../../shared/errors/AppError";

interface IRequest {
    name: string;
    value: number;
    date: string;
}


class ExpenseService {

    public async execute({ name, value, date }: IRequest): Promise<Expense> {
        const expenseRepositorie = getCustomRepository(ExpenseRepositorie);
        const statusRepository = getCustomRepository(StatusRepository);


        //TODO: PASSAR O STATUS NA CRIAÇÃO DO OBJETO E NÃO POR DEFAULT
        const statusExists = await statusRepository.findOne({
            where: { id: 1 }
        });

        if (!statusExists) {
            throw new AppError("Este status não é válido", 404);
        }

        const expense = expenseRepositorie.create({
            name,
            value,
            date,
            status: statusExists,
        });

       
        await expenseRepositorie.save(expense);

        return expense;


    }


}
export default ExpenseService;