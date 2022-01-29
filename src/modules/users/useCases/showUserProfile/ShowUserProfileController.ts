import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const userId = request.params.id;
    const user = this.showUserProfileUseCase.execute({ user_id: userId });
    return response.json(user);
  }
}

export { ShowUserProfileController };
