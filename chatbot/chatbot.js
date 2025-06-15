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

  if (msg.includes("emergency")) return "Please call the school clinic immediately or visit the health center.";
  if (msg.includes("seizure")) return "Keep the person safe, turn them on their side, and clear the area. Don't hold them down. Get help fast!";
  if (msg.includes("cut") || msg.includes("bleeding")) return "Apply pressure to the wound with a clean cloth and seek help.";
  if (msg.includes("headache")) return "Drink water, rest, and visit the clinic if it persists.";
  if (msg.includes("malaria")) return "Visit the clinic for a test. Do not self-medicate.";
  if (msg.includes("seizure")) return "Turn the person to their side, clear the area of danger, and don't hold them down. Call for help!";
if (msg.includes("faint") || msg.includes("collapsed")) return "Lay the person flat, raise their legs, and ensure fresh air. Seek medical attention.";
if (msg.includes("unconscious")) return "Call for medical help immediately. Check breathing and stay with the person.";
if (msg.includes("burn")) return "Cool the burn with running water for 10–15 minutes. Don’t apply creams or oils.";
if (msg.includes("anxiety") || msg.includes("panic")) return "Take deep breaths. You can also come in and speak to someone confidentially.";
if (msg.includes("stress")) return "Try resting or taking a walk. If it becomes overwhelming, the clinic is here to help.";
if (msg.includes("sad") || msg.includes("depressed")) return "You're not alone. We have mental health support available—please reach out.";
if (msg.includes("painkiller")) return "We can provide safe medication at the clinic. Always avoid self-medicating.";
if (msg.includes("paracetamol") || msg.includes("drug")) return "Please only take medication prescribed by a professional.";
if (msg.includes("clinic hours") || msg.includes("open")) return "The clinic is open from 9:00 AM to 4:00 PM, Monday to Friday.";
if (msg.includes("visit") || msg.includes("see doctor")) return "You can walk into the clinic during operating hours or call for assistance.";
if (msg.includes("where is the clinic")) return "The health center is located beside the student affairs building.";


  return "I'm not sure. Please visit the clinic or call the medical line for urgent care.";
}
