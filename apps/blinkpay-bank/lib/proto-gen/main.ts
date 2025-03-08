import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { SayHelloServiceClient as _proto_SayHelloServiceClient, SayHelloServiceDefinition as _proto_SayHelloServiceDefinition } from './proto/SayHelloService';
import type { TransactionServiceClient as _proto_TransactionServiceClient, TransactionServiceDefinition as _proto_TransactionServiceDefinition } from './proto/TransactionService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  proto: {
    AddTransactionRequest: MessageTypeDefinition
    AddTransactionResponse: MessageTypeDefinition
    HelloReply: MessageTypeDefinition
    HelloRequest: MessageTypeDefinition
    SayHelloService: SubtypeConstructor<typeof grpc.Client, _proto_SayHelloServiceClient> & { service: _proto_SayHelloServiceDefinition }
    TransactionService: SubtypeConstructor<typeof grpc.Client, _proto_TransactionServiceClient> & { service: _proto_TransactionServiceDefinition }
  }
}

