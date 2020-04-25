import { Server, ServerCredentials } from 'grpc'
import { ChatService } from './lib/chat-service/chat_grpc_pb';
import { ChatServer } from './src/ChatServer';

const server = new Server();
server.addService(ChatService, new ChatServer());
if (server.bind('9090', ServerCredentials.createInsecure()) === 0) {
  throw new Error('bind error');
}
server.start();
