import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../../../assets/AI/assets.js';
import { Context } from '../context/Context';

const Sidebar = ({ children }) => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat, darkMode, setDarkMode } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className={`Ai_sidebar-container ${darkMode ? "dark-mode" : ""}`}>
            {/* Sidebar Section */}
            <div className={`Ai_sidebar ${extended ? 'extended' : ''}`}>
                <div className='top'>
                    <img
                        onClick={() => setExtended(prev => !prev)}
                        src={assets.menu_icon}
                        className='Ai_menu'
                        alt='menu_icon'
                    />
                    <div onClick={() => newChat()} className="Ai_new-chat">
                        <img src={assets.plus_icon} alt="plus_icon" />
                        {extended && <p>New chat</p>}
                    </div>

                    {extended && (
                        <div className="Ai_recent">
                            <p className="Ai_recent-title">Recent</p>
                            {prevPrompts?.map((item, index) => (
                                <div key={index} onClick={() => loadPrompt(item)} className="Ai_recent-entry">
                                    <img src={assets.message_icon} alt="message_icon" />
                                    <p>{item.substring(0, 18)}...</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sidebar Bottom Section */}
                <div className='Ai_bottom'>
                    <div className="Ai_bottom-item Ai_recent-entry">
                        <img
                         src={assets.question_icon} alt="question_icon" />
                        {extended && <p onClick={() => window.open("https://gemini.google.com/faq", "_blank")}>Help</p>}
                    </div>
                    <div className="Ai_bottom-item Ai_recent-entry">
                        <img src={assets.history_icon} alt="history_icon" />
                        {extended && <p>Activity</p>}
                    </div>
                    <div className="Ai_bottom-item Ai_recent-entry">
                        <img src={assets.setting_icon} alt="setting_icon" />
                        {extended && (
                            <div className="settings">
                                <label className="toggle-switch">
                                    <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                                    <span className="slider"></span>
                                </label>
                                <p>{darkMode ? "Dark Mode On" : "Dark Mode Off"}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content Wrapper */}
            <div className="Ai_main-content">
                {children}
            </div>
        </div>
    );
};

export default (Sidebar);
