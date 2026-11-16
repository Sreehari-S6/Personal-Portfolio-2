
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import { personalInfo } from "../data/personal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSuccess(false);
    setError(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(true);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Email sending failed:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] contact-accent">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Let's Work <span className="contact-accent">Together</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Have a project idea or an opportunity? Feel free to get in touch.
            I'd be happy to connect.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 text-gray-400 transition-colors hover:text-yellow-400"
              >
                <div className="rounded-xl bg-yellow-400/10 p-3 contact-accent">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-400">
                <div className="rounded-xl bg-yellow-400/10 p-3 contact-accent">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>{personalInfo.location}</p>
                </div>
              </div>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 transition-colors hover:text-yellow-400"
              >
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p>Visit my GitHub profile</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 transition-colors hover:text-yellow-400"
              >
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p>Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-card rounded-2xl border p-6 md:p-8">
            <h3 className="mb-6 text-2xl font-semibold">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm contact-label">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="contact-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm contact-label">
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="contact-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm contact-label">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="contact-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm contact-label">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="contact-input w-full resize-none rounded-lg border px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={17} />}
              </button>

              {success && (
                <p
                  role="status"
                  className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-center text-sm text-green-400"
                >
                  Thank you! Your message has been submitted successfully.
                </p>
              )}

              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-center text-sm text-red-400"
                >
                  Unable to send your message. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
