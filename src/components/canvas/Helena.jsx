import React, { useState, useEffect } from "react";
import aiRobot from "../../constants/aiRobot";
import { styles } from "../../styles";
import { SectionWrapper } from "../../wrapper";

const Chatbot = () => {
    const [chat, setChat] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [isThinking, setIsThinking] = useState(false); 
    const [recommendations, setRecommendations] = useState([]); 
    const chatContainerRef = React.useRef(null); // Reference to chat container

    // Scroll to the top on component load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle when user sends a message
    const handleSendMessage = () => {
        if (userInput.trim()) {
            const newChat = [...chat, { sender: "User", message: userInput }]; 
            setChat(newChat);

            setIsThinking(true);

            // Simulate AI thinking and delay the response
            setTimeout(() => {
                const aiResponse = generateAIResponse(userInput);
                setChat((prevChat) => [...prevChat, { sender: "Helena", message: aiResponse }]); 
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
        setRecommendations([]); 
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
            <p className={styles.paragraphSubText}>Our Artificial Intelligence</p>
            <h2 id="helena" className={`${styles.headText} highlight-border`}>
                <span className="title-with-line">Helena</span>
            </h2>
            <p className={`${styles.paragraphSubTextLower} mb-4`}> 
             Our team is working tirelessly to enhance her capabilities, refine her personality, and ensure she delivers the best possible experience. Stay tuned—Helena will soon be fully operational and ready to assist you in ways you never imagined!
            </p>

            {/* Chat Window */}
            <div
                ref={chatContainerRef}
                className="w-full max-w-[900px] mx-auto shadow-md rounded-lg p-4 mb-4 flex-grow overflow-y-auto flex flex-col"
            >
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
                    <div className={`${styles.AiText} text-center mt-20`}>
                        What can I help with?
                    </div>
                )}
                {isThinking && (
                    <div className="chat-message text-white self-start px-4 py-2 rounded-md mb-2 shadow-sm italic">
                        Helena is thinking...
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
            <div className="w-full max-w-[900px] rounded-sm mx-auto flex space-x-2">
                <div className="relative flex-grow">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        placeholder="Type your message here..."
                        className="w-full h-20 rounded-lg px-4 py-2 focus:ring-2 border-2 pr-16"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="absolute right-4 top-1/2 bg-slate-600 transform -translate-y-1/2 text-white px-4 py-2 rounded-full shadow-md hover:bg-slate-500 transition"
                    >
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Chatbot);
