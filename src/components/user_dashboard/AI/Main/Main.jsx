import React, { useContext, useEffect, useState } from 'react';
import './Main.css';
import { assets } from '../../../../assets/AI/assets.js';
import { Context } from '../context/Context';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Signout from '../Signout/Signout.jsx';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, darkMode } = useContext(Context);
    const [userData, setUserData] = useState(null);
    const [showSignout, setShowSignout] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [responseSaved, setResponseSaved] = useState(false);
    const [messageId, setMessageId] = useState(null);
    const { selectedMessage } = useContext(Context);

    const db = getFirestore();

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

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && input.trim()) {
            handleSendMessage();
        }
    }

    const stopListeningAndSend = () => {
        setIsListening(false);
        mic.stop();

        setTimeout(() => {
            if (input.trim()) {
                handleSendMessage();
            }
        }, 500); // Small delay to ensure transcript is captured
    };


    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const auth = getAuth();
        const user = auth.currentUser;
        const db = getFirestore();

        if (user) {
            try {
                // Step 1: Save the user's message first and get the document reference
                const messageRef = await addDoc(collection(db, "Ai_Message"), {
                    userId: user.uid,
                    message: input,
                    response: "", // Placeholder for AI response
                    timestamp: serverTimestamp(),
                });

                const messageId = messageRef.id; // Get the ID of the saved message
                onSent(); // Trigger AI response generation

                // Step 2: Store messageId in state for updating later
                setResponseSaved(false);
                setMessageId(messageId); // Store message ID for response update
            } catch (error) {
                console.error("Error saving message:", error);
            }
        }
    };

    useEffect(() => {
        const updateAIResponse = async () => {
            if (!messageId || !resultData || responseSaved) return; // Ensure valid data and avoid duplicates

            // Small delay to ensure full response is available
            setTimeout(async () => {
                try {
                    await updateDoc(doc(db, "Ai_Message", messageId), {
                        response: resultData, // Save complete AI response
                    });

                    setResponseSaved(true); // Prevent multiple updates
                } catch (updateError) {
                    console.error("Error updating AI response:", updateError);
                }
            }, 120000); // Wait 1 second before saving to ensure full response
        };

        updateAIResponse();
    }, [resultData]); // Runs when AI response updates

    return (
        <div className={`Ai_layout ${darkMode ? "dark-mode" : ""}`}>
            <Sidebar />
            <div className='Ai_main'>
                <div className="Ai_nav">
                    <p id='helena'>Karapatan Ko</p>
                    <img onClick={() => setShowSignout(!showSignout)} src={assets.user_icon} alt="user_icon" />
                    {showSignout && <div className="navbar-popup"><Signout /></div>}
                </div>
    
                <div className="Ai_main-container">
                    {!selectedMessage ? (
                        <>
                            <div className="Ai_greet">
                                <p><span>Hello, {userData ? `${userData.firstName}` : "User"}</span></p>
                                <p>How can I help you today?</p>
                            </div>
                        </>
                    ) : (
                        <div className="Ai_result">
                            <div className="Ai_result-title">
                                <img src={assets.user_icon} alt="user_icon" />
                                <p>{selectedMessage.message}</p>
                            </div>
                            <div className="Ai_result-data">
                                <img src={assets.gemini_icon} alt="" />
                                <p dangerouslySetInnerHTML={{ __html: selectedMessage.response }}></p>
                            </div>
                        </div>
                    )}
    
                    <div className="Ai_main-bottom">
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
                                    src={assets.mic_icon}
                                    alt="mic_icon"
                                    style={{ cursor: 'pointer' }}
                                    onMouseDown={() => setIsListening(true)}
                                    onMouseUp={() => stopListeningAndSend()}
                                />
                                {input ? <img onClick={handleSendMessage} src={assets.send_icon} alt="send_icon" /> : null}
                            </div>
                        </div>
    
                        <div className="mic-container text-black">
                            {isListening ? <span>🎙️ Listening...</span> : null}
                        </div>
    
                        <p className="Ai_bottom-info">
                            Gemini may display inaccurate info, including about people, so double-check its responses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );    
};

export default Main;
