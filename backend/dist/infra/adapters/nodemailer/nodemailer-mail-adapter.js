"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = require("nodemailer");
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env;
class NodemailerMailAdapter {
    constructor() {
        this.transport = (0, nodemailer_1.createTransport)({
            host: MAIL_HOST,
            port: Number(MAIL_PORT),
            auth: {
                user: MAIL_USER,
                pass: MAIL_PASSWORD,
            },
        });
    }
    async sendMail({ subject, body }) {
        await this.transport.sendMail({
            from: "Equipe FeedGet <support@feedget.com>",
            to: "Alan <alan@alndev.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
