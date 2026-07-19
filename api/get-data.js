export default async function handler(req, res) {
    const { dob, tob, loc } = req.query;
    const apiKey = "sk_live_0QU8V8YdAMv7v08zj1oST2kqk7Mi9Oxf19f54OiF";
    
    // Correct URL structure for PlanetName
    const url = `https://api.vedastro.org/Calculate/PlanetName/Planet/Sun/Time/${tob}/${dob}/+05:30/Location/${loc}/India`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "x-api-key": apiKey
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
