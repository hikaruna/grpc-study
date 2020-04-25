import { IChatServer } from '../lib/chat-service/chat_grpc_pb'
import { sendUnaryData, ServerUnaryCall } from 'grpc';
import { Void, Messages, Message } from '../lib/chat-service/chat_pb';
import { ChatService } from '@chat/core'

export class ChatServer implements IChatServer {
  private delegate: ChatService = new ChatService()

  getMessages(call: ServerUnaryCall<Void>, callback: sendUnaryData<Messages>): void {
    const response = new Messages();
    response.setMessagesList(
      this.delegate.messages.map(src => {
        const dist = new Message();
        dist.setBody(src.body);
        return dist;
      })
    )
    callback(null, response);
  }
}