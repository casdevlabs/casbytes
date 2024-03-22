import { MailtrapClient } from "mailtrap";

const TOKEN = "1a7e44edc456a4ab6bbd77aee2857a2d";

const client = new MailtrapClient({ token: TOKEN });

export enum MAILTRAP_TEMPLATES {
  WELCOME = "13f7ba9b-fb23-48b8-9dd9-6c1e06353f51",
  RESET_PASSWORD = "7326286b-c609-469b-af80-b2b20756783a",
  EMAIL_VERIFICATION = "fbeecd9a-8248-4b7d-88a3-9e40b15937a8",
}

interface ISendMail {
  recipient: string;
  template_uuid: MAILTRAP_TEMPLATES;
  template_variables: Record<string, string>;
}

export async function sendMail({
  recipient,
  template_uuid,
  template_variables,
}: ISendMail) {
  try {
    const response = await client.send({
      from: {
        email: "noreply@casbytes.com",
        name: "Casbytes",
      },
      to: [
        {
          email: recipient,
        },
      ],
      template_uuid,
      template_variables: {
        ...template_variables,
        company_name: "CASBytes",
        company_legal_name: "CASDev. Labs.",
        company_legal_address: "Sabon Tasha, Kaduna, Nigeria.",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email");
  }
}
