import React, { useState } from "react";
import aiRobot from "../../constants/aiRobot";
import { styles } from "../../styles";
import { SectionWrapper } from "../../wrapper";

const Chatbot = () => {
    const [chat, setChat] = useState([]); // Chat history
    const [userInput, setUserInput] = useState(""); // User's typed or selected message
    const [showChoices, setShowChoices] = useState(true); // Controls visibility of choices
    const [isThinking, setIsThinking] = useState(false); // Controls "thinking" animation
    const [recommendations, setRecommendations] = useState([]); // Recommendation questions

    // Handle when user sends a message
    const handleSendMessage = () => {
        if (userInput.trim()) {
            const newChat = [...chat, { sender: "User", message: userInput }]; // Add user's message to chat
            setChat(newChat);

            setIsThinking(true);

            // Simulate AI thinking and delay the response
            setTimeout(() => {
                const aiResponse = generateAIResponse(userInput);
                setChat((prevChat) => [...prevChat, { sender: "Helena", message: aiResponse }]); // Add AI's response to chat
                setIsThinking(false); // Stop "thinking" animation
            }, 2000); // 2-second delay for thinking

            setUserInput(""); // Clear the input field
            setRecommendations([]); // Hide recommendations
        }
    };

    // Generate AI Response based on user input
    const generateAIResponse = (question) => {
        const match = aiRobot.find((item) =>
            question.toLowerCase().includes(item.type.toLowerCase())
        );
        return match
            ? match.message
            : "I'm sorry, I don't have information on that right now.";
    };

    // Handle selecting a predefined question
    const handleSelectQuestion = (question) => {
        setUserInput(question);
        setRecommendations([]); // Hide recommendations
        handleSendMessage();
    };

    // Handle input change and provide recommendations
    const handleInputChange = (e) => {
        const input = e.target.value;
        setUserInput(input);

        if (input.trim().length > 0) {
            const filteredRecommendations = aiRobot
                .filter((item) =>
                    item.type.toLowerCase().includes(input.toLowerCase())
                )
                .map((item) => item.type);
            setRecommendations(filteredRecommendations);
        } else {
            setRecommendations([]);
        }
    };

    // Show recommendations on input focus
    const handleInputFocus = () => {
        if (!userInput.trim()) {
            const allRecommendations = aiRobot.map((item) => item.type);
            setRecommendations(allRecommendations);
        }
    };

    return (
        <div className="h-screen flex flex-col">
            {/* Header */}
            <p id="helena" className={styles.paragraphSubText}>Our Artificial Intelligence</p>
            <h2 className={`${styles.headText} highlight-border`}>
                <span className="title-with-line">Helena</span>
            </h2>
            <p className={`${styles.paragraphSubTextLower} mb-5`}>
                Empowering lawyers with tools to simplify their practice and assisting
                students in navigating their academic and legal journeys.
            </p>

            {/* Chat Window */}
            <div className="w-full max-w-[900px] mx-auto border-2 shadow-md rounded-lg p-4 mb-4 flex-grow overflow-y-auto">
                {chat.length > 0 ? (
                    chat.map((chatItem, index) => (
                        <div
                            key={index}
                            className={`chat-message ${
                                chatItem.sender === "User"
                                    ? "bg-slate-100 text-black self-end"
                                    : "self-start"
                            } px-4 py-2 rounded-md mb-2 shadow-sm`}
                        >
                            <strong>{chatItem.sender}:</strong> {chatItem.message}
                        </div>
                    ))
                ) : (
                    <div className="text-gray-400 text-left">
                        No messages yet. Start by asking a question!
                    </div>
                )}
                {isThinking && (
                    <div className="chat-message bg-gray-200 text-gray-600 self-start px-4 py-2 rounded-md mb-2 shadow-sm italic">
                        Helena is typing...
                    </div>
                )}
            </div>

            {/* Recommended Questions */}
            {recommendations.length > 0 && (
                <div className="w-full max-w-[900px] mx-auto bg-gray-100 p-4 rounded-md mb-4 shadow">
                    <p className="text-gray-600 text-sm mb-2">Recommended Questions:</p>
                    <div className="flex flex-wrap gap-2">
                        {recommendations.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelectQuestion(item)}
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow hover:bg-gray-300 transition text-sm"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Box */}
            <div className="w-full max-w-[900px] mx-auto flex space-x-2">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus} // Show recommendations on focus
                    placeholder="Type your message here..."
                    className="flex-grow rounded-md px-4 py-2 focus:outline-none focus:ring-2 border-2"
                />
                <button
                    onClick={handleSendMessage}
                    className="border text-white px-4 py-2 rounded-md shadow-md hover:bg-slate-600 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default SectionWrapper(Chatbot);
