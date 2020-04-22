// GENERATED CODE -- DO NOT EDIT!

// package: echo
// file: echo.proto

import * as echo_pb from "./echo_pb";
import * as grpc from "grpc";

interface IEchoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo: grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.EchoResponse>;
  join: grpc.MethodDefinition<echo_pb.Void, echo_pb.EchoResponse>;
  write: grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.Void>;
}

export const EchoService: IEchoService;

export class EchoClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  echo(argument: echo_pb.EchoRequest, callback: grpc.requestCallback<echo_pb.EchoResponse>): grpc.ClientUnaryCall;
  echo(argument: echo_pb.EchoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<echo_pb.EchoResponse>): grpc.ClientUnaryCall;
  echo(argument: echo_pb.EchoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<echo_pb.EchoResponse>): grpc.ClientUnaryCall;
  join(argument: echo_pb.Void, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<echo_pb.EchoResponse>;
  join(argument: echo_pb.Void, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<echo_pb.EchoResponse>;
  write(argument: echo_pb.EchoRequest, callback: grpc.requestCallback<echo_pb.Void>): grpc.ClientUnaryCall;
  write(argument: echo_pb.EchoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<echo_pb.Void>): grpc.ClientUnaryCall;
  write(argument: echo_pb.EchoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<echo_pb.Void>): grpc.ClientUnaryCall;
}
