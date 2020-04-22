// package: echo
// file: echo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as echo_pb from "./echo_pb";

interface IEchoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    echo: IEchoService_IEcho;
    join: IEchoService_IJoin;
    write: IEchoService_IWrite;
}

interface IEchoService_IEcho extends grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.EchoResponse> {
    path: string; // "/echo.Echo/Echo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<echo_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.EchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.EchoResponse>;
}
interface IEchoService_IJoin extends grpc.MethodDefinition<echo_pb.Void, echo_pb.EchoResponse> {
    path: string; // "/echo.Echo/Join"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<echo_pb.Void>;
    requestDeserialize: grpc.deserialize<echo_pb.Void>;
    responseSerialize: grpc.serialize<echo_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.EchoResponse>;
}
interface IEchoService_IWrite extends grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.Void> {
    path: string; // "/echo.Echo/Write"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<echo_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.EchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.Void>;
    responseDeserialize: grpc.deserialize<echo_pb.Void>;
}

export const EchoService: IEchoService;

export interface IEchoServer {
    echo: grpc.handleUnaryCall<echo_pb.EchoRequest, echo_pb.EchoResponse>;
    join: grpc.handleServerStreamingCall<echo_pb.Void, echo_pb.EchoResponse>;
    write: grpc.handleUnaryCall<echo_pb.EchoRequest, echo_pb.Void>;
}

export interface IEchoClient {
    echo(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echo(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echo(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    join(request: echo_pb.Void, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.EchoResponse>;
    join(request: echo_pb.Void, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.EchoResponse>;
    write(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.Void) => void): grpc.ClientUnaryCall;
    write(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.Void) => void): grpc.ClientUnaryCall;
    write(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.Void) => void): grpc.ClientUnaryCall;
}

export class EchoClient extends grpc.Client implements IEchoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public echo(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echo(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echo(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public join(request: echo_pb.Void, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.EchoResponse>;
    public join(request: echo_pb.Void, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<echo_pb.EchoResponse>;
    public write(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.Void) => void): grpc.ClientUnaryCall;
    public write(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.Void) => void): grpc.ClientUnaryCall;
    public write(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.Void) => void): grpc.ClientUnaryCall;
}
