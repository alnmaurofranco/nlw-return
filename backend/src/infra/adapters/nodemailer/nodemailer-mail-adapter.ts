import { createTransport, Transport, Transporter } from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env as {
  [key: string]: string;
};

export class NodemailerMailAdapter implements MailAdapter {
  private readonly transport: Transporter;

  constructor() {
    this.transport = createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
      },
    });
  }

  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await this.transport.sendMail({
      from: "Equipe FeedGet <support@feedget.com>",
      to: "Alan <alan@alndev.com>",
      subject,
      html: body,
    });
  }
}
