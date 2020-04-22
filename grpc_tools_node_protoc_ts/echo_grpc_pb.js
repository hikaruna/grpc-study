// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var echo_pb = require('./echo_pb.js');

function serialize_echo_EchoRequest(arg) {
  if (!(arg instanceof echo_pb.EchoRequest)) {
    throw new Error('Expected argument of type echo.EchoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_EchoRequest(buffer_arg) {
  return echo_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_EchoResponse(arg) {
  if (!(arg instanceof echo_pb.EchoResponse)) {
    throw new Error('Expected argument of type echo.EchoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_EchoResponse(buffer_arg) {
  return echo_pb.EchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_Void(arg) {
  if (!(arg instanceof echo_pb.Void)) {
    throw new Error('Expected argument of type echo.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_Void(buffer_arg) {
  return echo_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var EchoService = exports.EchoService = {
  echo: {
    path: '/echo.Echo/Echo',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_echo_EchoRequest,
    requestDeserialize: deserialize_echo_EchoRequest,
    responseSerialize: serialize_echo_EchoResponse,
    responseDeserialize: deserialize_echo_EchoResponse,
  },
  join: {
    path: '/echo.Echo/Join',
    requestStream: false,
    responseStream: true,
    requestType: echo_pb.Void,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_echo_Void,
    requestDeserialize: deserialize_echo_Void,
    responseSerialize: serialize_echo_EchoResponse,
    responseDeserialize: deserialize_echo_EchoResponse,
  },
  write: {
    path: '/echo.Echo/Write',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.Void,
    requestSerialize: serialize_echo_EchoRequest,
    requestDeserialize: deserialize_echo_EchoRequest,
    responseSerialize: serialize_echo_Void,
    responseDeserialize: deserialize_echo_Void,
  },
};

exports.EchoClient = grpc.makeGenericClientConstructor(EchoService);
