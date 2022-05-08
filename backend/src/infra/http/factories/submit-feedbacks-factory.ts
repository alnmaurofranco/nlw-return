import { PrismaFeedbacksRepository } from "../../../repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "../../../use-cases/submit-feedback-use-case";
import { NodemailerMailAdapter } from "../../adapters/nodemailer/nodemailer-mail-adapter";
import { SubmitFeedbackController } from "../controllers/submit-feedbacks-controller";

export const SubmitFeedbackFactory = (): SubmitFeedbackController => {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  return new SubmitFeedbackController(submitFeedbackUseCase);
};
