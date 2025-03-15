import { createContext, useState, useEffect } from "react";
import fetchPhilippineLaws from "../config/wikimedia.js";  // Import Wikimedia API function

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
    const [selectedMessage, setSelectedMessage] = useState(null);

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    let lastRequestTime = 0;
    const REQUEST_INTERVAL = 5000;

    const onSent = async (prompt) => {
        const currentTime = Date.now();
        if (currentTime - lastRequestTime < REQUEST_INTERVAL) {
            alert("Please wait a few seconds. Thank you!");
            return;
        }
        lastRequestTime = currentTime;

        setResultData([]);
        setLoading(true);
        setShowResult(true);

        let response;
        if (prompt !== undefined) {
            response = await fetchPhilippineLaws(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts((prev) => [...prev, input]);
            setRecentPrompt(input);
            response = await fetchPhilippineLaws(input);
        }

        // Ensure response is properly formatted
        let formattedResponse = "";

        if (Array.isArray(response.response)) {
            formattedResponse = response.response.map(item => `🔹 **${item.title}**: ${item.snippet}`).join("\n\n");
        } else {
            formattedResponse = "No relevant legal information found.";
        }

        setResultData(formattedResponse);
        setLoading(false);
        setInput("");
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        darkMode,
        setDarkMode,
        selectedMessage,
        setSelectedMessage,
    };

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
