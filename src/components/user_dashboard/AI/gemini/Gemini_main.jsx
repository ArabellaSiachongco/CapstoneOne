import React, { useContext, useEffect, useState } from 'react';
import './gemini.css';
import { Context } from '../context/Context.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Signout from '../Signout/Signout.jsx';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

const Ai_Main = () => {
    const {
        onSent, recentPrompt, showResult, loading, resultData,
        setInput, input, darkMode, selectedMessage, setSelectedMessage
    } = useContext(Context);

    const [userData, setUserData] = useState(null);
    const [showSignout, setShowSignout] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [responseSaved, setResponseSaved] = useState(false);
    const [messageId, setMessageId] = useState(null);

    const db = getFirestore();

    /** Fetch user data */
    useEffect(() => {
        const fetchUserData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    setUserData(userSnap.data());
                }
            }
        };
        fetchUserData();
    }, []);

    /** Handle Speech Recognition */
    useEffect(() => {
        if (isListening) {
            mic.start();
        } else {
            mic.stop();
        }

        mic.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');
            setInput(transcript);
        };

        mic.onerror = (event) => console.error(event.error);
    }, [isListening]);

    /** Handle Enter Key Press */
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && input.trim()) {
            handleSendMessage();
        }
    };

    /** Stop Listening & Send Message */
    const stopListeningAndSend = () => {
        setIsListening(false);
        mic.stop();

        setTimeout(() => {
            if (input.trim()) {
                handleSendMessage();
            }
        }, 500);
    };

    /** Handle Sending a Message */
    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            try {
                console.log("✉️ Sending message to AI:", input);

                const messageRef = await addDoc(collection(db, "Ai_Message"), {
                    userId: user.uid,
                    message: input,
                    response: "", // Placeholder for AI response
                    timestamp: serverTimestamp(),
                });

                const newMessageId = messageRef.id; // Get Message ID
                setMessageId(newMessageId);
                setResponseSaved(false);

                onSent(); // This triggers the AI response

                console.log("✅ Message saved with ID:", newMessageId);
            } catch (error) {
                console.error("❌ Error saving message:", error);
            }
        }
    };


    /** Update Firestore with AI Response */
    useEffect(() => {
        if (!messageId || !resultData || responseSaved) return;

        console.log("🔄 Updating AI response for message:", messageId);
        console.log("💬 AI Response Received:", resultData);

        setTimeout(async () => {
            try {
                await updateDoc(doc(db, "Ai_Message", messageId), {
                    response: resultData,
                });

                setResponseSaved(true);

                setSelectedMessage({
                    message: input,   // Store the input question
                    response: resultData // Store the AI-generated response
                });

                console.log("✅ Response updated in Firestore successfully");
                console.log("🖥️ Selected Message Updated:", { message: input, response: resultData });

            } catch (updateError) {
                console.error("❌ Error updating AI response:", updateError);
            }
        }, 2000);
    }, [resultData]);

    return (
        <div className={`Ai_layout ${darkMode ? "dark-mode" : ""}`}>
            <Sidebar />
            <div className='Ai_main'>
                <div className="Ai_nav">
                    <p id='helena'>Karapatan Ko</p>
                    <img onClick={() => setShowSignout(!showSignout)} src="/assets/user_icon.png" alt="user_icon" />
                    {showSignout && <div className="navbar-popup"><Signout /></div>}
                </div>

                <div className="Ai_main-container">
                    {/* Display AI Response */}
                    {selectedMessage && typeof selectedMessage.response === "string" && selectedMessage.response.trim() !== "" ? (
                        <div className="Ai_result">
                            <div className="Ai_result-title">
                                <img src="/assets/user_icon.png" alt="user_icon" />
                                <p>{selectedMessage.message}</p>
                            </div>
                            <div className="Ai_result-data">
                                <img src="/assets/gemini_icon.png" alt="gemini_icon" />
                                <p dangerouslySetInnerHTML={{ __html: selectedMessage.response }}></p>
                            </div>
                        </div>
                    ) : (
                        <div className="Ai_greet">
                            <p><span>Hello, {userData ? `${userData.firstName}` : "User"}</span></p>
                            <p>How can I help you today?</p>
                            <p>📢 Debug: {JSON.stringify(selectedMessage)}</p>  {/* Debug Line */}
                        </div>
                    )}


                    <div className="Ai_main-bottom">
                        {/* Input Box */}
                        <div className="Ai_search-box">
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                type="text"
                                placeholder='Enter a prompt here'
                                onKeyDown={handleKeyDown}
                            />
                            <div>
                                <img
                                    src="/assets/mic_icon.png"
                                    alt="mic_icon"
                                    style={{ cursor: 'pointer' }}
                                    onMouseDown={() => setIsListening(true)}
                                    onMouseUp={stopListeningAndSend}
                                />
                                {input ? <img onClick={handleSendMessage} src="/assets/send_icon.png" alt="send_icon" /> : null}
                            </div>
                        </div>

                        {/* Microphone Indicator */}
                        <div className="mic-container text-black">
                            {isListening ? <span>🎙️ Listening...</span> : null}
                        </div>

                        {/* Disclaimer */}
                        <p className="Ai_bottom-info">
                            Gemini may display inaccurate info, including about people, so double-check its responses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ai_Main;
