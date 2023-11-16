export default {
  async fetch(request) {
    const data = {
      message: "Hello !",
      number: 42,
      float: 32.5556,
      api_1: API_KEY_2,
    };

    const json = JSON.stringify(data, null, 2);

    const headers = {
      'content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    return new Response(json, {
      headers,
    });
  },
  
};
