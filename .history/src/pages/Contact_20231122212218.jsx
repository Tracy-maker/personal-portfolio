import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Kevin",
        from_email: form.email,
        to_email: "ydlvns@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      //TODO:show success message
      //TODO:Hide an alert
    })
    .catch((err) => {
      setLoading(false);
      console.error(err);
      //TODO:show error message
    });

  return (
    <section className="relative h-full flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Contact Me</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              className="input"
              onChange={handleChange}
              placeholder="please enter your name..."
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              value={form.email}
              name="email"
              className="input"
              onChange={handleChange}
              placeholder="please enter your email address..."
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your thoughts here..."
            />
          </label>

          <button type="submit" className="rounded-lg text-sm w-full sm:w-auto px-5 py-4 text-center text-white bg-blue-900" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
