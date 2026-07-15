// api/bridge.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ result: 'Method Not Allowed' });

    const { text } = req.body;
    
    // API Key backend se fetch hogi (Security!)
    const apiKey = process.env.GROQ_API_KEY; 

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "llana-3.3-70b-versatile",
                messages: [
                    { "role": "system", "content": "Ruthless data analysis only. No fluff." },
                    { "role": "user", "content": text }
                ]
            })
        });

        const data = await response.json();
        return res.status(200).json({ result: data.choices[0].message.content });
    } catch (error) {
        return res.status(500).json({ result: "Bridge Error: " + error.message });
    }
}
