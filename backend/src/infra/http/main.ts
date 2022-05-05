import "dotenv/config";
import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { router } from "./routes";

const PORT = process.env.EXPRESS_ON_PORT || 4444;
const routesPrefix = process.env.ROUTER_PREFIX as string;

function bootstrap() {
  const app: Application = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use(routesPrefix, router);

  app.listen(PORT, () =>
    console.log(`HTTP server running on http://localhost:${PORT} 🚀`)
  );
}

bootstrap();
