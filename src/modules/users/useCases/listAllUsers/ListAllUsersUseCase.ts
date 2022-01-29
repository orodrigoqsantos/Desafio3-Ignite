import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const userRequestor = this.usersRepository.findById(user_id);
    if (userRequestor.admin === false) {
      throw new Error("User does not have permission to access users list");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
