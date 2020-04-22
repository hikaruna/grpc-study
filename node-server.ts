import {Server, ServerCredentials} from 'grpc';
import {EchoService} from './grpc_tools_node_protoc_ts/echo_grpc_pb'
import EchoServerAdapter from './EchoServerAdapter'
import { EchoServer } from './EchoServer';

const server = new Server();
server.addService(
  EchoService,
  new EchoServerAdapter(
    new EchoServer()
  )
);

try {
  server.bind(
    '0.0.0.0:9090',
    ServerCredentials.createInsecure()
  );
} catch (err) {
  console.error(err);
  process.exit(1);
}

server.start();