import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  Building2,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// --- Contact Form Logic (Enquiry Structure) ---
const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    premisesType: "",
    residenceType: "",
    meterType: [] as string[],
    mainMeterType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (type: string) => {
    setFormState((prev) => {
      const updatedMeters = prev.meterType.includes(type)
        ? prev.meterType.filter((t) => t !== type)
        : [...prev.meterType, type];
      return { ...prev, meterType: updatedMeters };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Submit to backend API
      const response = await axios.post("http://localhost:8000/api/enquiries", formState);
      
      if (response.status === 201) {
        setIsSubmitted(true);
        toast.success("Enquiry transmitted successfully!");
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            premisesType: "",
            residenceType: "",
            meterType: [],
            mainMeterType: "",
            message: "",
          });
        }, 3000);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      const errorMessage = error.response?.data?.message || "Failed to transmit enquiry. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 border-l-4 border-red-600 pl-4">
        Send Your Enquiry
      </h2>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-16 text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enquiry Received</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">We will get back to you with a tailored solution shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* 1. Personal Details */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-bold">1</span>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Personal Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formState.firstName}
                onChange={handleInputChange}
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500/20 focus:border-red-600 outline-none transition-all dark:text-white"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formState.lastName}
                onChange={handleInputChange}
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500/20 focus:border-red-600 outline-none transition-all dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formState.email}
                onChange={handleInputChange}
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500/20 focus:border-red-600 outline-none transition-all dark:text-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formState.phone}
                onChange={handleInputChange}
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500/20 focus:border-red-600 outline-none transition-all dark:text-white"
              />
              <input
                type="text"
                name="city"
                placeholder="Town/City"
                required
                value={formState.city}
                onChange={handleInputChange}
                className="w-full md:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500/20 focus:border-red-600 outline-none transition-all dark:text-white"
              />
            </div>
          </section>

          {/* 2 & 3. Premises & Residence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-bold">2</span>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Type of Premises?</h3>
              </div>
              <div className="space-y-3">
                {["Residential Apartment", "Commercial Apartment"].map((type) => (
                  <label key={type} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <input
                      type="radio"
                      name="premisesType"
                      value={type}
                      checked={formState.premisesType === type}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{type}</span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-bold">3</span>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Type of Residence?</h3>
              </div>
              <div className="space-y-3">
                {["For Tenants", "Own Use"].map((type) => (
                  <label key={type} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <input
                      type="radio"
                      name="residenceType"
                      value={type}
                      checked={formState.residenceType === type}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{type}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* 4 & 5. Meters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-bold">4</span>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Type of Meter/s Required?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Electricity", "Water", "Gas"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleCheckboxChange(type)}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                      formState.meterType.includes(type)
                        ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20"
                        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 hover:border-red-600"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-bold">5</span>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Main meter property type?</h3>
              </div>
              <div className="flex gap-4">
                {["Post-paid", "Prepaid"].map((type) => (
                  <label key={type} className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <input
                      type="radio"
                      name="mainMeterType"
                      value={type}
                      checked={formState.mainMeterType === type}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{type}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* 6. Message */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-bold">6</span>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Message</h3>
            </div>
            <textarea
              name="message"
              required
              placeholder="Tell us more about your specific needs..."
              value={formState.message}
              onChange={handleInputChange}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500/20 focus:border-red-600 outline-none transition-all dark:text-white h-32 resize-none"
            />
          </section>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black uppercase tracking-[0.2em] text-xs py-4 px-8 rounded-xl hover:bg-red-600 dark:hover:bg-red-600 hover:text-white transition-all duration-300 disabled:opacity-50 group"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <span className="flex items-center gap-2">
                Submit Enquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Intelligence Hub",
    value: "Manga House, Ground Floor",
    description: "Kiambere Road, Upperhill, Nairobi",
  },
  {
    icon: Phone,
    title: "General Inquiries",
    value: "+254 741 099 909",
    description: "Mon - Fri, 8AM - 5PM",
  },
  {
    icon: Mail,
    title: "Support Line",
    value: "support@tokenpap.com",
    description: "24/7 Priority Tickets",
  },
];

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Hero Header */}
      <div className="relative pt-32 pb-16 px-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">
              GET IN <span className="text-red-600">TOUCH.</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              We're ready to modernize your utility management. Fill out the form below or reach us via our direct channels.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-16">
          
          {/* Main Enquiry Form */}
          <div className="bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl p-8 md:p-12">
            <ContactForm />
          </div>

          {/* Quick Contact & Map */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-widest">Connect Directly</h3>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-red-600">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{info.title}</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{info.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
               <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-widest">Global HQ</h3>
               <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 h-[300px] shadow-lg">
                 <iframe
                    title="Location"
                    src="https://www.google.com/maps?q=Manga+House,9+Kiambere+Road,Upperhill,Nairobi,Kenya&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="grayscale dark:grayscale dark:invert-[0.1]"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-900 text-white text-center rounded-t-[3rem]">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              INFRASTRUCTURE <span className="text-red-600">EVOLVED.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/solutions" className="px-8 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all flex items-center gap-2">
                  View Solutions <Building2 size={16} />
                </Link>
                <Link to="/about" className="px-8 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                  Our Method <Zap size={16} />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;