const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enables cross-origin sharing for your frontend file

app.get('/api/pollution', async (req, res) => {
    try {
        const lat = "19.45";
        const lon = "72.81";

        // Pull telemetry straight from the global satellite stream
        const weatherRes = await fetch(`https://open-meteo.com{lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`);
        const airRes = await fetch(`https://open-meteo.com{lat}&longitude=${lon}&current=pm10,pm2_5`);

        const weatherData = await weatherRes.json();
        const airData = await airRes.json();

        // Send compiled metrics in the exact JSON format your dashboard demands
        res.json({
            temperature: weatherData.current.temperature_2m.toFixed(1),
            humidity: weatherData.current.relative_humidity_2m,
            pm25: Math.round(airData.current.pm2_5),
            pm10: Math.round(airData.current.pm10)
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to compile background environment stream metrics." });
    }
});

app.listen(3000, () => console.log('Backend engine online at http://localhost:3000'));
