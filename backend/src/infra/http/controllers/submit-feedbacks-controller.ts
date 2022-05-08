import { Request, Response } from "express";
import { SubmitFeedbackUseCase } from "../../../use-cases/submit-feedback-use-case";

export class SubmitFeedbackController {
  constructor(private readonly submitFeedbackUseCase: SubmitFeedbackUseCase) {}

  async handle(request: Request, response: Response) {
    const { type, comment, screenshot } = request.body;

    try {
      await this.submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
      });

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}
