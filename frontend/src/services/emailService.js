import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_b4r55uk";
const TEMPLATE_ID = "template_k27yhan";
const PUBLIC_KEY = "VI9_-Nadg_VGuDlDU";

export const sendContactEmail = (formData) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "New message from portfolio",
      message: formData.message
    },
    PUBLIC_KEY
  );
};
