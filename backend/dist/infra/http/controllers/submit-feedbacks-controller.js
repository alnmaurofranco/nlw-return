"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackController = void 0;
class SubmitFeedbackController {
    constructor(submitFeedbackUseCase) {
        this.submitFeedbackUseCase = submitFeedbackUseCase;
    }
    async handle(request, response) {
        const { type, comment, screenshot } = request.body;
        try {
            await this.submitFeedbackUseCase.execute({
                type,
                comment,
                screenshot,
            });
            return response.status(201).send();
        }
        catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}
exports.SubmitFeedbackController = SubmitFeedbackController;
