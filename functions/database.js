export default {
  async fetch(request, env, ctx) {
	console.log(env.API_KEY);
    return new Response(`API host: ${env.API_KEY}`);
  }
}
