import grpc from 'grpc';
import { EchoClient } from './grpc_tools_node_protoc_ts/echo_grpc_pb'
import { EchoRequest, EchoResponse } from './grpc_tools_node_protoc_ts/echo_pb'

const client = new EchoClient(
  'node-server:9090',
  grpc.credentials.createInsecure()
);

const buildEchoRequest = ({message}: { message: string}): EchoRequest => {
  const build = new EchoRequest();
  build.setMessage(message);
  return build;
}

client.echo(buildEchoRequest({ message: 'John' }), (err, response) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  process.stdout.write(response.getMessage());
  process.stdout.write("\n");
  process.exit(0);
});
