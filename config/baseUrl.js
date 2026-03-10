const isProd = process.env.NODE_ENV === "production";

export const BASE_URL = isProd
    ? "https://wavetalks-server.onrender.com"
    : "http://localhost:3003";

export const SOCKET_URL = isProd
    ? "wss://wavetalks-server.onrender.com"
    : "ws://localhost:3003";
