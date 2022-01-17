import { EntityRepository, Repository } from "typeorm";
import { Status } from "../../models/status";

@EntityRepository(Status)
class StatusRepository extends Repository<Status>{ }

export { StatusRepository };