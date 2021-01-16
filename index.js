const https = require('https');
const fs = require('fs');

const certfile = process.env.CERTFILE;
const axios = certfile ? 
  require('axios').create({
    httpsAgent: new https.Agent({
      ca: fs.readFileSync(certfile)
    }) 
  }) :
  require('axios');

const authorizerService = process.env.HOST || 'localhost:8383';
const authorizerUrl = `https://${authorizerService}/api/v1/edge/query`;

console.log(`Query endpoint: ${authorizerUrl}`);

(async () => {
  try {
    const headers = {
      ContentType: 'application/json'
    };
    const body = {
      query: "x = data"
    };
    const response = await axios.post(authorizerUrl, body, headers);
    console.log(JSON.stringify(response.data, null, 2));
    return;
  } catch (err) {
    console.error(`caught exception ${err}`);
  }
})();
