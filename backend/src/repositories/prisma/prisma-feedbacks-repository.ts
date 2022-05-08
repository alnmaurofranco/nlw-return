import { prisma } from "../../infra/database/prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  private readonly repository = prisma.feedback;

  async create({
    type,
    comment,
    screenshot,
  }: FeedbackCreateData): Promise<void> {
    const data = {
      type,
      comment,
      screenshot,
    };

    await this.repository.create({ data });
  }
}
