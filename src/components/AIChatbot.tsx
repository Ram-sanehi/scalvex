import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, X, Send, Bot, User, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message from Ram's assistant
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "Hi there! I'm Ram's AI growth assistant. I can help answer questions about Scalvex's web speed optimizations, local SEO systems, pricing, or our process. What are you looking to improve on your current website?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  const getBotResponse = (input: string): string => {
    const query = input.toLowerCase();

    if (query.includes('speed') || query.includes('performance') || query.includes('fast') || query.includes('slow') || query.includes('load')) {
      return "We build custom, lightweight React and static codebases with zero technical bloat. By compressing assets, deferring non-essential script loads, and targeting Core Web Vitals, we regularly achieve sub-second load times. Speed directly translates to lower bounce rates and higher Google search rankings.";
    }
    
    if (query.includes('price') || query.includes('pricing') || query.includes('cost') || query.includes('rate') || query.includes('budget') || query.includes('charge')) {
      return "We operate on a project-based pricing model that reflects scope, complexity, and long-term business value. We don't take on rushed templates—every build is custom-designed to generate inquiries. Most projects range between $5k and $25k. We'll be happy to prepare a free custom estimate after reviewing your site.";
    }

    if (query.includes('process') || query.includes('work') || query.includes('how you') || query.includes('method') || query.includes('collaboration')) {
      return "Our process is fully collaborative and founder-led. You work directly with me (Ram) from discovery to launch. We don't pass you off to account managers. We plan, design, code, and optimize in transparent milestones. Check out our 'Our Process' page for a detailed step-by-step breakdown!";
    }

    if (query.includes('seo') || query.includes('local') || query.includes('visibility') || query.includes('search') || query.includes('rank') || query.includes('google')) {
      return "We specialize in both B2B technical SEO and Local Visibility systems. Most service businesses fail because they lack neighborhood pages or structured data for map pack rankings. We optimize your Google Business profile structure and build local trust page signals to make sure you capture regional leads.";
    }

    if (query.includes('contact') || query.includes('book') || query.includes('start') || query.includes('project') || query.includes('audit') || query.includes('call') || query.includes('schedule')) {
      return "The best way to start is to request a free 30-minute growth assessment. We'll audit your speed, local visibility, and layout. You can submit details directly on our Contact page, or choose a slot on our booking calendar. Head over to scalvex.in/contact to pick a time!";
    }

    if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('greet')) {
      return "Hello! Hope your week is going well. What questions can I answer about Scalvex's high-performance web growth systems?";
    }

    return "That's a great question. We focus heavily on custom web development, speed optimization, B2B lead generation, and founder-led collaboration. Would you like to check out our process, see some client case studies, or request a free speed and visibility audit?";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural thinking delay
    setTimeout(() => {
      const responseText = getBotResponse(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSuggestedClick = (text: string) => {
    handleSend(text);
  };

  return (
    <div className="fixed bottom-36 right-6 z-50 font-sans">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent border border-accent/30 text-white flex items-center justify-center shadow-xl hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Bot className="h-5 w-5 sm:h-6 sm:w-6" />}
        
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white items-center justify-center font-bold">1</span>
          </span>
        )}

        <span className="hidden sm:inline-block absolute right-full mr-3 bg-card text-foreground text-xs font-semibold px-3 py-1.5 rounded-lg border border-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          AI Assistant
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-96 h-[500px] border border-border/50 rounded-3xl bg-card/95 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 bg-accent/5 border-b border-border/45 flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                  Scalvex AI 
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </h4>
                <p className="text-[11px] text-muted-foreground font-medium">Founder Assistant • Online</p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)} 
              className="text-muted-foreground hover:text-foreground p-1.5 rounded-full hover:bg-muted/40 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                  msg.sender === 'user' 
                    ? 'bg-accent text-white' 
                    : 'bg-accent/10 border border-accent/20 text-accent'
                }`}>
                  {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>

                <div className={`p-3.5 rounded-2xl max-w-[75%] text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-accent text-white rounded-tr-none'
                    : 'bg-muted/40 border border-border/30 text-foreground rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 flex-row">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs">
                  <Bot className="h-4 w-4 animate-bounce" />
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/30 text-foreground rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-4 py-2 bg-muted/10 border-t border-border/20 flex flex-wrap gap-2">
            <button
              onClick={() => handleSuggestedClick("How do you optimize site speed?")}
              className="text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-border/50 hover:border-accent/30 bg-card hover:bg-accent/5 hover:text-accent transition-all text-muted-foreground"
            >
              🚀 Optimization Speed
            </button>
            <button
              onClick={() => handleSuggestedClick("How does your pricing work?")}
              className="text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-border/50 hover:border-accent/30 bg-card hover:bg-accent/5 hover:text-accent transition-all text-muted-foreground"
            >
              💵 Estimated Pricing
            </button>
            <button
              onClick={() => handleSuggestedClick("Tell me about your process")}
              className="text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-border/50 hover:border-accent/30 bg-card hover:bg-accent/5 hover:text-accent transition-all text-muted-foreground"
            >
              📋 Process & Workflow
            </button>
          </div>

          {/* Input Panel */}
          <div className="p-4 border-t border-border/45 bg-muted/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about speed, SEO, pricing..."
                className="rounded-xl border-border/40 focus-visible:ring-accent/25 focus-visible:border-accent bg-card text-xs sm:text-sm h-10"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                className="bg-accent hover:bg-accent/90 text-white rounded-xl h-10 w-10 flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AIChatbot;
