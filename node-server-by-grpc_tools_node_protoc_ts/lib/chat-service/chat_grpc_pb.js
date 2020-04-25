// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_Messages(arg) {
  if (!(arg instanceof chat_pb.Messages)) {
    throw new Error('Expected argument of type Messages');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Messages(buffer_arg) {
  return chat_pb.Messages.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Void(arg) {
  if (!(arg instanceof chat_pb.Void)) {
    throw new Error('Expected argument of type Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Void(buffer_arg) {
  return chat_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  getMessages: {
    path: '/Chat/getMessages',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.Void,
    responseType: chat_pb.Messages,
    requestSerialize: serialize_Void,
    requestDeserialize: deserialize_Void,
    responseSerialize: serialize_Messages,
    responseDeserialize: deserialize_Messages,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
