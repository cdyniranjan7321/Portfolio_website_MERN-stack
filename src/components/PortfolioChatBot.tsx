
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2,
  Maximize2,
  Sparkles
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isError?: boolean;
}

const PortfolioChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi there! I'm Niranjan your AI assistant for this portfolio. I can tell you all about my skills, experience, projects, and how to connect with me. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Portfolio Data - Update this with your actual information
  const portfolioData = {
    name: "Niranjan Chaudhary",
    title: "Full Stack Developer",
    location: "Ranipauwa-11, Pokhara, Nepal",
    email: "cdyniranjan7321@gmail.com",
    github: "https://github.com/cdyniranjan7321",
    linkedin: "https://www.linkedin.com/in/niranjan-chaudhary-75482136a",
    resume: "/resume.pdf",
    
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
      backend: ["Node.js", "PHP", "Express.js", "MongoDB", "MySQL", "PostgreSQL"],
      tools: ["Git", "Docker", "AWS", "VS Code", "Figma"],
      languages: ["JavaScript", "TypeScript", "PHP"]
    },
    
    experience: [
      {
        title: "Full Stack Developer",
        company: "Bytesoft Nepal",
        period: "2024 - Present",
        description: "Leading full-stack development, building scalable React applications, Building and maintaining large-scale Ecommerce and pets shop, Business Appointment system, Barber shop web applications using React, Node.js, and MongoDB. Led migration of legacy systems to modern MERN architecture. Also works on cPanel for Deploying and Hosting the web applications. mentoring junior developers."
      },
      {
        title: "React Developer",
        company: "Aakar eSolution",
        period: "2023 - 2024",
        description: "Developed full-stack web applications, integrated REST APIs, optimized database queries. Developed Quiz App with responsive, high-performance UIs for client projects. Improved page load times by 40% through code splitting and optimization."
      }
    ],
    
    projects: [
      {
        name: "E-Commerce Platform",
        tech: "React, TailwindCSS, Node.js, Express.js, MongoDB, Redux, Cloudinary, SMTP Emails",
        description: "Full-featured Pets Shop online store with cart, payments, admin dashboard, and real-time inventory management."
      },
      {
        name: "Barber-shop",
        tech: "Next.js, Express.js, Socket.io",
        description: "A barber shop website with online Appointment booking, service listings, staffselection, Time&Date selection and customer reviews"
      },
      {
        name: "Business Appointments Dashboard",
        tech: "React, TypeScript, Node.js, PostgreSQL, Chart.js",
        description: "Analytics dashboard integrating multiple social APIs with data visualization and automated reporting. In this dashboard we have website builder for automated website creation and management."
      },
      {
        name: "rasa-restaurant-app",
        tech: "React, Socket.io, Express, MongoDB, WebRTC",
        description: "A restaurant website with real-time order tracking, menu management, and customer reviews. It also has a chatbot for customer support and reservation management."
      },
      {
        name: "Blog & Consultancy CMS",
        tech: "TypeScript.js, Node.js, MongoDB, Cloudinary",
        description: "Consultancy website with Content management system"
      },
      {
        name: "Portfolio Website",
        tech: "React, Tailwind, Framer Motion",
        description: "Modern portfolio website with AI chatbot integration."
      },
      {
        name: "Task Management App",
        tech: "Next.js, PostgreSQL, Prisma",
        description: "Collaborative task management tool with real-time updates."
      }
    ],
    
    education: {
      degree: "Bachelor's in Computer Science and Information Technology(BSC.CSIT)",
      university: "Soch College of IT",
      year: "2024",
      achievements: "Graduated with honors, Dean's list"
    },
    
    contact: {
      email: "cdyniranjan7321@gmail.com",
      github: "https://github.com/cdyniranjan7321",
      linkedin: "https://www.linkedin.com/in/niranjan-chaudhary-75482136a",
      twitter: "https://x.com/nsrrfc"
    }
  };

  // Smart response system
  const getSmartResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    // Greetings
    if (msg.match(/^(hi|hello|hey|namaste|hola|greetings)/i)) {
      const greetings = [
        `Hey there! 👋 Great to meet you! I'm excited to tell you about ${portfolioData.name}, a passionate ${portfolioData.title}. What would you like to know?`,
        `Hello! 😊 Welcome! ${portfolioData.name} is an amazing ${portfolioData.title}. Ask me about skills, projects, experience, or how to connect!`,
        `Hi! 👋 Thanks for stopping by! I can share all about ${portfolioData.name}'s journey, tech stack, and achievements. What interests you?`
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Who are you / About me
    if (msg.match(/(who are you|about you|tell me about yourself|introduce yourself)/i)) {
      return `I'm ${portfolioData.name}, a ${portfolioData.title} from ${portfolioData.location}. 🚀 I specialize in building beautiful, responsive web applications with modern technologies. I'm passionate about creating seamless user experiences and writing clean, maintainable code. Want to know about my skills or experience? 😊`;
    }
    
    // Skills
    if (msg.match(/(skills|technologies|tech stack|what can you do|programming languages|tools)/i)) {
      return `💻 Here's my tech stack:\n\nFrontend: ${portfolioData.skills.frontend.join(', ')}\nBackend: ${portfolioData.skills.backend.join(', ')}\nTools & Others: ${portfolioData.skills.tools.join(', ')}\nLanguages: ${portfolioData.skills.languages.join(', ')}\n\nI'm always learning new technologies! Which area interests you most? 🎯`;
    }
    
    // Experience / Work history
    if (msg.match(/(experience|work history|job|career|where have you worked|professional)/i)) {
      let response = "💼 Work Experience:\n\n";
      portfolioData.experience.forEach((exp, idx) => {
        response += `${exp.title} at ${exp.company}\n📅 ${exp.period}\n${exp.description}\n\n`;
      });
      response += "Each role taught me valuable lessons in software architecture, team collaboration, and delivering quality products. Want to know about my projects? 🚀";
      return response;
    }
    
    // Projects
    if (msg.match(/(projects|portfolio|work samples|what have you built|show me your work)/i)) {
      let response = "🎨 Featured Projects:\n\n";
      portfolioData.projects.forEach((project, idx) => {
        response += `${project.name}\n🔧 ${project.tech}\n📝 ${project.description}\n\n`;
      });
      response += "Each project showcases my problem-solving skills and attention to detail. Want to see more details about any specific project? 🔍";
      return response;
    }
    
    // Education
    if (msg.match(/(education|degree|university|college|studied|qualification)/i)) {
      return `🎓 Education:\n\n${portfolioData.education.degree}\n${portfolioData.education.university}\n📅 ${portfolioData.education.year}\n✨ ${portfolioData.education.achievements}\n\nContinuous learning is my mantra! I regularly take online courses and stay updated with industry trends. 📚`;
    }
    
    // Contact / Hire / Reach out
    if (msg.match(/(contact|reach|email|get in touch|hire|work with you|collaborate)/i)) {
      return `📬 Let's Connect!\n\nYou can reach ${portfolioData.name} through:\n\n📧 Email: ${portfolioData.contact.email}\n💼 LinkedIn: ${portfolioData.contact.linkedin}\n🐙 GitHub: ${portfolioData.contact.github}\n\nI'm open to freelance opportunities, collaborations, and interesting projects! Feel free to reach out anytime! 🚀`;
    }
    
    // Resume / CV
    if (msg.match(/(resume|cv|download resume|hire|qualifications)/i)) {
      return `📄 Resume/CV\n\nYou can download my detailed resume here: ${portfolioData.resume}\n\nIt includes comprehensive information about my experience, skills, education, and achievements. Feel free to reach out if you have any questions! 📎`;
    }
    
    // GitHub
    if (msg.match(/(github|code repository|open source)/i)) {
      return `🐙 GitHub Profile:\n\nCheck out my code at: ${portfolioData.github}\n\nI regularly contribute to open source and showcase my personal projects there. You'll find repositories for web apps, libraries, and coding experiments! ⭐`;
    }
    
    // LinkedIn
    if (msg.match(/(linkedin|professional network|connect)/i)) {
      return `💼 LinkedIn Profile:\n\nConnect with me professionally: ${portfolioData.linkedin}\n\nI share tech insights, project updates, and professional achievements there. Let's network! 🤝`;
    }
    
    // Availability / Freelance
    if (msg.match(/(available|freelance|open to work|hiring|looking for work)/i)) {
      return `✅ Availability:\n\nI'm currently open to:\n• 💼 Full-time opportunities\n• 🎯 Freelance projects\n• 🤝 Collaborations\n• 💡 Tech consulting\n\nIf you have an interesting opportunity, let's talk! Send me a message through the contact section. 🚀`;
    }
    
    // Tech stack preferences
    if (msg.match(/(favorite tech|preferred framework|what do you like|best at)/i)) {
      return `🎯 Tech Preferences:\n\nI particularly enjoy working with:\n• React/Next.js for frontend magic ✨\n• TypeScript for type safety 🔒\n• Node.js/Express.js for backend logic ⚙️\n• Tailwind CSS for beautiful UIs 🎨\n\nBut I'm always excited to learn new technologies! What tech stack do you work with? 💬`;
    }
    
    // Hobbies / Interests
    if (msg.match(/(hobby|interest|outside work|free time|passion)/i)) {
      return `🌟 Beyond Coding:\n\nWhen I'm not at the computer, you can find me:\n• 📚 Reading tech books and articles\n• 🎮 Playing strategy games\n• 🏔️ Trekking in the mountains\n• ☕ Exploring coffee shops\n• 🎧 Listening to podcasts\n\nWork-life balance is important! What are your hobbies? 😊`;
    }
    
    // Achievements / Awards
    if (msg.match(/(achievement|award|recognition|milestone)/i)) {
      return `🏆 Key Achievements:\n\n• 🥇 Hackathon Winner 2023\n• 📝 Published technical articles\n• 🎯 Completed 50+ projects\n• 🚀 Contributed to open source\n• 📈 Grew user base by 200%\n\nI'm proud of these accomplishments and always aiming higher! 🎯`;
    }
    
    // Thank you
    if (msg.match(/(thank|thanks|appreciate)/i)) {
      return `You're very welcome! 🙏 It's my pleasure to help. Is there anything else you'd like to know about ${portfolioData.name} or the portfolio? Feel free to ask! 😊`;
    }
    
    // Goodbye
    if (msg.match(/(bye|goodbye|see you|farewell)/i)) {
      return `Thanks for chatting! 👋 Feel free to come back anytime if you have more questions. Have a great day! 🌟\n\nDon't forget to check out the projects section and feel free to reach out through the contact form! 📬`;
    }
    
    // Help / What can you do
    if (msg.match(/(help|what can you do|options|commands)/i)) {
      return `🤖 What I can help you with:\n\n• 📝 About - Learn about me\n• 💻 Skills - Tech stack overview\n• 💼 Experience - Work history\n• 🎨 Projects - Portfolio showcase\n• 🎓 Education - Academic background\n• 📬 Contact - How to reach me\n• 📄 Resume - Download CV\n\nJust ask naturally! For example: "Tell me about your skills" or "Show me your projects". What would you like to know? 🚀`;
    }
    
    // Default response for unknown queries
    const defaultResponses = [
      `Great question! 🤔 Let me help you with that. You can ask me about my skills, experience, projects, education, or how to contact me. What specific information are you looking for?`,
      
      `I'd love to tell you more! 😊 Are you interested in:\n\n• My technical skills\n• Work experience\n• Featured projects\n• Education background\n• Contact information\n\nJust let me know what you'd like to learn about! 🎯`,
      
      `Thanks for asking! 🚀 I can share details about ${portfolioData.name}'s professional journey, tech expertise, and portfolio. Could you be more specific about what you'd like to know?`
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (isProcessing) return;
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage.trim();
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userMsg,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsProcessing(true);
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getSmartResponse(userMsg);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setIsProcessing(false);
    }, 500 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isProcessing) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-[9999] md:bottom-12 md:right-6">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
        >
          <MessageCircle className="h-6 w-6 text-white transition-transform group-hover:rotate-12 md:h-7 md:w-7" />
          <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-yellow-400 animate-pulse" />
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '80vh'
            }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className={`fixed bottom-20 right-4 z-[9999] w-[calc(100vw-2rem)] max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900 md:bottom-24 md:right-6 md:w-[420px] ${
              isMinimized ? 'h-auto' : 'h-[80vh] max-h-[600px]'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 bg-white/20">
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-semibold">Niranjan AI Assistant</h3>
                    <p className="text-[10px] opacity-90">Online • Ask me anything!</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="rounded-lg p-1.5 transition-colors hover:bg-white/20"
                  >
                    {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-1.5 transition-colors hover:bg-white/20"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800" style={{ height: 'calc(100% - 120px)' }}>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    >
                      <div className={`flex max-w-[85%] gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="flex-shrink-0">
                          <div className={`flex h-7 w-7 items-center justify-center rounded-full ${
                            message.sender === 'bot' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-purple-100 dark:bg-purple-900'
                          }`}>
                            {message.sender === 'bot' ? (
                              <Bot className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                            ) : (
                              <User className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                            )}
                          </div>
                        </div>
                        <div>
                          <div
                            className={`rounded-lg p-3 ${
                              message.sender === 'user'
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                : message.isError
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 shadow-sm'
                            }`}
                          >
                            <div className="whitespace-pre-wrap text-sm leading-relaxed">
                              {message.text}
                            </div>
                          </div>
                          <div className="mt-1 px-1">
                            <span className="text-[10px] text-gray-400 dark:text-gray-500">
                              {formatTime(message.timestamp)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start animate-in fade-in duration-300">
                      <div className="flex gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <Bot className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-gray-700">
                          <div className="flex gap-1">
                            <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600" style={{ animationDelay: '0ms' }} />
                            <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600" style={{ animationDelay: '150ms' }} />
                            <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area - Always visible */}
                <div className="border-t border-gray-200 p-2 bg-white dark:border-gray-700 dark:bg-gray-900">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Ask me anything about skills, projects, experience... 💬"
                      className="flex-1 text-sm dark:bg-gray-800 dark:border-gray-700"
                      disabled={isProcessing}
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="default"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                      disabled={!inputMessage.trim() || isProcessing}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-2 text-center text-[10px] text-gray-400 dark:text-gray-500">
                    AI Assistant • Ask anything about my work
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

{/* css code */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default PortfolioChatBot;