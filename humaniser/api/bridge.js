export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ result: 'Method Not Allowed' });

    const { key, text, intensity } = req.body;

    try {
        // Groq API Endpoint for Llama 3 / Versatile models
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            },
            body: JSON.stringify({
                model: "llama3-70b-8192", // Use your versatile model name here
                messages: [
                    { "role": "system", "content": `Rewrite this to be ${intensity}% more natural.` },
                    { "role": "user", "content": text }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();

        if (data.choices && data.choices[0]) {
            return res.status(200).json({ result: data.choices[0].message.content });
        } else {
            return res.status(500).json({ result: "API Error: " + JSON.stringify(data) });
        }
    } catch (error) {
        return res.status(500).json({ result: "Bridge Error: " + error.message });
    }
}
