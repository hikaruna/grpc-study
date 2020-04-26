import { Server, ServerCredentials } from 'grpc'
import { ChatService } from './lib/chat-service/chat_grpc_pb';
import { ChatServer } from './src/ChatServer';
import { program } from 'commander';

program
  .requiredOption('-h, --host <host>', 'bind host, default to 0.0.0.0', '0.0.0.0')
  .requiredOption('-p, --port <port>', 'bind port, default 9090', '9090')

program.parse(process.argv);

const server = new Server();
server.addService(ChatService, new ChatServer());

const address = `${program.host}:${program.port}`
if (server.bind(address, ServerCredentials.createInsecure()) === 0) {
  throw new Error('bind error');
}
server.start();
console.log(`server started on ${address}`)
