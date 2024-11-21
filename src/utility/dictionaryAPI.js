import { useState } from 'react';

const API_KEY = 'd87993c8-62f0-4e2f-a1ba-ccd973139434'; // Replace with your Merriam-Webster API key

// Custom hook to handle word selection and fetching definition
export const useDictionary = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [definition, setDefinition] = useState(null);

  // Function to handle text selection and set the selected word
  const handleTextSelection = (e) => {
    const selection = window.getSelection().toString().trim();
    if (selection) {
      setSelectedWord(selection); // Store the selected word
      fetchDefinition(selection); // Fetch the definition for the selected word
    } else {
      setSelectedWord(null); // Clear selected word if nothing is highlighted
    }
  };

  const fetchDefinition = async (word) => {
    const url = `https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=${API_KEY}`;  // Dynamic word in URL

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0 && data[0].shortdef) {
          setDefinition(data[0].shortdef[0]); // Set the first short definition
        } else {
          setDefinition("No definition found.");
        }
      } else {
        setDefinition("No definition found.");
      }
    } catch (error) {
      console.error("Error fetching definition:", error);
      setDefinition("Error fetching definition.");
    }
  };

  return { selectedWord, definition, handleTextSelection };
};