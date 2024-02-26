import { Server } from "./infrastructure/server/server";


function main() {
    const server = new Server();
    server.start();
}

main();