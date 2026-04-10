import { useState } from "react";
import {  X,  Facebook,  Twitter,  Linkedin,  Mail, MessageCircleCodeIcon } from "lucide-react";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp details
  const phoneNumber = "+254716774477";
  const defaultMessage = "Hello, I'm interested in partnering with Millenium Solutions EA Limited for your Enterprise IT consultancy services. I'm particularly impressed by your expertise in infrastructure, networking, and enterprise applications. I'd love to learn more about how your solutions can support our business in East Africa.";

  
  // Example social media or contact links
  const items = [
    {
      icon: <MessageCircleCodeIcon className="h-5 w-5" />,
      onClick: () => {
        // WhatsApp link
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          defaultMessage
        )}`;
        window.open(url, "_blank");
      },
      bgColor: "bg-green-400", // For styling
      label: "WhatsApp",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      onClick: () => window.open("https://www.linkedin.com/company/millenium-solutions-ea-ltd/", "_blank"),
      bgColor: "bg-gray-600",
      label: "Linkedin",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      onClick: () => window.open("https://x.com/Millenium_Soln?t=LAjPcn3pBRR5ad8Q2xKvlQ&s=09", "_blank"),
      bgColor: "bg-blue-400",
      label: "Twitter",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      onClick: () => window.open("https://www.facebook.com/share/1AjYiTAhRy/", "_blank"),
      bgColor: "bg-blue-600",
      label: "Facebook",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      onClick: () => window.open("mailto:info@millenium.co.ke"),
      bgColor: "bg-red-500",
      label: "Email Us",
    },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center space-y-2">
      {/* Social Icons (visible only if open) */}
      <div className="flex flex-col items-center space-y-3 mb-2 transition-all duration-300">
        {isOpen &&
          items.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`${item.bgColor} flex items-center justify-center text-white p-3 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-110`}
              style={{ transitionDelay: `${index * 50}ms` }}
              aria-label={item.label}
            >
              {item.icon}
            </button>
          ))}
      </div>

      {/* Main FAB Button */}
      <button
        onClick={toggleMenu}
        className="bg-red-500 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Toggle Contact Menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <span className="text-xl font-bold">+</span>
        )}
      </button>
    </div>
  );
};

export default ContactButton;
