import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  id: string;
  from: "debbie" | "user";
  text: string;
};

const FAQ_ANSWERS: Record<string, string> = {
  "What's SITEH3RO?":
    "SITEH3RO is Unibor's proprietary coating that gives tools up to 75% longer life compared to standard HSS. All SITEH3RO tools are impact-wrench compatible with hex shanks — built for real jobsite conditions. They're designed for steel erectors, fabricators, and maintenance crews who need tools that won't quit. 🔩",
  "Shipping info":
    "We ship in 5–10 business days from US warehouses. You'll get tracking info as soon as your order ships. If you need something faster, drop us a line and we'll see what we can do!",
  "Returns & warranty":
    "We offer 14-day free returns on all products — full refund, no questions asked, as long as the item is unused and in original packaging. Returns between 15–45 days get a 50% refund if the item is in resalable condition. Every Unibor product also comes with a manufacturer warranty.",
  "Yard Crew discount":
    "Join The Yard Crew for just $25 lifetime and get 15% off EVERY order + FREE shipping — forever! You also get 2 free SITEH3RO holders, priority support, and exclusive deals. 🔩\n\n→ Sign up at #/members",
  "Which mag drill for me?":
    "Great question! Here's a quick guide:\n\n• Light/occasional work → CMD350 ($793.99) — 1200W, industry-leading 7\" stroke\n• General structural work → E4000 ($1,045.99) — DrillSmart, 2-speed gearbox\n• Tight spaces → E5000 LP ($1,725.99) — world's largest capacity low profile\n• Heavy-duty / auto drilling → E5000 Auto ($2,170.99) — fully automatic\n• Maximum capacity → E8000 ($2,822.99) — 4\" cutter, 2000W\n\nYard Crew members get 15% off these prices! What kind of work are you doing? 🔩",
  "Talk to a human":
    "You bet! Here's how to reach our team:\n\n📧 Email: texasholemakers@gmail.com\n\nWe typically respond within 1–2 business days. We'd love to hear from you!",
};

const QUICK_QUESTIONS = Object.keys(FAQ_ANSWERS);

const KEYWORD_MAP: Array<{ keywords: string[]; question: string }> = [
  { keywords: ["siteh3ro", "coating", "impact", "hex"], question: "What's SITEH3RO?" },
  { keywords: ["ship", "shipping", "delivery", "track", "arrive"], question: "Shipping info" },
  { keywords: ["return", "warranty", "refund", "broken", "defect"], question: "Returns & warranty" },
  { keywords: ["discount", "yard crew", "member", "save", "percent", "15%"], question: "Yard Crew discount" },
  { keywords: ["mag drill", "magnetic drill", "which drill", "recommend", "cmd", "e3000", "e4000", "e5000", "e6000", "e8000"], question: "Which mag drill for me?" },
  { keywords: ["human", "contact", "email", "talk", "help", "support"], question: "Talk to a human" },
];

function matchKeywords(input: string): string | null {
  const lower = input.toLowerCase();
  for (const entry of KEYWORD_MAP) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.question;
    }
  }
  return null;
}

export function DrillbitDebbie() {
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem("debbieOpen") === "true";
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      from: "debbie",
      text: "Hey sugar! 🔩 I'm Drillbit Debbie. What can I help you with?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sessionStorage.setItem("debbieOpen", String(isOpen));
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function addDebbieResponse(answer: string) {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `debbie-${Date.now()}`, from: "debbie", text: answer },
      ]);
    }, 500);
  }

  function handleQuickQuestion(question: string) {
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, from: "user", text: question },
    ]);
    addDebbieResponse(FAQ_ANSWERS[question]);
  }

  function handleSend() {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, from: "user", text: trimmed },
    ]);
    setInputValue("");

    const matched = matchKeywords(trimmed);
    if (matched) {
      addDebbieResponse(FAQ_ANSWERS[matched]);
    } else {
      addDebbieResponse(
        "Hmm, I'm not sure about that one, sugar. Try emailing us at texasholemakers@gmail.com or pick one of the options above! 🔩"
      );
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // Collapsed state
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 group"
        aria-label="Open Drillbit Debbie chat"
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C4550A] shadow-lg bg-[#0F2439] hover:scale-105 transition-transform">
            <img
              src="/images/mascot.png"
              alt="Drillbit Debbie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-8 right-0 bg-[#C4550A] text-white text-xs font-medium px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Ask Debbie!
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-[#C4550A] rotate-45" />
          </div>
        </div>
      </button>
    );
  }

  // Expanded state
  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 sm:w-80 max-sm:left-4 max-sm:w-auto h-[450px] max-sm:h-[60vh] flex flex-col rounded-xl shadow-2xl overflow-hidden border border-[#C4550A]/30">
      {/* Header */}
      <div className="bg-[#0F2439] px-4 py-3 flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C4550A]/50 shrink-0">
          <img
            src="/images/mascot.png"
            alt="Drillbit Debbie"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold leading-tight">Drillbit Debbie</p>
          <p className="text-white/60 text-xs">Your tool expert</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/60 hover:text-white transition-colors"
          aria-label="Close chat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto bg-[#0F2439]/95 p-3 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                msg.from === "user"
                  ? "bg-[#C4550A] text-white rounded-br-none"
                  : "bg-white/10 text-white/90 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 px-3 py-2 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {/* Quick questions */}
        {messages.length <= 1 && !isTyping && (
          <div className="space-y-1.5 pt-1">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleQuickQuestion(q)}
                className="block w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 text-white/80 text-xs rounded-lg transition-colors border border-white/10"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div className="bg-[#0F2439] border-t border-white/10 p-2 flex gap-2 shrink-0">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 bg-white/10 text-white text-sm px-3 py-2 rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[#C4550A]/50"
        />
        <Button
          size="icon"
          onClick={handleSend}
          className="bg-[#C4550A] hover:bg-[#C4550A]/80 h-9 w-9 shrink-0"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
