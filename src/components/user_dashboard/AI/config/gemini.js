import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro"
const API_KEY = import.meta.env.VITE_AI_API_KEY;

async function run(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME }); 

    const generationConfig = {
        temperature: 0.9,
        topP: 1,
        topK: 1,
        maxOutputTokens: 2048,
        // responseMimeType: "text/plain",
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        }
    ];
    
    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
            
        ],
    });
    
    const philippineLawPrompt = `
    You are Karapatan Ko, an AI legal assistant specializing in **Philippine Law**. You can say Hi or Hello.
    Provide a **clear, concise, and structured answers** based on laws in the Philippines, such as:
    - The 1987 Constitution
    - Civil Code, Revised Penal Code, Family Code, Labor Code, 
    - Other relevant statutes (e.g., Data Privacy Act, Cybercrime Prevention Act)
    
    **Response Guidelines**
    - **Be concise & well-structured** (use bullet points when necessary).
    - **Provide citations** where applicable.
    - **Avoid unnecessary explanations or disclamers**.
    - **Explain in simple words and make it more humanize**.
    
    Question: ${prompt}
    `

    const result = await chat.sendMessage(philippineLawPrompt);
    const response = result.response;
    console.log(response.text());
    return response.text();

}

export default run;
