exports.handler = async (event) => {
    const { dob, tob, loc } = event.queryStringParameters;
    const apiKey = "sk_live_0QU8V8YdAMv7v08zj1oST2kqk7Mi9Oxf19f54OiF";
    
    // API Call
    const url = `https://api.vedastro.org/Calculate/PlanetName/Planet/Sun/Time/${tob}/${dob}/+05:30/Location/${loc}/India`;
    
    const response = await fetch(url, {
        headers: { "x-api-key": apiKey }
    });
    
    const data = await response.json();
    
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};
