import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  emailjs.sendForm(
    import.meta.env.EMAILJS_SERVICE_ID,
   import.meta.env.EMAILJS_TEMPLATE_ID,
   {

   }
     import.meta.env.EMAILJS_PUBLIC_KEY
  )
  

  return (
    <section className="relative h-full flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
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
              handleChange={handleChange}
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
              handleChange={handleChange}
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
              handleChange={handleChange}
              placeholder="Write your thoughts here..."
            />
          </label>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
