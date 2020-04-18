import grpc from 'grpc';
import protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync(
  './echo.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var echo = protoDescriptor.echo;

function doEcho(call, callback) {
  callback(null, { message: `${call.request.message}!!!!` });
}

const server = new grpc.Server();
server.addService(echo.EchoService.service, {
  echo: doEcho
});

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