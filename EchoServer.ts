export interface IEchoServer {
  echo: (message: string) => string
  join: (onReceive: (message: string) => void) => void
  write: (message: string) => void
}

export class EchoServer implements IEchoServer {
  private messages: string[] = []
  private users: ((message: string)=>void)[] = []

  echo (message: string): string {
    this.messages.push(message)
    return message
  }

  join (onReceive: (message: string) => void) {
    this.users.push(onReceive)
  }

  write (message: string) {
    this.messages.push(message)
  }
}