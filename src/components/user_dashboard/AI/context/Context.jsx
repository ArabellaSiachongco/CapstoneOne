import { createContext, useState, useEffect } from "react";
import run from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

    const delayParameter = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }
    
    let lastRequestTime = 0;
    const REQUEST_INTERVAL = 5000;

    const onSent = async (prompt) => {
        const currentTime = Date.now();
        if (currentTime - lastRequestTime <REQUEST_INTERVAL) {
            alert("Please wait a few seconds. Thank you!");
            return;
        }
        lastRequestTime = currentTime;
        setResultData("");
        setLoading(true);
        setShowResult(true);
                
        let response;
        if (prompt != undefined) {
            response = await run(prompt)
            setRecentPrompt(prompt)
        } else {
            setPrevPrompts(prev => [...prev, input])
            setRecentPrompt(input)
            response = await run(input)
        }
        let responseArray = response.split("**")
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i]
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayParameter(i, nextWord + " ")
        }

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
