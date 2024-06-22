"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const cors = require("cors");
const PORT = process.env.PORT || 3003;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const wss = new ws_1.WebSocketServer({ server });
// Use CORS middleware
app.use(cors());
let activeUsers = 0;
const waitingClients = [];
const activePairs = new Map();
wss.on('connection', (ws) => {
    activeUsers += 1; // Increment active users count
    console.log('client connected', activeUsers);
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.type === 'offer') {
            if (waitingClients.length > 0) {
                const partner = waitingClients.pop();
                if (partner) {
                    activePairs.set(ws, partner);
                    activePairs.set(partner, ws);
                    partner.send(JSON.stringify(data));
                }
            }
            else {
                waitingClients.push(ws);
            }
        }
        else if (data.type === 'answer' || data.type === 'candidate' || data.type === 'chat' || data.type === 'image') {
            const partner = activePairs.get(ws);
            if (partner) {
                partner.send(JSON.stringify(data));
            }
        }
        else if (data.type === 'endCall') {
            const partner = activePairs.get(ws);
            if (partner) {
                partner.send(JSON.stringify({ type: 'callEnded' }));
                cleanUpClient(partner); // Clean up partner's resources
            }
            cleanUpClient(ws); // Clean up client's resources
        }
    });
    ws.on('close', () => {
        cleanUpClient(ws);
        const index = waitingClients.indexOf(ws);
        if (index !== -1) {
            waitingClients.splice(index, 1);
        }
        //Decrement active users count
        activeUsers -= 1;
        console.log('Client disconnected');
    });
});
function cleanUpClient(ws) {
    const partner = activePairs.get(ws);
    if (partner) {
        activePairs.delete(partner);
        partner.send(JSON.stringify({ type: 'callEnded' }));
        partner.close();
    }
    activePairs.delete(ws);
    console.log('Client disconnected', activeUsers);
    ws.close();
}
app.get('/', (req, res) => {
    res.send("<h1>WAVETALKS WEBSOCKET SERVER IS ACTIVE NOW</h");
});
app.get('/activeusers', (req, res) => {
    try {
        res.json({ activeUsers, message: 'Active users fetched successfully' });
    }
    catch (err) {
        res.json({ error: err, active: 0 });
    }
});
server.listen(PORT, () => {
    console.log(`Signaling server is listening on port ${PORT}`);
});
