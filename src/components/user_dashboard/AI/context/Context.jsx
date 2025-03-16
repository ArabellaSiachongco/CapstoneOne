import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [selectedMessage, setSelectedMessage] = useState(null); 

    const delayParameter = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => {
                console.log("🔄 Updating Response:", prev + nextWord); // Debugging log
                return prev + nextWord;
            });
        }, 300000 * index);
    };    
    
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };

    const onSent = async (prompt) => {
        setResultData("");  // Reset previous data
        setLoading(true);
        setShowResult(true);
    
        let response;
        if (prompt !== undefined) {
            response = await run(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }
    
        console.log("💬 AI Response Received:", response); // Debugging log
    
        if (!response || response.trim() === "") {
            console.error("❌ No response received from AI!");
            setLoading(false); 
            return;
        }
    
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
    
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
    
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayParameter(i, nextWord + " ");
        }
        
        setSelectedMessage({
            message: prompt || input,
            response: newResponse2,
        });
    
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
        selectedMessage, 
        setSelectedMessage,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
