import { Router } from "express";
import { SubmitFeedbackFactory } from "../factories/submit-feedbacks-factory";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome 🚀");
});

router.post("/feedbacks", async (request, response) =>
  SubmitFeedbackFactory().handle(request, response)
);

export { router };
