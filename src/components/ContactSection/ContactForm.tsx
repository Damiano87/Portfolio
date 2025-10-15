import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { cn } from "../../lib/utils";
import { Send } from "lucide-react";
import { use, useActionState } from "react";
import { motion } from "motion/react";
import { LanguageContext } from "../../context/createLanguageContext";

type ActionState = {
  status: "idle" | "success" | "error";
  error?: string | null;
};

// Inicialization of emailjs
emailjs.init({
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
  // Do not allow headless browsers
  blockHeadless: false,
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

// Send email function
async function sendEmail(
  _prevState: ActionState | undefined,
  formData: FormData
): Promise<ActionState> {
  try {
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    await emailjs.send(
      import.meta.env.VITE_SERVICE_ID as string,
      import.meta.env.VITE_TEMPLATE_ID as string,
      { name, email, message }
    );

    toast.success("Twoja wiadomość została wysłana!");
    return { status: "success", error: null };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : typeof err === "string"
        ? err
        : "Nieznany błąd";

    console.error("Błąd wysyłki:", err);
    toast.error("Nie udało się wysłać wiadomości. Spróbuj ponownie później.");

    return { status: "error", error: errorMessage };
  }
}

const ContactForm = () => {
  const { t } = use(LanguageContext);

  const [, formAction, isPending] = useActionState(sendEmail, {
    status: "idle",
    error: null,
  });

  return (
    <motion.div
      initial={{
        translateX: 20,
        rotate: 45,
        opacity: 0,
      }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 2 },
      }}
      className="bg-card p-8 rounded-lg shadow-xs"
    >
      <Toaster />
      <h3 className="text-2xl font-semibold mb-6">{t.contact.sendMessage}</h3>

      <form className="space-y-6" action={formAction}>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {" "}
            {t.contact.yourName}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            placeholder={t.contact.namePlaceholder}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {" "}
            {t.contact.yourEmail}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            placeholder={t.contact.emailPlaceholder}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {" "}
            {t.contact.yourMessage}
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
            placeholder={t.contact.messagePlaceholder}
          />
        </div>

        {/* Submit button */}
        <div className="btn-wrapper">
          <button
            type="submit"
            disabled={isPending}
            className={cn(
              "cosmic-button w-full flex items-center justify-center gap-2",
              isPending ? "opacity-70 cursor-not-allowed" : ""
            )}
          >
            {isPending ? t.contact.sendingMessage : t.contact.sendMessage}
            <Send size={16} />
          </button>
        </div>
      </form>
    </motion.div>
  );
};
export default ContactForm;
