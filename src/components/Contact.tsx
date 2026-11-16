import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { personalInfo } from "../data/personal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-[#111111] px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Let's Work <span className="text-yellow-400">Together</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Have a project idea or an opportunity? Feel free to get in touch. I'd be happy to
            connect.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 text-gray-400 transition-colors hover:text-yellow-400"
              >
                <div className="rounded-xl bg-yellow-400/10 p-3 text-yellow-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-400">
                <div className="rounded-xl bg-yellow-400/10 p-3 text-yellow-400">
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

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
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
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
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
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-gray-300">
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
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
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
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
              >
                Send Message
                <Send size={17} />
              </button>

              {success && (
                <p
                  role="status"
                  className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-center text-sm text-green-400"
                >
                  Thank you! Your message has been submitted successfully.
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
