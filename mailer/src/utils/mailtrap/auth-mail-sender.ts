import { JWT, QUEUES, EXCHANGES } from "@casbytes/common";
import { sendMail, MAILTRAP_TEMPLATES } from "../../services/mailtrap";
import { amqp } from "../../services/rabbitmq";

export class AuthMailSender {
  // private static BASE_URL = "https://casbytes.com";
  private static BASE_URL = "https://casbytes.dev";
  private static RESET_PASSWORD_URL = `${AuthMailSender.BASE_URL}/reset-password?token=`;
  private static VERIFY_EMAIL_URL = `${AuthMailSender.BASE_URL}/verify-email?token=`;
  private static SUPPORT_EMAIL = "support@casbytes.com";

  /**
   * Sends a verification email to the user
   */
  public static async sendUserVerificationEmail() {
    try {
      await amqp.rpcResponse(QUEUES.verify_email, async (msg) => {
        const { token } = JSON.parse(msg.content.toString());
        const { firstName, email } = JWT.verify(token) as {
          firstName: string;
          email: string;
        };
        const response = await sendMail({
          recipient: email,
          template_uuid: MAILTRAP_TEMPLATES.EMAIL_VERIFICATION,
          template_variables: {
            user_first_name: firstName,
            email_verification_link: `${AuthMailSender.VERIFY_EMAIL_URL}${token}`,
            support_email: AuthMailSender.SUPPORT_EMAIL,
          },
        });
        if (!response) return null;
        return msg.content.toString();
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Sends a welcome email to the user
   */
  public static async sendWelcomeEmail() {
    try {
      await amqp.subscribeExchange(
        EXCHANGES.auth,
        QUEUES.welcome,
        async (msg) => {
          const { token } = JSON.parse(msg!.content.toString());
          const { firstName, email } = JWT.verify(token) as {
            firstName: string;
            email: string;
          };
          const response = await sendMail({
            recipient: email,
            template_uuid: MAILTRAP_TEMPLATES.WELCOME,
            template_variables: {
              user_first_name: firstName,
              next_step_link: `${AuthMailSender.BASE_URL}/onboarding`,
              course_page_link: `${AuthMailSender.BASE_URL}/courses`,
              faqs_page_link: `${AuthMailSender.BASE_URL}/faqs`,
              support_email: AuthMailSender.SUPPORT_EMAIL,
            },
          });
          return response;
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Sends a reset password email to the user
   */
  public static async sendResetPasswordEmail() {
    try {
      await amqp.subscribeExchange(
        EXCHANGES.auth,
        QUEUES.reset_password,
        async (msg) => {
          const { token } = JSON.parse(msg!.content.toString());
          const { email, firstName } = JWT.verify(token) as {
            email: string;
            firstName: string;
          };
          const response = await sendMail({
            recipient: email,
            template_uuid: MAILTRAP_TEMPLATES.RESET_PASSWORD,
            template_variables: {
              user_first_name: firstName,
              user_email: email,
              pass_reset_link: `${AuthMailSender.RESET_PASSWORD_URL}${token}`,
              support_email: AuthMailSender.SUPPORT_EMAIL,
            },
          });
          return response;
        },
      );
    } catch (error) {
      console.error(error);
    }
  }
}
