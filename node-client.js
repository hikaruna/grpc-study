import grpc from 'grpc';
import protoLoader from '@grpc/proto-loader';

var packageDefinition = protoLoader.loadSync(
  "./echo.proto",
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
var client = new echo.EchoService('localhost:9090',
  grpc.credentials.createInsecure());



client.echo({ message: 'John' }, {}, (err, response) => {
  if(err) {
    console.error(err);
    process.exit(1);
  }
  console.dir(response);
});
