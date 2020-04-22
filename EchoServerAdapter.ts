import { ServerUnaryCall, sendUnaryData, ServerWritableStream } from 'grpc'
import { EchoRequest, EchoResponse, Void } from './grpc_tools_node_protoc_ts/echo_pb'
import { IEchoServer as IGrpcEchoServer, IEchoService } from './grpc_tools_node_protoc_ts/echo_grpc_pb'
import { IEchoServer } from './EchoServer'

export default class EchoServerAdapter implements IGrpcEchoServer {
  private adapted: IEchoServer

  constructor(adapted: IEchoServer) {
    this.adapted = adapted
  }

  echo (call: ServerUnaryCall<EchoRequest>, callback: sendUnaryData<EchoResponse>) {
    const result = this.adapted.echo(call.request.getMessage());
    const response = new EchoResponse();
    response.setMessage(result)
    callback(null, response);
  }

  join (call: ServerWritableStream<Void>) {
    this.adapted.join((message: string) => {
      console.debug("on receive callback called")
      const response = new EchoResponse();
      response.setMessage(message)
      call.write(response)
    });
  }

  write (call: ServerUnaryCall<EchoRequest>, callback: sendUnaryData<Void>) {
    console.debug('EchoServerAdapter#write called')
    this.adapted.write(call.request.getMessage());
    callback(null, new Void());
  }
}