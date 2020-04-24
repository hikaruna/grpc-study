import { ChatService } from "../src/ChatService";
import { strict as assert } from 'assert';
import { User } from "../src/User";

const chatService = new ChatService()

console.debug("debug: message send message1 by user1")
chatService.write({ userId: "user1", body: "message1" });

console.debug("debug: messages show")
console.log(chatService.messages)

console.debug("debug: join as John");
chatService.join('John', (message) => {
  console.log(`John receives message ${message}`);
});

console.debug("debug: message send message2 by user1")
chatService.write({ userId: "user1", body: "message2" });
console.debug("debug: receive message")

console.debug("debug: messages show")
console.log(chatService.messages)