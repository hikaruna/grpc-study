/**
 * @fileoverview gRPC-Web generated client stub for echo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  EchoRequest,
  EchoResponse,
  Void} from './echo_pb';

export class EchoClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoEcho = new grpcWeb.AbstractClientBase.MethodInfo(
    EchoResponse,
    (request: EchoRequest) => {
      return request.serializeBinary();
    },
    EchoResponse.deserializeBinary
  );

  echo(
    request: EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EchoResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/echo.Echo/Echo',
      request,
      metadata || {},
      this.methodInfoEcho,
      callback);
  }

  methodInfoJoin = new grpcWeb.AbstractClientBase.MethodInfo(
    EchoResponse,
    (request: Void) => {
      return request.serializeBinary();
    },
    EchoResponse.deserializeBinary
  );

  join(
    request: Void,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/echo.Echo/Join',
      request,
      metadata || {},
      this.methodInfoJoin);
  }

  methodInfoWrite = new grpcWeb.AbstractClientBase.MethodInfo(
    Void,
    (request: EchoRequest) => {
      return request.serializeBinary();
    },
    Void.deserializeBinary
  );

  write(
    request: EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Void) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/echo.Echo/Write',
      request,
      metadata || {},
      this.methodInfoWrite,
      callback);
  }

}

