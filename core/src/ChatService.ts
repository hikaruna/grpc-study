import { Message } from './Message'
import { User } from './User'

export type MessageCallback = (message: string) => void;

export class ChatService {
  readonly messages: Message[] = []
  private joinedUsers: { user: User, callback: MessageCallback }[] = []

  join(userName: string, callback: MessageCallback): string {
    const user = new User(userName);
    this.joinedUsers.push({ user, callback })
    return user.id
  }

  write(message: Message) {
    this.messages.push(message);
    this.joinedUsers
      .filter((joinedUser) => joinedUser.user.id !== message.userId)
      .forEach(joinedUser => joinedUser.callback(message.body));
  }
}