import readline from 'readline';
import grpc from 'grpc';
import { EchoService } from './EchoStub.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = async () => {
  console.dir("main called")
  const client = new EchoService(
    'localhost:9090',
    grpc.credentials.createInsecure()
  );

  const call = client.join({})

  console.dir('get stream successed');
  console.dir(call.status);

  call.on('data', (message) => {
    rl.write(`${message.message}\n`);
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

  rl.on('line', (input) => {
    client.write({ message: input }, {}, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });
}

(async () => {
  await main()
})();
