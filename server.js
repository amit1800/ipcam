var stream = require("node-rtsp-stream");
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
app.use(cors());
const server = http.createServer(app);
// const WebSocket = require("ws");

// const server = require("http").Server(app);
// const wss = new WebSocket.Server({ server });

// const wsConnections = new Map();
// wss.on("connection", (ws) => {
//   // Store the WebSocket connection in the map with a unique identifier (stream name)
//   wsConnections.set(ws, new Set());

//   // Handle WebSocket closure
//   ws.on("close", () => {
//     // Remove the WebSocket connection from the map when closed
//     wsConnections.delete(ws);
//   });
// });

// // Function to broadcast frames to all connected WebSocket clients
// function broadcastFrames(frames) {
//   for (const ws of wsConnections.keys()) {
//     if (ws.readyState === WebSocket.OPEN) {
//       // Send frames only to the WebSocket associated with the specified stream name
//       if (wsConnections.get(ws).has(streamName)) {
//         ws.send(frames);
//       }
//     }
//   }
// }

const streamOne = new stream({
  name: "one",
  streamUrl: "rtsp://192.0.0.2:1935",
  wsPort: 9998,
  ffmpegOptions: {
    "-vf": "transpose=1, format=gray, scale=400:-1",
    // "-vf": "",
    // negate: "",
    //  scale: "640",
  },
});

// streamOne.on("data", (image, name) => {
//   const frames = { stream: "one", image, name };
//   broadcastFrames("one", JSON.stringify(frames));
// });

const streamTwo = new stream({
  name: "two",
  streamUrl: "rtsp://192.0.0.2:1935",
  wsPort: 9999,
  ffmpegOptions: {
    "-vf": "transpose=1,  scale=400:-1",
    // "-vf": "",
    // negate: "",
    //  scale: "640",
  },
});

app.use(express.static("public"));

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// streamTwo.on("data", (image, name) => {
//   const frames = { stream: "two", image, name };
//   broadcastFrames("two", JSON.stringify(frames));
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// console.log("hello");
