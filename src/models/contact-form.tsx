import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Phone,
  CheckCircle,
  Loader2,
} from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_7ngjqao",
        "template_3ai7sh9",
        formState,
        "dkOuRFyiVG6XXk34v"
      );
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", phone: "", message: "" });
      }, 2000);
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-white to-white/50 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 shadow-xl p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="w-16 h-16 text-red-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We'll be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { field: 'name', type: 'text', icon: User },
                { field: 'email', type: 'email', icon: Mail },
                { field: 'phone', type: 'text', icon: Phone },
                { field: 'message', type: 'textarea', icon: MessageSquare },
              ].map(({ field, type, icon: Icon }) => (
                <div key={field} className="relative">
                  <label
                    htmlFor={field}
                    className={`absolute left-12 transition-all duration-300 pointer-events-none 
                      ${
                        focusedField === field || formState[field as keyof typeof formState]
                          ? '-top-4 text-sm text-red-600 dark:text-red-400'
                          : 'top-2 text-gray-400 dark:text-gray-500'
                      }`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <Icon
                    className="absolute top-3 left-3 text-gray-400 dark:text-gray-500"
                    size={20}
                  />
                  {type === 'textarea' ? (
                    <textarea
                      id={field}
                      name={field}
                      required
                      value={formState[field as keyof typeof formState]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-400 bg-transparent text-gray-800 dark:text-gray-100 resize-none h-32 transition-colors duration-300 outline-none"
                    />
                  ) : (
                    <input
                      id={field}
                      type={type}
                      name={field}
                      required={field !== 'phone'}
                      value={formState[field as keyof typeof formState]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-400 bg-transparent text-gray-800 dark:text-gray-100 transition-colors duration-300 outline-none"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
