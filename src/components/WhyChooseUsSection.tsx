// src/components/WhyChooseUsSection.tsx

import React, { useState, useRef, useEffect } from "react";
import { Award, Gem, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type CommandEntry = {
  command: string;
  output: string[];
};

const WhyChooseUsSection: React.FC = () => {

  const points = [
    {
      icon: Gem,
      title: "Highly Skilled Experts",
      description:
        "Our experienced engineers transform complex technical challenges into scalable software systems.",
    },
    {
      icon: Award,
      title: "Tailored Digital Solutions",
      description:
        "Every project is designed specifically for your business goals, ensuring maximum efficiency.",
    },
    {
      icon: Rocket,
      title: "Proven Track Record",
      description:
        "We consistently deliver high performance systems and reliable digital infrastructure.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Vigilance",
      description:
        "Our AI powered monitoring systems detect and neutralize threats in real time.",
    },
  ];

  const [history, setHistory] = useState<CommandEntry[]>([
    {
      command: "",
      output: [
        "Millenium Solutions EA Ltd Secure Terminal",
        "Type 'help' to view available commands.",
      ],
    },
  ]);

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, () => string[]> = {

    help: () => [
      "Available commands:",
      "help      Show commands",
      "scan      Run vulnerability scan",
      "docker    Show running containers",
      "ai        Start AI security analysis",
      "status    Show server status",
      "clear     Clear terminal",
    ],

    scan: () => [
      "Initializing vulnerability scanner...",
      "Scanning network ports 1-1024...",
      "Open ports detected: 22, 80, 443",
      "Analyzing firewall rules...",
      "No critical vulnerabilities detected.",
      "Scan completed successfully.",
    ],

    docker: () => [
      "CONTAINER ID    IMAGE                 STATUS",
      "7b29f1a2        ms-solutions/api      running",
      "8d3ac9e4        ms-solutions/ai       running",
      "92cd1a77        redis                 running",
    ],

    ai: () => [
      "Launching AI threat analysis engine...",
      "Processing network traffic patterns...",
      "Detecting anomalies...",
      "Threat probability: 0.01%",
      "System security status: SAFE",
    ],

    status: () => [
      "Server uptime: 212 days",
      "CPU load: 18%",
      "Memory usage: 46%",
      "Firewall: ACTIVE",
      "AI monitoring: ENABLED",
      "All services operational.",
    ],
  };

  const handleCommand = (cmd: string) => {

    const trimmed = cmd.trim();

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    if (commands[trimmed]) {

      setHistory((prev) => {
        const updated = [
          ...prev,
          { command: trimmed, output: commands[trimmed]() },
        ];
        return updated.slice(-8);
      });

    } else {

      setHistory((prev) => {
        const updated = [
          ...prev,
          {
            command: trimmed,
            output: [
              `Command not found: ${trimmed}`,
              "Hint: type 'help' to see available commands.",
            ],
          },
        ];
        return updated.slice(-8);
      });

    }
  };

  const submitCommand = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">

      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <SectionHeader 
          title="Why Partner With Us?" 
          subtitle="Combining engineering expertise with innovative technologies to solve complex business challenges. We are your technology partner in Africa's digital transformation."
          align="center"
          accentColor="bg-red-600"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}

          <div>

            <div className="flex items-center space-x-4 mb-6 p-4 rounded-xl bg-white/60 dark:bg-gray-800/60">

              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white">
                <span className="text-3xl font-bold">10+</span>
              </div>

              <div>
                <h3 className="text-xl font-bold">Years of Pioneering</h3>
                <p className="text-gray-500">Digital Excellence</p>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {points.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/60 dark:bg-gray-800/60 p-5 rounded-xl shadow hover:shadow-lg transition"
                >

                  <div className="text-red-500 mb-3">
                    <item.icon size={22} />
                  </div>

                  <h3 className="font-bold mb-1">{item.title}</h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* TERMINAL */}

          <div className="w-full h-[340px] rounded-2xl overflow-hidden border border-gray-700 bg-[#0f172a] shadow-xl">

            <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700">

              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              <span className="ml-4 text-xs text-gray-400 font-mono">
                root@millenium-solutions:~
              </span>

            </div>

            <div className="p-4 font-mono text-sm text-green-400 h-full overflow-hidden">

              {history.map((entry, i) => (
                <div key={i} className="mb-2">

                  {entry.command && (
                    <div>
                      <span>$ </span>
                      {entry.command}
                    </div>
                  )}

                  {entry.output.map((line, idx) => (
                    <div key={idx} className="text-gray-400">
                      {line}
                    </div>
                  ))}

                </div>
              ))}

              <form onSubmit={submitCommand} className="flex">

                <span>$</span>

                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="ml-2 flex-1 bg-transparent outline-none text-green-400"
                />

              </form>

            </div>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center italic text-gray-600 dark:text-gray-300"
        >

          <p className="max-w-2xl mx-auto border-t border-b py-4">

            For over a decade, <strong>Millenium Solutions EA Ltd</strong> has
            driven digital transformation by combining engineering expertise
            with innovative technologies to solve complex business challenges.

          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default WhyChooseUsSection;
