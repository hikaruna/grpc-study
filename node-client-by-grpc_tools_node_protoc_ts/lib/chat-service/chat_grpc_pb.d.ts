// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chat_pb from "./chat_pb";

interface IChatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMessages: IChatService_IgetMessages;
}

interface IChatService_IgetMessages extends grpc.MethodDefinition<chat_pb.Void, chat_pb.Messages> {
    path: string; // "/.Chat/getMessages"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<chat_pb.Void>;
    requestDeserialize: grpc.deserialize<chat_pb.Void>;
    responseSerialize: grpc.serialize<chat_pb.Messages>;
    responseDeserialize: grpc.deserialize<chat_pb.Messages>;
}

export const ChatService: IChatService;

export interface IChatServer {
    getMessages: grpc.handleUnaryCall<chat_pb.Void, chat_pb.Messages>;
}

export interface IChatClient {
    getMessages(request: chat_pb.Void, callback: (error: grpc.ServiceError | null, response: chat_pb.Messages) => void): grpc.ClientUnaryCall;
    getMessages(request: chat_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Messages) => void): grpc.ClientUnaryCall;
    getMessages(request: chat_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Messages) => void): grpc.ClientUnaryCall;
}

export class ChatClient extends grpc.Client implements IChatClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMessages(request: chat_pb.Void, callback: (error: grpc.ServiceError | null, response: chat_pb.Messages) => void): grpc.ClientUnaryCall;
    public getMessages(request: chat_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Messages) => void): grpc.ClientUnaryCall;
    public getMessages(request: chat_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Messages) => void): grpc.ClientUnaryCall;
}
