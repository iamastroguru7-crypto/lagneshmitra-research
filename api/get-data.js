export default async function handler(req, res) {
    const { dob, tob, loc } = req.query;
    const apiKey = "sk_live_0QU8V8YdAMv7v08zj1oST2kqk7Mi9Oxf19f54OiF";
    const url = `https://api.vedastro.org/api/APIKey/${apiKey}/Calculate/PlanetName/Planet/Sun/Time/${tob}/${dob}/+00:00/Location/${loc}/UK`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
