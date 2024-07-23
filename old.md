import { checkMarketOpen } from "./utils/checkMarketOpen";

const port = process.env.PORT || 4001;

export const server = Bun.serve<{ token: string }>({
port,
fetch(req, server) {
const url = new URL(req.url);
// if (url.pathname === "/market/open") {
// return new Response("No");
// }
if (checkMarketOpen()) {
if (url.pathname === "/liveltp") {
const token = "bvhjvjhvnmvnmvnmv";
const success = server.upgrade(req, { data: { token } });
return success
? undefined
: new Response("WebSocket upgrade error", { status: 400 });
}
}

    return new Response("Hello world");

},
websocket: {
open(ws) {
const msg = `${ws.data.token} has connected`;
ws.subscribe("liveltp");
server.publish("liveltp", msg);
},

    message() {},
    close(ws) {
      const msg = `${ws.data.token} has disconnected`;
      ws.unsubscribe("liveltp");
      server.publish("liveltp", msg);
    },

},
});

setInterval(() => {
server.publish("liveltp", "Hello world");
}, 1000);

console.log(`Listening on ${server.hostname}:${server.port}`);
