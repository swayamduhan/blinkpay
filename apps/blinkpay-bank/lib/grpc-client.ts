import * as grpc from "@grpc/grpc-js"
import path from "path"
import * as protoLoader from "@grpc/proto-loader"
import { ProtoGrpcType } from "./proto-gen/main"
import { TransactionServiceClient } from "./proto-gen/proto/TransactionService"

const PROTO_PATH = path.resolve("../../packages/proto/bank-queue-proto/main.proto")
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase : true,
    longs : String,
    enums : String,
    defaults : true,
    oneofs : true
})

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

const txnClient = new proto.proto.TransactionService(
    "localhost:50051",
    grpc.credentials.createInsecure()
) as unknown as TransactionServiceClient

export default txnClient