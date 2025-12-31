import emailjs from "@emailjs/browser";

// =======================
// EmailJS Configuration
// =======================
const SERVICE_ID = "service_b4r55uk";

// Template that sends message TO YOU
const CONTACT_TEMPLATE_ID = "template_vq9lomd";

// Template that sends auto-reply TO VISITOR
const AUTOREPLY_TEMPLATE_ID = "template_k27yhan"; // 🔁 replace with real ID

const PUBLIC_KEY = "VI9_-Nadg_VGuDlDU";

// =======================
// Main function used by Contact.jsx
// =======================
export const sendContactEmail = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  // 1️⃣ Send message to YOU
  await emailjs.send(
    SERVICE_ID,
    CONTACT_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );

  // 2️⃣ Send auto-reply to VISITOR
  await emailjs.send(
    SERVICE_ID,
    AUTOREPLY_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
};
