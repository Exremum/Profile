document.addEventListener("DOMContentLoaded", () => {
    const chats = document.querySelectorAll(".chat-list li");
    const chatHeader = document.getElementById("chat-header");
    const messagesContainer = document.getElementById("messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    let selectedChat = null;
    let chatHistory = {};

    chats.forEach(chat => {
        chat.addEventListener("click", () => {
            selectedChat = chat.dataset.id;
            chatHeader.textContent = chat.textContent;
            messagesContainer.innerHTML = chatHistory[selectedChat] || "";
        });
    });

    function sendMessage() {
        if (!selectedChat || messageInput.value.trim() === "") return;
        const message = `<div><strong>Вы:</strong> ${messageInput.value}</div>`;
        messagesContainer.innerHTML += message;
        chatHistory[selectedChat] = messagesContainer.innerHTML;
        messageInput.value = "";
    }

    sendButton.addEventListener("click", sendMessage);
    
    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});