import * as grpc from "@grpc/grpc-js"
import { TransactionServiceClient } from "./main"

export const grpcClient = new TransactionServiceClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
)