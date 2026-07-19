exports.handler = async (event) => {
    // Parameters lena
    const { dob, tob, loc } = event.queryStringParameters;
    const apiKey = "sk_live_0QU8V8YdAMv7v08zj1oST2kqk7Mi9Oxf19f54OiF";
    
    // VedAstro ke naye format ke hisaab se URL
    // Format check kar: /Calculate/Planet/[PlanetName]/Location/[LocName]/Time/[Time]/[Date]/[Offset]
    const url = `https://api.vedastro.org/Calculate/Planet/Sun/Location/${loc}/Time/${tob}/${dob}/+05:30`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "x-api-key": apiKey
            }
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "API Failed: " + error.message })
        };
    }
};
