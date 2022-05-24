"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const submit_feedbacks_factory_1 = require("../factories/submit-feedbacks-factory");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    res.send("Welcome 🚀");
});
router.post("/feedbacks", async (request, response) => (0, submit_feedbacks_factory_1.SubmitFeedbackFactory)().handle(request, response));
