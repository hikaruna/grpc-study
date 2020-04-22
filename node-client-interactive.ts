import LineByLine from 'line-by-line';
import grpc, { ClientReadableStream } from 'grpc';
import { EchoClient } from './grpc_tools_node_protoc_ts/echo_grpc_pb'
import { Void, EchoResponse, EchoRequest } from './grpc_tools_node_protoc_ts/echo_pb'

const lr = new LineByLine('/dev/stdin');

const client = new EchoClient(
  'localhost:9090',
  grpc.credentials.createInsecure()
);
const call: ClientReadableStream<EchoResponse> = client.join(new Void())

console.debug('get stream successed');

call.on('data', (message) => {
  if(!(message instanceof EchoResponse)) {
    throw new Error();
  }
  lr.pause()
  process.stdout.write(`${message.getMessage()}\n`);
  lr.resume()
});
call.on('end', function () {
  console.dir('on call end')
});
call.on('error', function (e) {
  console.dir('on call error')
  console.error(e);
});
call.on('status', function (status) {
  console.dir('on call status')
  console.debug(status);
});

lr.on('line', (input) => {
  const request = new EchoRequest();
  request.setMessage(input);
  client.write(request, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});