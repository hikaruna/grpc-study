import grpc from 'grpc';
import protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync(
  "./echo.proto",
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const echo = protoDescriptor.echo;

const { EchoService, EchoRequest, EchoResponse } = echo
export { EchoService, EchoRequest, EchoResponse };