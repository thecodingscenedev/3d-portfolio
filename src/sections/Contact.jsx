import React from "react";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";

const Contact = () => {
  const formRef = React.useRef();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = ({ name, value }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const userID = import.meta.env.VITE_APP_EMAILJS_USER_ID;

      const templateParams = {
        name: formData.name,
        to_name: "CodingScene.dev",
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );
      console.log(response);

      setLoading(false);
      toast.success("Thank you for your message!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute max-sm:h-full inset-0 min-h-screen"
        />
        <div className="contact-container w-full max-w-3xl mx-auto p-4 relative z-10 sm:top-5">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to offer an opportunity, build a new website,
            enhance an existing one, or simply want to say hello — feel free to
            reach out. I'd love to connect!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  handleChange({ name: e.target.name, value: e.target.value })
                }
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  handleChange({ name: e.target.name, value: e.target.value })
                }
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  handleChange({ name: e.target.name, value: e.target.value })
                }
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="field-btn flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
