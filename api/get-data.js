// File: netlify/functions/get-data.js

export const handler = async (event) => {
    // API Key aur parameters
    const apiKey = "sk_live_0QU8V8YdAMv7v08zj1oST2kqk7Mi9Oxf19f54OiF";
    const { dob, tob, loc } = event.queryStringParameters;

    // URL format check (Location mein space ho toh encode karna zaroori hai)
    const encodedLoc = encodeURIComponent(loc || "Lucknow");
    const url = `https://api.vedastro.org/Calculate/Planet/Sun/Location/${encodedLoc}/Time/${tob}/${dob}/+05:30`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json"
            }
        });

        // Response status check
        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: `VedAstro API responded with status: ${response.status}` })
            };
        }

        const data = await response.json();

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Server Error: " + error.message })
        };
    }
};
