"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedbacksRepository = void 0;
const prisma_1 = require("../../infra/database/prisma");
class PrismaFeedbacksRepository {
    constructor() {
        this.repository = prisma_1.prisma.feedback;
    }
    async create({ type, comment, screenshot, }) {
        const data = {
            type,
            comment,
            screenshot,
        };
        await this.repository.create({ data });
    }
}
exports.PrismaFeedbacksRepository = PrismaFeedbacksRepository;
