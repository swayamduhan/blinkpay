// Original file: packages/proto/bank-queue-proto/main.proto


export interface AddTransactionRequest {
  'token'?: (string);
  'success'?: (boolean);
  'type'?: (string);
  'amount'?: (string);
}

export interface AddTransactionRequest__Output {
  'token': (string);
  'success': (boolean);
  'type': (string);
  'amount': (string);
}
