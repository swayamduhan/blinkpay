// Original file: packages/proto/bank-queue-proto/main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddTransactionRequest as _proto_AddTransactionRequest, AddTransactionRequest__Output as _proto_AddTransactionRequest__Output } from '../proto/AddTransactionRequest';
import type { AddTransactionResponse as _proto_AddTransactionResponse, AddTransactionResponse__Output as _proto_AddTransactionResponse__Output } from '../proto/AddTransactionResponse';

export interface TransactionServiceClient extends grpc.Client {
  AddTxnToQueue(argument: _proto_AddTransactionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_AddTransactionResponse__Output>): grpc.ClientUnaryCall;
  AddTxnToQueue(argument: _proto_AddTransactionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_AddTransactionResponse__Output>): grpc.ClientUnaryCall;
  AddTxnToQueue(argument: _proto_AddTransactionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_AddTransactionResponse__Output>): grpc.ClientUnaryCall;
  AddTxnToQueue(argument: _proto_AddTransactionRequest, callback: grpc.requestCallback<_proto_AddTransactionResponse__Output>): grpc.ClientUnaryCall;
  addTxnToQueue(argument: _proto_AddTransactionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_AddTransactionResponse__Output>): grpc.ClientUnaryCall;
  addTxnToQueue(argument: _proto_AddTransactionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_AddTransactionResponse__Output>): grpc.ClientUnaryCall;
  addTxnToQueue(argument: _proto_AddTransactionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_AddTransactionResponse__Output>): grpc.ClientUnaryCall;
  addTxnToQueue(argument: _proto_AddTransactionRequest, callback: grpc.requestCallback<_proto_AddTransactionResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TransactionServiceHandlers extends grpc.UntypedServiceImplementation {
  AddTxnToQueue: grpc.handleUnaryCall<_proto_AddTransactionRequest__Output, _proto_AddTransactionResponse>;
  
}

export interface TransactionServiceDefinition extends grpc.ServiceDefinition {
  AddTxnToQueue: MethodDefinition<_proto_AddTransactionRequest, _proto_AddTransactionResponse, _proto_AddTransactionRequest__Output, _proto_AddTransactionResponse__Output>
}
