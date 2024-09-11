import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [notification, setNotification] = useState(""); // State to manage notification messages
  const [loading, setLoading] = useState(false); // State to manage loading

  // States for input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        // Show success notification
        setNotification("Message sent successfully!");
        // Clear input fields
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        // Show failure notification
        setNotification("Failed to send message. Please try again.");
        
      })
      .finally(() => {
        // Hide loading and notification after 3 seconds
        setLoading(false);
        setTimeout(() => setNotification(""), 3000);
      });
  };

  return (
    <div className="bg-slate-900 pt-20 pb-4 relative" id="Contact">
      <div className="absolute bottom-12 right-12 bg-blue-400 w-20 h-20 blur-[80px]"></div>
      <div className="absolute top-2 left-8 bg-blue-700 w-24 h-24 blur-[70px]"></div>
      <h2 className="text-center text-4xl font-bold pb-4 text-white">
        Contact <span className="text-customTurquoise">me!</span>
      </h2>
      <div className="flex items-center justify-center">
        <form
          className="text-white p-2 md:p-6 rounded-lg shadow-lg"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border border-gray-800 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTurquoise"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-800 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTurquoise"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-4 py-2 border border-gray-800 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTurquoise"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="px-4 py-2 border border-gray-800 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTurquoise"
              required
            />
          </div>
          <div className="mt-4">
            <textarea
              name="message"
              placeholder="Text Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-800 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTurquoise resize-none"
              rows="4"
              required
            ></textarea>
          </div>
          {notification && (
            <div className="mt-4 text-center text-white">{notification}</div>
          )}
          <div className="flex items-center justify-center text-black">
            <button
              className="bg-customTurquoise mt-6 py-1 px-4 rounded-xl custom-turquoise-shadow hover:opacity-50"
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
