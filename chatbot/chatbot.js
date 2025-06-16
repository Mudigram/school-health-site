const chatContainer = document.getElementById("chatbot-container");
const chatToggle = document.getElementById("chat-toggle");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

chatToggle.onclick = () => {
  chatContainer.classList.toggle("chatbot-closed");

  // Show greeting once per session
  if (
    !sessionStorage.getItem("chatGreeted") &&
    !chatContainer.classList.contains("chatbot-closed")
  ) {
    const greetings = [
      "👋 Hello! Need help with a medical concern?",
      "💬 Hi there! I can answer health-related questions. Try me!",
      "👩‍⚕️ I'm your virtual health assistant — ask anything!",
      "📞 Need emergency tips? I’ve got you covered!",
      "🏥 Welcome! I’m here to help with school clinic questions."
    ];

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    addBotMessage(randomGreeting);
  }
};

closeChat.onclick = () => {
  chatContainer.classList.add("chatbot-closed");
  chatMessages.innerHTML = ""; // Clear messages when closed
};

sendBtn.onclick = () => handleUserInput();

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleUserInput();
});


// Simple chatbot logic
function addBotMessage(message) {
  const chatMessages = document.getElementById('chat-messages');
  const botMessage = document.createElement('div');
  botMessage.className = 'bot-message';
  botMessage.textContent = message;
  chatMessages.appendChild(botMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserInput() {
  const text = userInput.value.trim();
  if (!text) return;

  appendMessage("You", text);
  userInput.value = "";

  const reply = getBotReply(text);
  setTimeout(() => appendMessage("Mudi", reply), 600);
}

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(text) {
  const msg = text.toLowerCase();

  const responseMap = [
    { keywords: ["emergency"], response: "Please call the school clinic immediately or visit the health center." },
    { keywords: ["seizure"], response: "Keep the person safe, turn them on their side, and clear the area. Don't hold them down. Get help fast!" },
    { keywords: ["cut", "bleeding"], response: "Apply pressure to the wound with a clean cloth and seek help." },
    { keywords: ["headache"], response: "Drink water, rest, and visit the clinic if it persists." },
    { keywords: ["malaria"], response: "Visit the clinic for a test. Do not self-medicate." },
    { keywords: ["faint", "collapsed"], response: "Lay the person flat, raise their legs, and ensure fresh air. Seek medical attention." },
    { keywords: ["unconscious"], response: "Call for medical help immediately. Check breathing and stay with the person." },
    { keywords: ["burn"], response: "Cool the burn with running water for 10–15 minutes. Don’t apply creams or oils." },
    { keywords: ["anxiety", "panic"], response: "Take deep breaths. You can also come in and speak to someone confidentially." },
    { keywords: ["stress"], response: "Try resting or taking a walk. If it becomes overwhelming, the clinic is here to help." },
    { keywords: ["sad", "depressed"], response: "You're not alone. We have mental health support available—please reach out." },
    { keywords: ["painkiller"], response: "We can provide safe medication at the clinic. Always avoid self-medicating." },
    { keywords: ["paracetamol", "drug"], response: "Please only take medication prescribed by a professional." },
    { keywords: ["clinic hours", "open"], response: "The clinic is open from 9:00 AM to 4:00 PM, Monday to Friday." },
    { keywords: ["visit", "see doctor"], response: "You can walk into the clinic during operating hours or call for assistance." },
    { keywords: ["where is the clinic"], response: "The health center is located beside the student affairs building." },
    { keywords: ["sick", "not feeling well"], response: "I'm sorry to hear that. Please visit the health center during clinic hours or call for help if it's urgent." },
    { keywords: ["fever", "cold", "flu"], response: "Make sure to rest, stay hydrated, and visit the clinic for a proper diagnosis." },
    { keywords: ["vomit", "diarrhea", "stomach"], response: "Rest, drink clean water, and avoid solid food until you feel better. Visit the clinic if it continues." },
    { keywords: ["allergy", "allergic"], response: "Avoid known allergens and visit the clinic immediately if you're having a reaction." },
    { keywords: ["period", "menstrual", "cramps"], response: "If you're in discomfort, the clinic can help with pain relief and advice. You’re welcome to walk in." },
    { keywords: ["covid", "corona", "cough"], response: "If you're experiencing symptoms like cough, fever, or loss of smell, isolate and visit the clinic immediately for a test." },
    { keywords: ["vaccine", "test"], response: "You can inquire about available vaccines and tests at the clinic reception during working hours." },
    { keywords: ["appointment"], response: "Use the form on the website to book a consultation or visit the clinic directly." },
    { keywords: ["hello", "hi"], response: "Hi! How can I assist you with your health today?" },
    { keywords: ["thank you", "thanks"], response: "You're welcome! Stay safe and healthy." },
    { keywords: ["what should i do", "help me", "help"], response: "You can tell me what you're experiencing or go directly to the health center if it feels urgent." }
  ];

  for (const entry of responseMap) {
    for (const keyword of entry.keywords) {
      if (msg.includes(keyword)) {
        return entry.response;
      }
    }
  }

  return "I'm not sure. Please visit the clinic or call the medical line for urgent care.";
}

