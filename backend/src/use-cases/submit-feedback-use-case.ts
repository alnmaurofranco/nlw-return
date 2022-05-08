import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { MailAdapter } from "../infra/adapters/mail-adapter";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

type SubmitFeedbackUseCaseResponse = void;

export class SubmitFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ) {}

  async execute({
    type,
    comment,
    screenshot,
  }: SubmitFeedbackUseCaseRequest): Promise<SubmitFeedbackUseCaseResponse> {
    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
