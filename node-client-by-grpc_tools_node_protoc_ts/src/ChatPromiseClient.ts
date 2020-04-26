import { ChatClient } from "../lib/chat-service/chat_grpc_pb";
import { Messages, Void } from "../lib/chat-service/chat_pb";

export class ChatPromiseClient {
  private delegate: ChatClient
  constructor(delegate: ChatClient) {
    this.delegate = delegate
  }

  async getMessages(request: Void): Promise<Messages> {
    return new Promise((resolve, reject) => {
      this.delegate.getMessages(request, (err, response) => {
        if(err) {
          reject(err)
          return
        }
        resolve(response)
      });
    });
  }
}