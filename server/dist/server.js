"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = __importStar(require("ws"));
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
        if (data.type === 'ready') {
            if (activePairs.has(ws) || waitingClients.includes(ws))
                return;
            if (waitingClients.length > 0) {
                const partner = waitingClients.shift();
                if (partner && partner.readyState === ws_1.default.OPEN) {
                    activePairs.set(ws, partner);
                    activePairs.set(partner, ws);
                    ws.send(JSON.stringify({ type: 'paired', initiator: true }));
                    partner.send(JSON.stringify({ type: 'paired', initiator: false }));
                }
                else {
                    waitingClients.push(ws);
                }
            }
            else {
                waitingClients.push(ws);
            }
        }
        else if (data.type === 'offer' || data.type === 'answer' || data.type === 'candidate' || data.type === 'chat' || data.type === 'image') {
            const partner = activePairs.get(ws);
            if (partner && partner.readyState === ws_1.default.OPEN) {
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
        activeUsers = Math.max(0, activeUsers - 1);
        console.log('Client disconnected', activeUsers);
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
