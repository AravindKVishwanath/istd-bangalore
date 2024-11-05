// pages/api/quote.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Replace 'your_openai_api_key_here' with process.env.OPENAI_API_KEY if using an environment variable
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: "text-davinci-003",  // Specify the model here
        prompt: "Provide a motivational entrepreneurship quote.",
        max_tokens: 50,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    
    const quote = response.data.choices[0].text.trim();
    res.status(200).json({ quote });
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ error: "Failed to fetch quote" });
    console.log(`hey ${process.env.OPENAI_API_KEY}`)
  }
}
