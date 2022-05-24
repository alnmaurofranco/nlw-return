"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackFactory = void 0;
const prisma_feedbacks_repository_1 = require("../../../repositories/prisma/prisma-feedbacks-repository");
const submit_feedback_use_case_1 = require("../../../use-cases/submit-feedback-use-case");
const nodemailer_mail_adapter_1 = require("../../adapters/nodemailer/nodemailer-mail-adapter");
const submit_feedbacks_controller_1 = require("../controllers/submit-feedbacks-controller");
const SubmitFeedbackFactory = () => {
    const prismaFeedbacksRepository = new prisma_feedbacks_repository_1.PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const submitFeedbackUseCase = new submit_feedback_use_case_1.SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter);
    return new submit_feedbacks_controller_1.SubmitFeedbackController(submitFeedbackUseCase);
};
exports.SubmitFeedbackFactory = SubmitFeedbackFactory;
