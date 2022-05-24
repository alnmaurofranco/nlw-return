"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
// let inMemoryFeedbacksRepository: InMemoryFeedbacksRepository;
// let inMemoryMailAdapter: inMemoryMailAdapter;
let submitFeedbackUseCase;
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
describe("Submit feedback", () => {
    beforeEach(() => {
        submitFeedbackUseCase = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
    });
    it("should be able to submit a feedback", async () => {
        const result = submitFeedbackUseCase.execute({
            type: "OTHER",
            comment: "example comment",
            screenshot: "data:image/png;base64,new.jpg",
        });
        await expect(result).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it("should not be able to submit feedback without type", async () => {
        const result = submitFeedbackUseCase.execute({
            type: "",
            comment: "example comment",
            screenshot: "data:image/png;base64,new.jpg",
        });
        await expect(result).rejects.toThrow();
    });
    it("should not be able to submit feedback without comment", async () => {
        const result = submitFeedbackUseCase.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64,new.jpg",
        });
        await expect(result).rejects.toThrow();
    });
    it("should not be able to submit feedback with an invalid screenshot", async () => {
        const result = submitFeedbackUseCase.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "new.jpg",
        });
        await expect(result).rejects.toThrow();
    });
});
