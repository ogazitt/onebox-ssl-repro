const axios = require('axios');

const authorizerService = 'localhost:8383';
const authorizerUrl = `https://${authorizerService}/api/v1/edge/accessmap`;

(async () => {
  try {
    const headers = {
      ContentType: 'application/json'
    };
    const body = {
      identity: 'hello'
    };
    const response = await axios.post(authorizerUrl, body, headers);
    res.status(200).send(response.data);
    return;
  } catch (err) {
    console.error(`caught exception ${err}`);
  }
})();
