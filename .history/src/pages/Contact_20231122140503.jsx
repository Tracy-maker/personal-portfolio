import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <section className="relative h-full flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              className="input"
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
