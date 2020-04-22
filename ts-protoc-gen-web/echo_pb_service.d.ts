// package: echo
// file: echo.proto

import * as echo_pb from "./echo_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EchoEcho = {
  readonly methodName: string;
  readonly service: typeof Echo;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof echo_pb.EchoRequest;
  readonly responseType: typeof echo_pb.EchoResponse;
};

type EchoJoin = {
  readonly methodName: string;
  readonly service: typeof Echo;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof echo_pb.Void;
  readonly responseType: typeof echo_pb.EchoResponse;
};

type EchoWrite = {
  readonly methodName: string;
  readonly service: typeof Echo;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof echo_pb.EchoRequest;
  readonly responseType: typeof echo_pb.Void;
};

export class Echo {
  static readonly serviceName: string;
  static readonly Echo: EchoEcho;
  static readonly Join: EchoJoin;
  static readonly Write: EchoWrite;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class EchoClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  echo(
    requestMessage: echo_pb.EchoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: echo_pb.EchoResponse|null) => void
  ): UnaryResponse;
  echo(
    requestMessage: echo_pb.EchoRequest,
    callback: (error: ServiceError|null, responseMessage: echo_pb.EchoResponse|null) => void
  ): UnaryResponse;
  join(requestMessage: echo_pb.Void, metadata?: grpc.Metadata): ResponseStream<echo_pb.EchoResponse>;
  write(
    requestMessage: echo_pb.EchoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: echo_pb.Void|null) => void
  ): UnaryResponse;
  write(
    requestMessage: echo_pb.EchoRequest,
    callback: (error: ServiceError|null, responseMessage: echo_pb.Void|null) => void
  ): UnaryResponse;
}

