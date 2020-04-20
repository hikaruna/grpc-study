export default class EchoService {

  constructor() {
    this.users = []
    this.messages = []
  }

  echo(call, callback) {
    const message = call.request.message
    this.messages.push(message);
    this.users.forEach(user => {
      user.write({ message })
    })
    callback(null, { message: `${this.messagesString}` });
  }

  write(call, callback) {
    console.debug("write called")
    this.messages.push(call.request.message);
    callback(null, {})
  }

  join(call) {
    console.debug("join called")
    this.users.push(call)
  }

  addMessage(/* @type {string} */ message) {
  }

  get messagesString() {
    return this.messages.join("\n");
  }
}