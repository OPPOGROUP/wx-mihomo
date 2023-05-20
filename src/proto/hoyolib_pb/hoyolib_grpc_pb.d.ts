// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: hoyolib.proto

import * as hoyolib_pb from "./hoyolib_pb";
import * as grpc from "@grpc/grpc-js";

interface IHoyolibService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  register: grpc.MethodDefinition<hoyolib_pb.RegisterRequest, hoyolib_pb.RegisterResponse>;
  sign: grpc.MethodDefinition<hoyolib_pb.SignRequest, hoyolib_pb.SignResponse>;
  getAccountInfo: grpc.MethodDefinition<hoyolib_pb.AccountInfoRequest, hoyolib_pb.AccountInfoResponse>;
}

export const HoyolibService: IHoyolibService;

export interface IHoyolibServer extends grpc.UntypedServiceImplementation {
  register: grpc.handleUnaryCall<hoyolib_pb.RegisterRequest, hoyolib_pb.RegisterResponse>;
  sign: grpc.handleUnaryCall<hoyolib_pb.SignRequest, hoyolib_pb.SignResponse>;
  getAccountInfo: grpc.handleUnaryCall<hoyolib_pb.AccountInfoRequest, hoyolib_pb.AccountInfoResponse>;
}

export class HoyolibClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  register(argument: hoyolib_pb.RegisterRequest, callback: grpc.requestCallback<hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: hoyolib_pb.RegisterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: hoyolib_pb.RegisterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  sign(argument: hoyolib_pb.SignRequest, callback: grpc.requestCallback<hoyolib_pb.SignResponse>): grpc.ClientUnaryCall;
  sign(argument: hoyolib_pb.SignRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb.SignResponse>): grpc.ClientUnaryCall;
  sign(argument: hoyolib_pb.SignRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb.SignResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: hoyolib_pb.AccountInfoRequest, callback: grpc.requestCallback<hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: hoyolib_pb.AccountInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: hoyolib_pb.AccountInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
}
