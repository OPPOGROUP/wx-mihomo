// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hoyolib_pb = require('./hoyolib_pb.js');

function serialize_AccountInfoRequest(arg) {
  if (!(arg instanceof hoyolib_pb.AccountInfoRequest)) {
    throw new Error('Expected argument of type AccountInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AccountInfoRequest(buffer_arg) {
  return hoyolib_pb.AccountInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AccountInfoResponse(arg) {
  if (!(arg instanceof hoyolib_pb.AccountInfoResponse)) {
    throw new Error('Expected argument of type AccountInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AccountInfoResponse(buffer_arg) {
  return hoyolib_pb.AccountInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterRequest(arg) {
  if (!(arg instanceof hoyolib_pb.RegisterRequest)) {
    throw new Error('Expected argument of type RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterRequest(buffer_arg) {
  return hoyolib_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterResponse(arg) {
  if (!(arg instanceof hoyolib_pb.RegisterResponse)) {
    throw new Error('Expected argument of type RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterResponse(buffer_arg) {
  return hoyolib_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SignRequest(arg) {
  if (!(arg instanceof hoyolib_pb.SignRequest)) {
    throw new Error('Expected argument of type SignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SignRequest(buffer_arg) {
  return hoyolib_pb.SignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SignResponse(arg) {
  if (!(arg instanceof hoyolib_pb.SignResponse)) {
    throw new Error('Expected argument of type SignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SignResponse(buffer_arg) {
  return hoyolib_pb.SignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HoyolibService = exports.HoyolibService = {
  register: {
    path: '/Hoyolib/Register',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb.RegisterRequest,
    responseType: hoyolib_pb.RegisterResponse,
    requestSerialize: serialize_RegisterRequest,
    requestDeserialize: deserialize_RegisterRequest,
    responseSerialize: serialize_RegisterResponse,
    responseDeserialize: deserialize_RegisterResponse,
  },
  sign: {
    path: '/Hoyolib/Sign',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb.SignRequest,
    responseType: hoyolib_pb.SignResponse,
    requestSerialize: serialize_SignRequest,
    requestDeserialize: deserialize_SignRequest,
    responseSerialize: serialize_SignResponse,
    responseDeserialize: deserialize_SignResponse,
  },
  getAccountInfo: {
    path: '/Hoyolib/GetAccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb.AccountInfoRequest,
    responseType: hoyolib_pb.AccountInfoResponse,
    requestSerialize: serialize_AccountInfoRequest,
    requestDeserialize: deserialize_AccountInfoRequest,
    responseSerialize: serialize_AccountInfoResponse,
    responseDeserialize: deserialize_AccountInfoResponse,
  },
};

exports.HoyolibClient = grpc.makeGenericClientConstructor(HoyolibService);
