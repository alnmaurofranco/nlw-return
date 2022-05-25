"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const { PORT, ROUTER_PREFIX, ORIGIN_URL_PRODUCTION } = process.env;
const EXPRESS_ON_PORT = PORT || 4444;
function bootstrap() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: ORIGIN_URL_PRODUCTION,
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(ROUTER_PREFIX, routes_1.router);
    app.listen(EXPRESS_ON_PORT, () => console.log(`HTTP server running on http://localhost:${PORT} 🚀`));
}
bootstrap();
