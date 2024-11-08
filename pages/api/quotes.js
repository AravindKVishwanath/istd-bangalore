// pages/api/quote.js
import axios from 'axios';
import {GoogleGenerativeAI} from "@google/generative-ai"

export default async function handler(req, res) {
  try {
    // Replace 'your_openai_api_key_here' with process.env.OPENAI_API_KEY if using an environment variable
    // const response = await axios.post(
    //   'https://gemini.googleapis.com/v1beta1/models/gemini-1.5-pro/generateText',
    //   {
    //     model: "text-davinci-003",  // Specify the model here
    //     prompt: "Provide a motivational entrepreneurship quote.",
    //     temperature: 0.7,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // );

    const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Provide a motivational entrepreneurship quote.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    const quote = result.response.text();
    res.status(200).json({"Quote": quote });
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ error: "Failed to fetch quote" });
    console.log(`hey ${process.env.OPENAI_API_KEY}`)
  }
}
