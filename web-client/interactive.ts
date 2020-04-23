import { EchoClient } from './protoc-gen-grpc-web/EchoServiceClientPb'
import { EchoRequest, Void } from './protoc-gen-grpc-web/echo_pb'

const echoService = new EchoClient('http://localhost:8080');

window.onload = () => {
  const call = echoService.join(new Void(), {})
  call.on('data', (response) => {
    const msg = response.getMessage()
    const newP = document.createElement("p")
    newP.innerText = msg
    document.querySelector("#list")?.appendChild(newP);
  });

  (document.querySelector('#text-submit')! as HTMLInputElement).onclick = onMessageSubmit
}


const onMessageSubmit = () => {
  console.debug("onMessageSubmit")
  const msg = (document.querySelector('#text-input')! as HTMLInputElement).value

  const request = new EchoRequest();
  request.setMessage(msg);
  const call = echoService.echo(request, {}, function(err, response) {
    if (err) {
      throw err
    }
    console.log(response.getMessage());
  });
}