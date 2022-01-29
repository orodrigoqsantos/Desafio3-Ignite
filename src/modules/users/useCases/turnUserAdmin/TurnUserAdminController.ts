import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const userId = request.params.id;
    const adminUser = this.turnUserAdminUseCase.execute({ user_id: userId });
    return response.json(adminUser);
  }
}

export { TurnUserAdminController };
