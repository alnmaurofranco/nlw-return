import "dotenv/config";
import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { router } from "./routes";

const { EXPRESS_ON_PORT, ROUTER_PREFIX, ORIGIN_URL_PRODUCTION } =
  process.env as {
    [key: string]: string;
  };

const PORT = Number(EXPRESS_ON_PORT) || 4444;

function bootstrap() {
  const app: Application = express();

  app.use(
    cors({
      origin: ORIGIN_URL_PRODUCTION,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(ROUTER_PREFIX, router);

  app.listen(PORT, () =>
    console.log(`HTTP server running on http://localhost:${PORT} 🚀`)
  );
}

bootstrap();
