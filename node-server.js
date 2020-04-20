import grpc from 'grpc';
import protoLoader from '@grpc/proto-loader';
import EchoServiceImpl from './EchoService.js'
import { EchoService } from './EchoStub.js'

const server = new grpc.Server();
server.addService(EchoService.service, new EchoServiceImpl());

server.bindAsync(
  '0.0.0.0:9090',
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    server.start();
  }
);