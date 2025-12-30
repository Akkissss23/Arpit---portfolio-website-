import emailjs from "@emailjs/browser";

// EmailJS configuration
const SERVICE_ID = "service_b4r55uk";
const TEMPLATE_ID = "template_n2nsizm";
const PUBLIC_KEY = "VI9_-Nadg_VGuDlDU";

export const sendContactEmail = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
};
