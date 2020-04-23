import { EchoClient } from './protoc-gen-grpc-web/EchoServiceClientPb'
import { EchoRequest } from './protoc-gen-grpc-web/echo_pb'

const echoService = new EchoClient('http://localhost:8080');

var request = new EchoRequest();
request.setMessage("John");
const call = echoService.echo(request, {}, function(err, response) {
  if (err) {
    throw err
  }
  console.log(response.getMessage());
});

call.on('status', function(status: any) {
  console.log(status.code);
  console.log(status.details);
  console.log(status.metadata);
});

