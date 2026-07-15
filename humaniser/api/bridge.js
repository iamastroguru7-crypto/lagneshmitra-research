// humaniser/api/bridge.js
export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ result: 'Method Not Allowed' });
    }

    const { key, text, intensity } = req.body;

    // Basic validation
    if (!key || !text) {
        return res.status(400).json({ result: 'Missing API Key or Text' });
    }

    try {
        const response = await fetch("https://api.x.ai/v1/chat/completions", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`
            },
            body: JSON.stringify({
                model: "grok-beta",
                messages: [
                    { 
                        "role": "system", 
                        "content": `You are an expert editor. Rewrite the following text to sound natural, human-written, and engaging. Aim for a humanization intensity of ${intensity}%.` 
                    },
                    { "role": "user", "content": text }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
        
        if (data.choices && data.choices[0]) {
            res.status(200).json({ result: data.choices[0].message.content });
        } else {
            res.status(500).json({ result: "Grok API Error: " + JSON.stringify(data) });
        }
    } catch (error) {
        res.status(500).json({ result: "Bridge Internal Error: " + error.message });
    }
}
