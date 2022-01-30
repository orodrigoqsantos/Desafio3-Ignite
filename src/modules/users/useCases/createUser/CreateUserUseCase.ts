import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ name, email }: IRequest): User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new Error("This email is already in use");
    }
    const userCreated = this.usersRepository.create({ name, email });
    return userCreated;
  }
}

export { CreateUserUseCase };
