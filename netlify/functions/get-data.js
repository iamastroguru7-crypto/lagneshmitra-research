export async function handler(event, context) {
    const { dob, tob, loc } = event.queryStringParameters;
    const apiKey = "sk_live_0QU8V8YdAMv7v08zj1oST2kqk7Mi9Oxf19f54OiF";
    
    // VedAstro URL (Verified format)
    const url = `https://api.vedastro.org/Calculate/Planet/Sun/Location/${loc}/Time/${tob}/${dob}/+05:30`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { "x-api-key": apiKey }
        });

        // Agar response 200 nahi hai, toh error throw karo
        if (!response.ok) {
            return { statusCode: response.status, body: JSON.stringify({ error: "VedAstro API Error" }) };
        }

        const data = await response.json();

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
    } catch (error) {
        // Yeh error hi 500 status code de raha hai
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
}
