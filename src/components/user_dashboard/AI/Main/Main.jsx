import React, { useContext, useEffect, useState } from 'react';
import './Main.css';
import { assets } from '../../../../assets/AI/assets.js';
import { Context } from '../context/Context';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Signout from '../Signout/Signout.jsx';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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

    useEffect(() => {
        const fetchUserData = async () => {
            const auth = getAuth();
            const db = getFirestore();
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
            setInput(transcript);  // Update input field
        };

        mic.onerror = (event) => console.error(event.error);
    }, [isListening]);
    
    const handleKeyDown = (event) => {
        if  (event.key === "Enter" && input.trim()){
            onSent();
        }
    }

    return (
        <div className={`Ai_layout ${darkMode ? "dark-mode" : ""}`}>
            <Sidebar />
            <div className='Ai_main'>
                <div className="Ai_nav">
                    <p id='helena'>Karapatan Ko</p>
                    <img onClick={() => setShowSignout(!showSignout)} src={assets.user_icon} alt="user_icon" />
                    {showSignout && <div className="navbar-popup"> <Signout /> </div>}
                </div>
                <div className="Ai_main-container">
                    {!showResult ? (
                        <>
                            <div className="Ai_greet">
                                <p><span>Hello, {userData ? `${userData.firstName}` : "User"}</span></p>
                                <p>How can I help you today?</p>
                            </div>
                            {/* <div className="Ai_cards">
                                <div className="Ai_card">
                                    <p>Suggest beautiful places to visit</p>
                                    <img src={assets.compass_icon} alt="compass_icon" />
                                </div>
                                <div className="Ai_card">
                                    <p>Summarize the concept: urban planning</p>
                                    <img src={assets.bulb_icon} alt="bulb_icon" />
                                </div>
                                <div className="Ai_card">
                                    <p>Brainstorm team bonding activities</p>
                                    <img src={assets.message_icon} alt="message_icon" />
                                </div>
                                <div className="Ai_card">
                                    <p>Improve the readability of this code</p>
                                    <img src={assets.code_icon} alt="code_icon" />
                                </div>
                            </div> */}
                        </>
                    ) : (
                        <div className="Ai_result">
                            <div className="Ai_result-title">
                                <img src={assets.user_icon} alt="user_icon" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="Ai_result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading ? (
                                    <div className="Ai_loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                ) : (
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Search Box */}
                    <div className="Ai_main-bottom">
                        <div className="Ai_search-box">
                            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' onKeyDown={handleKeyDown} />
                            <div>
                                <img 
                                    src={assets.mic_icon} 
                                    alt="mic_icon" 
                                    onClick={() => setIsListening(!isListening)} 
                                    style={{ cursor: 'pointer' }}
                                    onKeyDown={handleKeyDown}
                                />
                                {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="send_icon" /> : null}
                            </div>
                        </div>

                        {/* Mic Indicator */}
                        <div className="mic-container text-black">
                            {isListening ? <span >🎙️ Listening...</span> : null}
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
