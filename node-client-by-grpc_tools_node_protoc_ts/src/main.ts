import { ChatPromiseClient } from "./ChatPromiseClient"
import { ChatClient } from "../lib/chat-service/chat_grpc_pb"
import { Void } from "../lib/chat-service/chat_pb";
import { credentials } from "grpc"
import { program } from 'commander'

const getMessages = async () => {

  const client = new ChatPromiseClient(
    new ChatClient(`${program.host}:${program.port}`, credentials.createInsecure())
  );

  const messages = await client.getMessages(new Void())
  console.log(JSON.stringify(messages.getMessagesList()));
}

program
  .option('-d, --debug', 'output extra debugging')
  .requiredOption('-h, --host <host>', 'host')
  .requiredOption('-p, --port <port>', 'port');

program
  .command('getMessages')
  .action(getMessages);


(async () => {
  program.parseAsync(process.argv);

  if (program.debug) {
    console.log(program.opts());
    if (program.host) console.log(`- ${program.host}`);
    if (program.port) console.log(`- ${program.port}`);
  }
})();