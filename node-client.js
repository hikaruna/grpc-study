import grpc from 'grpc';
import { EchoService } from './EchoStub.js'

const client = new EchoService(
  'localhost:9090',
  grpc.credentials.createInsecure()
);

client.echo({ message: 'John' }, {}, (err, response) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  process.stdout.write(response.message);
  process.stdout.write("\n");
  process.exit(0);
});
