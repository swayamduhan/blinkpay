// Original file: packages/proto/bank-queue-proto/main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloReply as _proto_HelloReply, HelloReply__Output as _proto_HelloReply__Output } from '../proto/HelloReply';
import type { HelloRequest as _proto_HelloRequest, HelloRequest__Output as _proto_HelloRequest__Output } from '../proto/HelloRequest';

export interface SayHelloServiceClient extends grpc.Client {
  SayHello(argument: _proto_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _proto_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _proto_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _proto_HelloRequest, callback: grpc.requestCallback<_proto_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _proto_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _proto_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _proto_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _proto_HelloRequest, callback: grpc.requestCallback<_proto_HelloReply__Output>): grpc.ClientUnaryCall;
  
}

export interface SayHelloServiceHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_proto_HelloRequest__Output, _proto_HelloReply>;
  
}

export interface SayHelloServiceDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_proto_HelloRequest, _proto_HelloReply, _proto_HelloRequest__Output, _proto_HelloReply__Output>
}
