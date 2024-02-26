"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./infrastructure/server/server");
function main() {
    const server = new server_1.Server();
    server.start();
}
main();
