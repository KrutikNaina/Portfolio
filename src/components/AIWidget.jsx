import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Sparkles, Send, X, Mic } from "lucide-react";

export default function AIWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hello! I'm Krutik Assistant 😊 How can I help you?" },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);

    const inputRef = useRef(null);

    // --------------------------------------
    // VOICE INPUT (Speech-to-Text)
    // --------------------------------------
    const startVoiceInput = () => {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Voice input not supported in your browser.");
            return;
        }

        const SpeechRecognition = window.webkitSpeechRecognition;
        const recog = new SpeechRecognition();

        recog.lang = "en-US";
        recog.continuous = false;
        recog.interimResults = false;

        recog.start();

        recog.onresult = (event) => {
            const voiceText = event.results[0][0].transcript;
            setInput(voiceText);

            // Auto-send the message from voice
            setTimeout(() => {
                sendMessage(voiceText);
            }, 200);
        };
    };

    // --------------------------------------
    // SMART RESPONSES (Greetings + Krutik info)
    // --------------------------------------
    const greetings = [
        { keywords: ["hello", "hi", "hey"], answer: "Hello 👋 How can I help you today?" },
        { keywords: ["good morning"], answer: "☀️ Good Morning!" },
        { keywords: ["good evening"], answer: "🌙 Good Evening! How can I assist?" },
        { keywords: ["bye"], answer: "Goodbye 👋 Take care!" },
        { keywords: ["thanks"], answer: "You're welcome! 😊" },
    ];

    const profileData = [
        {
            keywords: ["krutik", "naina", "who"],
            answer: "I am **Krutik Naina**, Full-Stack Developer (MERN + Django + AI).",
        },
        {
            keywords: ["email", "mail"],
            answer: "📧 Email: **krutiknaina@gmail.com**",
        },
        {
            keywords: ["github"],
            answer: "🔗 GitHub: https://github.com/KrutikNaina",
        },
        {
            keywords: ["linkedin"],
            answer: "🔗 LinkedIn: https://linkedin.com/in/krutiknaina",
        },
        {
            keywords: ["portfolio", "website"],
            answer: "🌐 Portfolio: https://krutiknaina.com",
        },
        {
            keywords: ["education"],
            answer:
                "🎓 MCA (2024–2026)\n🎓 BCA (2022–2024)\n🏫 HSC (2020–2022)",
        },
        {
            keywords: ["project"],
            answer:
                "🧠 VedAI – https://vedai.krutiknaina.com\n" +
                "📦 Scanventory – https://smart-inventory-one.vercel.app\n" +
                "💼 SkillHub – GitHub\n" +
                "👨‍💻 QR Employee System\n" +
                "🐞 Pest Control Website",
        },
    ];

    const portfolioQA = [
        {
            keywords: ["your skills", "skills", "tech stack"],
            answer: "My core skills: React, Node.js, Express, MongoDB, Django, REST APIs, and AI integrations (Gemini API)."
        },
        {
            keywords: ["frontend", "ui", "ux"],
            answer: "I focus on clean UI, responsive design, animations, mobile-first development, and accessibility."
        },
        {
            keywords: ["backend"],
            answer: "My backend expertise includes Node.js, Express, Django, JWT auth, middleware, API design, and database modeling."
        },
        {
            keywords: ["database"],
            answer: "I work with MongoDB, MySQL, PostgreSQL, and SQLite. I design normalized schemas and use indexing for performance."
        },
        {
            keywords: ["best project", "top project", "favourite project"],
            answer: "My top projects are VedAI, SkillHub, QR Employee System, and Scanventory."
        },
        {
            keywords: ["vedai"],
            answer: "VedAI is an AI chatbot based on Bhagavad Gita + Vedas with Rashi predictions, Choghadiya, and life guidance. Built using Django + React + Gemini API."
        },
        {
            keywords: ["skillhub"],
            answer: "SkillHub is a digital skill portfolio where users showcase projects, track progress, gain milestones, and collaborate."
        },
        {
            keywords: ["qr system", "employee system"],
            answer: "The QR Employee System scans employee cards to show details, mark attendance, and manage employee data efficiently."
        },
        {
            keywords: ["experience"],
            answer: "I have hands-on experience building full-stack web apps, AI chatbots, dashboards, REST APIs, and authentication systems."
        },
        {
            keywords: ["why hire you", "hire"],
            answer: "I solve real problems, deliver fast, write clean code, and build production-ready applications with modern technologies."
        },
        {
            keywords: ["strengths"],
            answer: "My strengths are fast learning, clean UI development, optimized backend logic, and strong debugging skills."
        },
        {
            keywords: ["weakness"],
            answer: "Sometimes I spend too much time perfecting UI/UX, but I balance it by prioritizing features first."
        },
        {
            keywords: ["what you know", "knowledge"],
            answer: "I know frontend, backend, databases, deployment, AI integration, API development, and project structuring."
        },
        {
            keywords: ["deployment"],
            answer: "I deploy apps on Vercel, Netlify, Firebase, Render, and Railway, using CI/CD and environment variables."
        },
        {
            keywords: ["performance"],
            answer: "I optimize apps using lazy loading, caching, memoization, compression, and database indexing."
        },
        {
            keywords: ["security"],
            answer: "I use JWT authentication, hashing, CSRF protection, rate limiting, and validation to secure applications."
        },
        {
            keywords: ["ui design inspiration", "design idea"],
            answer: "I follow a minimal, modern UI style with soft animations, clean typography, and a dark/light theme approach."
        },
        {
            keywords: ["how you work", "workflow"],
            answer: "My workflow: Plan → UI/UX → APIs → Frontend → Testing → Deployment → Monitoring."
        },
        {
            keywords: ["tools"],
            answer: "I use VS Code, GitHub, Postman, Figma, MongoDB Compass, Docker, and Chrome DevTools."
        },
        {
            keywords: ["future goals", "goal"],
            answer: "My goals include mastering AI-integrated systems, scaling full-stack apps, and contributing to open-source."
        }
    ];


    const fallbackUnknown =
        "I can answer questions about Krutik — his skills, projects, education, or contact info 😊";

    const findLocalAnswer = (text) => {
        const lower = text.toLowerCase();
        for (const g of greetings) if (g.keywords.some((k) => lower.includes(k))) return g.answer;
        for (const p of profileData) if (p.keywords.some((k) => lower.includes(k))) return p.answer;
        for (const p of portfolioQA) if (p.keywords.some((k) => lower.includes(k))) return p.answer;

        return fallbackUnknown;
    };

    // --------------------------------------
    // SEND MESSAGE
    // --------------------------------------
    const sendMessage = async (overrideText = null) => {
        const finalText = overrideText || input.trim();
        if (!finalText) return;

        const msg = { from: "user", text: finalText };
        setMessages((m) => [...m, msg]);
        setInput("");

        setTyping(true);

        let response = findLocalAnswer(finalText);

        try {
            const r = await axios.post("/api/ai/reply", { prompt: finalText });
            response = r?.data?.reply ?? response;
        } catch { }

        setTimeout(() => {
            setTyping(false);
            setMessages((m) => [...m, { from: "bot", text: response }]);
        }, 700);
    };

    // --------------------------------------
    // ENTER KEY → SEND MESSAGE
    // shift+enter → new line
    // --------------------------------------
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // --------------------------------------
    // CHAT ICON (premium)
    // --------------------------------------
    if (!open)
        return (
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-1 right-6 z-[9999] p-4 rounded-full bg-gradient-to-r from-[#00ffff] to-[#9900ff] shadow-[0_0_20px_#00ffff50] border border-white/20 hover:scale-110 transition animate-pulse"
            >
                <Sparkles className="text-black" size={26} />
            </button>
        );

    // --------------------------------------
    // CHAT WINDOW UI
    // --------------------------------------
    return (
        <div className="fixed bottom-6 right-6 z-[9999] w-80 md:w-96 bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="flex justify-between items-center px-4 py-3 bg-white/10 border-b border-white/10">
                <h3 className="text-white font-semibold flex items-center gap-2">
                    <Sparkles size={16} className="text-[#00ffff]" /> Krutik Assistant
                </h3>
                <button onClick={() => setOpen(false)}>
                    <X className="text-neutral-300 hover:text-white" />
                </button>
            </div>

            {/* MESSAGES */}
            <div className="max-h-64 overflow-y-auto px-4 py-3 space-y-3">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={`max-w-[80%] p-3 rounded-xl text-sm ${m.from === "bot"
                            ? "bg-white/10 text-white"
                            : "bg-[#00ffff]/20 text-white ml-auto"
                            }`}
                    >
                        {m.text}
                    </div>
                ))}

                {typing && (
                    <div className="bg-white/10 text-white w-12 p-2 rounded-xl animate-pulse">
                        ...
                    </div>
                )}
            </div>

            {/* INPUT BAR */}
            <div className="p-3 border-t border-white/10 bg-white/5">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 border border-white/20">

                    {/* Voice */}
                    <button
                        onClick={startVoiceInput}
                        className="p-2 rounded-full bg-[#00ffff]/20 text-white hover:bg-[#00ffff]/30 transition"
                        title="Voice Input"
                    >
                        <Mic size={16} />
                    </button>

                    {/* Input field */}
                    <textarea
                        ref={inputRef}
                        className="flex-1 bg-transparent text-white outline-none placeholder-neutral-300 resize-none h-8 pt-1"
                        placeholder="Speak or type..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    {/* Send */}
                    <button
                        onClick={() => sendMessage()}
                        className="p-2 rounded-full bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-black shadow hover:scale-105 transition"
                    >
                        <Send size={16} />
                    </button>

                </div>
            </div>
        </div>
    );
}
