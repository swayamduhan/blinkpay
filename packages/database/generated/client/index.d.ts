
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BankTransaction
 * 
 */
export type BankTransaction = $Result.DefaultSelection<Prisma.$BankTransactionPayload>
/**
 * Model P2PTransaction
 * 
 */
export type P2PTransaction = $Result.DefaultSelection<Prisma.$P2PTransactionPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model MagicLinkToken
 * 
 */
export type MagicLinkToken = $Result.DefaultSelection<Prisma.$MagicLinkTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionStatus: {
  PROCESSING: 'PROCESSING',
  FAILED: 'FAILED',
  SUCCESS: 'SUCCESS'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const BankOperation: {
  TOPUP: 'TOPUP',
  WITHDRAWAL: 'WITHDRAWAL'
};

export type BankOperation = (typeof BankOperation)[keyof typeof BankOperation]

}

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type BankOperation = $Enums.BankOperation

export const BankOperation: typeof $Enums.BankOperation

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankTransaction`: Exposes CRUD operations for the **BankTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankTransactions
    * const bankTransactions = await prisma.bankTransaction.findMany()
    * ```
    */
  get bankTransaction(): Prisma.BankTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.p2PTransaction`: Exposes CRUD operations for the **P2PTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more P2PTransactions
    * const p2PTransactions = await prisma.p2PTransaction.findMany()
    * ```
    */
  get p2PTransaction(): Prisma.P2PTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.magicLinkToken`: Exposes CRUD operations for the **MagicLinkToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MagicLinkTokens
    * const magicLinkTokens = await prisma.magicLinkToken.findMany()
    * ```
    */
  get magicLinkToken(): Prisma.MagicLinkTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BankTransaction: 'BankTransaction',
    P2PTransaction: 'P2PTransaction',
    Wallet: 'Wallet',
    MagicLinkToken: 'MagicLinkToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "bankTransaction" | "p2PTransaction" | "wallet" | "magicLinkToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BankTransaction: {
        payload: Prisma.$BankTransactionPayload<ExtArgs>
        fields: Prisma.BankTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          findFirst: {
            args: Prisma.BankTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          findMany: {
            args: Prisma.BankTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          create: {
            args: Prisma.BankTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          createMany: {
            args: Prisma.BankTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          delete: {
            args: Prisma.BankTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          update: {
            args: Prisma.BankTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          deleteMany: {
            args: Prisma.BankTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          upsert: {
            args: Prisma.BankTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          aggregate: {
            args: Prisma.BankTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankTransaction>
          }
          groupBy: {
            args: Prisma.BankTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<BankTransactionCountAggregateOutputType> | number
          }
        }
      }
      P2PTransaction: {
        payload: Prisma.$P2PTransactionPayload<ExtArgs>
        fields: Prisma.P2PTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.P2PTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.P2PTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>
          }
          findFirst: {
            args: Prisma.P2PTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.P2PTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>
          }
          findMany: {
            args: Prisma.P2PTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>[]
          }
          create: {
            args: Prisma.P2PTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>
          }
          createMany: {
            args: Prisma.P2PTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.P2PTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>[]
          }
          delete: {
            args: Prisma.P2PTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>
          }
          update: {
            args: Prisma.P2PTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>
          }
          deleteMany: {
            args: Prisma.P2PTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.P2PTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.P2PTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>[]
          }
          upsert: {
            args: Prisma.P2PTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransactionPayload>
          }
          aggregate: {
            args: Prisma.P2PTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateP2PTransaction>
          }
          groupBy: {
            args: Prisma.P2PTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<P2PTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.P2PTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<P2PTransactionCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      MagicLinkToken: {
        payload: Prisma.$MagicLinkTokenPayload<ExtArgs>
        fields: Prisma.MagicLinkTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MagicLinkTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MagicLinkTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>
          }
          findFirst: {
            args: Prisma.MagicLinkTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MagicLinkTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>
          }
          findMany: {
            args: Prisma.MagicLinkTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>[]
          }
          create: {
            args: Prisma.MagicLinkTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>
          }
          createMany: {
            args: Prisma.MagicLinkTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MagicLinkTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>[]
          }
          delete: {
            args: Prisma.MagicLinkTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>
          }
          update: {
            args: Prisma.MagicLinkTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>
          }
          deleteMany: {
            args: Prisma.MagicLinkTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MagicLinkTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MagicLinkTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>[]
          }
          upsert: {
            args: Prisma.MagicLinkTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkTokenPayload>
          }
          aggregate: {
            args: Prisma.MagicLinkTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMagicLinkToken>
          }
          groupBy: {
            args: Prisma.MagicLinkTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<MagicLinkTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.MagicLinkTokenCountArgs<ExtArgs>
            result: $Utils.Optional<MagicLinkTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    bankTransaction?: BankTransactionOmit
    p2PTransaction?: P2PTransactionOmit
    wallet?: WalletOmit
    magicLinkToken?: MagicLinkTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    BankTxns: number
    sentTxns: number
    receiveTxns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BankTxns?: boolean | UserCountOutputTypeCountBankTxnsArgs
    sentTxns?: boolean | UserCountOutputTypeCountSentTxnsArgs
    receiveTxns?: boolean | UserCountOutputTypeCountReceiveTxnsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2PTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiveTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2PTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    emailVerified: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    emailVerified: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    emailVerified: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    emailVerified?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    emailVerified?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    emailVerified?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phone: string | null
    emailVerified: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    wallet?: boolean | User$walletArgs<ExtArgs>
    magicToken?: boolean | User$magicTokenArgs<ExtArgs>
    BankTxns?: boolean | User$BankTxnsArgs<ExtArgs>
    sentTxns?: boolean | User$sentTxnsArgs<ExtArgs>
    receiveTxns?: boolean | User$receiveTxnsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    emailVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    emailVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    emailVerified?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "emailVerified" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | User$walletArgs<ExtArgs>
    magicToken?: boolean | User$magicTokenArgs<ExtArgs>
    BankTxns?: boolean | User$BankTxnsArgs<ExtArgs>
    sentTxns?: boolean | User$sentTxnsArgs<ExtArgs>
    receiveTxns?: boolean | User$receiveTxnsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs> | null
      magicToken: Prisma.$MagicLinkTokenPayload<ExtArgs> | null
      BankTxns: Prisma.$BankTransactionPayload<ExtArgs>[]
      sentTxns: Prisma.$P2PTransactionPayload<ExtArgs>[]
      receiveTxns: Prisma.$P2PTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string | null
      emailVerified: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    magicToken<T extends User$magicTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$magicTokenArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    BankTxns<T extends User$BankTxnsArgs<ExtArgs> = {}>(args?: Subset<T, User$BankTxnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    sentTxns<T extends User$sentTxnsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentTxnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    receiveTxns<T extends User$receiveTxnsArgs<ExtArgs> = {}>(args?: Subset<T, User$receiveTxnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * User.magicToken
   */
  export type User$magicTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    where?: MagicLinkTokenWhereInput
  }

  /**
   * User.BankTxns
   */
  export type User$BankTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    cursor?: BankTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * User.sentTxns
   */
  export type User$sentTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    where?: P2PTransactionWhereInput
    orderBy?: P2PTransactionOrderByWithRelationInput | P2PTransactionOrderByWithRelationInput[]
    cursor?: P2PTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2PTransactionScalarFieldEnum | P2PTransactionScalarFieldEnum[]
  }

  /**
   * User.receiveTxns
   */
  export type User$receiveTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    where?: P2PTransactionWhereInput
    orderBy?: P2PTransactionOrderByWithRelationInput | P2PTransactionOrderByWithRelationInput[]
    cursor?: P2PTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2PTransactionScalarFieldEnum | P2PTransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BankTransaction
   */

  export type AggregateBankTransaction = {
    _count: BankTransactionCountAggregateOutputType | null
    _avg: BankTransactionAvgAggregateOutputType | null
    _sum: BankTransactionSumAggregateOutputType | null
    _min: BankTransactionMinAggregateOutputType | null
    _max: BankTransactionMaxAggregateOutputType | null
  }

  export type BankTransactionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type BankTransactionSumAggregateOutputType = {
    id: bigint | null
    userId: number | null
    amount: Decimal | null
  }

  export type BankTransactionMinAggregateOutputType = {
    id: bigint | null
    userId: number | null
    token: string | null
    provider: string | null
    operationType: $Enums.BankOperation | null
    amount: Decimal | null
    createdAt: Date | null
  }

  export type BankTransactionMaxAggregateOutputType = {
    id: bigint | null
    userId: number | null
    token: string | null
    provider: string | null
    operationType: $Enums.BankOperation | null
    amount: Decimal | null
    createdAt: Date | null
  }

  export type BankTransactionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    provider: number
    operationType: number
    amount: number
    createdAt: number
    _all: number
  }


  export type BankTransactionAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type BankTransactionSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type BankTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    provider?: true
    operationType?: true
    amount?: true
    createdAt?: true
  }

  export type BankTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    provider?: true
    operationType?: true
    amount?: true
    createdAt?: true
  }

  export type BankTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    provider?: true
    operationType?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type BankTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankTransaction to aggregate.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankTransactions
    **/
    _count?: true | BankTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankTransactionMaxAggregateInputType
  }

  export type GetBankTransactionAggregateType<T extends BankTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateBankTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankTransaction[P]>
      : GetScalarType<T[P], AggregateBankTransaction[P]>
  }




  export type BankTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithAggregationInput | BankTransactionOrderByWithAggregationInput[]
    by: BankTransactionScalarFieldEnum[] | BankTransactionScalarFieldEnum
    having?: BankTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankTransactionCountAggregateInputType | true
    _avg?: BankTransactionAvgAggregateInputType
    _sum?: BankTransactionSumAggregateInputType
    _min?: BankTransactionMinAggregateInputType
    _max?: BankTransactionMaxAggregateInputType
  }

  export type BankTransactionGroupByOutputType = {
    id: bigint
    userId: number
    token: string | null
    provider: string
    operationType: $Enums.BankOperation
    amount: Decimal
    createdAt: Date
    _count: BankTransactionCountAggregateOutputType | null
    _avg: BankTransactionAvgAggregateOutputType | null
    _sum: BankTransactionSumAggregateOutputType | null
    _min: BankTransactionMinAggregateOutputType | null
    _max: BankTransactionMaxAggregateOutputType | null
  }

  type GetBankTransactionGroupByPayload<T extends BankTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], BankTransactionGroupByOutputType[P]>
        }
      >
    >


  export type BankTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    provider?: boolean
    operationType?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    provider?: boolean
    operationType?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    provider?: boolean
    operationType?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    provider?: boolean
    operationType?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type BankTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "provider" | "operationType" | "amount" | "createdAt", ExtArgs["result"]["bankTransaction"]>
  export type BankTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BankTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: number
      token: string | null
      provider: string
      operationType: $Enums.BankOperation
      amount: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["bankTransaction"]>
    composites: {}
  }

  type BankTransactionGetPayload<S extends boolean | null | undefined | BankTransactionDefaultArgs> = $Result.GetResult<Prisma.$BankTransactionPayload, S>

  type BankTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankTransactionCountAggregateInputType | true
    }

  export interface BankTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankTransaction'], meta: { name: 'BankTransaction' } }
    /**
     * Find zero or one BankTransaction that matches the filter.
     * @param {BankTransactionFindUniqueArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankTransactionFindUniqueArgs>(args: SelectSubset<T, BankTransactionFindUniqueArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BankTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankTransactionFindUniqueOrThrowArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, BankTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BankTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindFirstArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankTransactionFindFirstArgs>(args?: SelectSubset<T, BankTransactionFindFirstArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BankTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindFirstOrThrowArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, BankTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BankTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankTransactions
     * const bankTransactions = await prisma.bankTransaction.findMany()
     * 
     * // Get first 10 BankTransactions
     * const bankTransactions = await prisma.bankTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankTransactionFindManyArgs>(args?: SelectSubset<T, BankTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BankTransaction.
     * @param {BankTransactionCreateArgs} args - Arguments to create a BankTransaction.
     * @example
     * // Create one BankTransaction
     * const BankTransaction = await prisma.bankTransaction.create({
     *   data: {
     *     // ... data to create a BankTransaction
     *   }
     * })
     * 
     */
    create<T extends BankTransactionCreateArgs>(args: SelectSubset<T, BankTransactionCreateArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BankTransactions.
     * @param {BankTransactionCreateManyArgs} args - Arguments to create many BankTransactions.
     * @example
     * // Create many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankTransactionCreateManyArgs>(args?: SelectSubset<T, BankTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankTransactions and returns the data saved in the database.
     * @param {BankTransactionCreateManyAndReturnArgs} args - Arguments to create many BankTransactions.
     * @example
     * // Create many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankTransactions and only return the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, BankTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a BankTransaction.
     * @param {BankTransactionDeleteArgs} args - Arguments to delete one BankTransaction.
     * @example
     * // Delete one BankTransaction
     * const BankTransaction = await prisma.bankTransaction.delete({
     *   where: {
     *     // ... filter to delete one BankTransaction
     *   }
     * })
     * 
     */
    delete<T extends BankTransactionDeleteArgs>(args: SelectSubset<T, BankTransactionDeleteArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BankTransaction.
     * @param {BankTransactionUpdateArgs} args - Arguments to update one BankTransaction.
     * @example
     * // Update one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankTransactionUpdateArgs>(args: SelectSubset<T, BankTransactionUpdateArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BankTransactions.
     * @param {BankTransactionDeleteManyArgs} args - Arguments to filter BankTransactions to delete.
     * @example
     * // Delete a few BankTransactions
     * const { count } = await prisma.bankTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankTransactionDeleteManyArgs>(args?: SelectSubset<T, BankTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankTransactionUpdateManyArgs>(args: SelectSubset<T, BankTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankTransactions and returns the data updated in the database.
     * @param {BankTransactionUpdateManyAndReturnArgs} args - Arguments to update many BankTransactions.
     * @example
     * // Update many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankTransactions and only return the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, BankTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one BankTransaction.
     * @param {BankTransactionUpsertArgs} args - Arguments to update or create a BankTransaction.
     * @example
     * // Update or create a BankTransaction
     * const bankTransaction = await prisma.bankTransaction.upsert({
     *   create: {
     *     // ... data to create a BankTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankTransaction we want to update
     *   }
     * })
     */
    upsert<T extends BankTransactionUpsertArgs>(args: SelectSubset<T, BankTransactionUpsertArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BankTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionCountArgs} args - Arguments to filter BankTransactions to count.
     * @example
     * // Count the number of BankTransactions
     * const count = await prisma.bankTransaction.count({
     *   where: {
     *     // ... the filter for the BankTransactions we want to count
     *   }
     * })
    **/
    count<T extends BankTransactionCountArgs>(
      args?: Subset<T, BankTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankTransactionAggregateArgs>(args: Subset<T, BankTransactionAggregateArgs>): Prisma.PrismaPromise<GetBankTransactionAggregateType<T>>

    /**
     * Group by BankTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankTransactionGroupByArgs['orderBy'] }
        : { orderBy?: BankTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankTransaction model
   */
  readonly fields: BankTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankTransaction model
   */ 
  interface BankTransactionFieldRefs {
    readonly id: FieldRef<"BankTransaction", 'BigInt'>
    readonly userId: FieldRef<"BankTransaction", 'Int'>
    readonly token: FieldRef<"BankTransaction", 'String'>
    readonly provider: FieldRef<"BankTransaction", 'String'>
    readonly operationType: FieldRef<"BankTransaction", 'BankOperation'>
    readonly amount: FieldRef<"BankTransaction", 'Decimal'>
    readonly createdAt: FieldRef<"BankTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankTransaction findUnique
   */
  export type BankTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction findUniqueOrThrow
   */
  export type BankTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction findFirst
   */
  export type BankTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankTransactions.
     */
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction findFirstOrThrow
   */
  export type BankTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankTransactions.
     */
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction findMany
   */
  export type BankTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransactions to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction create
   */
  export type BankTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a BankTransaction.
     */
    data: XOR<BankTransactionCreateInput, BankTransactionUncheckedCreateInput>
  }

  /**
   * BankTransaction createMany
   */
  export type BankTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankTransactions.
     */
    data: BankTransactionCreateManyInput | BankTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankTransaction createManyAndReturn
   */
  export type BankTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many BankTransactions.
     */
    data: BankTransactionCreateManyInput | BankTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankTransaction update
   */
  export type BankTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a BankTransaction.
     */
    data: XOR<BankTransactionUpdateInput, BankTransactionUncheckedUpdateInput>
    /**
     * Choose, which BankTransaction to update.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction updateMany
   */
  export type BankTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankTransactions.
     */
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BankTransactions to update
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to update.
     */
    limit?: number
  }

  /**
   * BankTransaction updateManyAndReturn
   */
  export type BankTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * The data used to update BankTransactions.
     */
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BankTransactions to update
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankTransaction upsert
   */
  export type BankTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the BankTransaction to update in case it exists.
     */
    where: BankTransactionWhereUniqueInput
    /**
     * In case the BankTransaction found by the `where` argument doesn't exist, create a new BankTransaction with this data.
     */
    create: XOR<BankTransactionCreateInput, BankTransactionUncheckedCreateInput>
    /**
     * In case the BankTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankTransactionUpdateInput, BankTransactionUncheckedUpdateInput>
  }

  /**
   * BankTransaction delete
   */
  export type BankTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter which BankTransaction to delete.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction deleteMany
   */
  export type BankTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankTransactions to delete
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to delete.
     */
    limit?: number
  }

  /**
   * BankTransaction without action
   */
  export type BankTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
  }


  /**
   * Model P2PTransaction
   */

  export type AggregateP2PTransaction = {
    _count: P2PTransactionCountAggregateOutputType | null
    _avg: P2PTransactionAvgAggregateOutputType | null
    _sum: P2PTransactionSumAggregateOutputType | null
    _min: P2PTransactionMinAggregateOutputType | null
    _max: P2PTransactionMaxAggregateOutputType | null
  }

  export type P2PTransactionAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    amount: Decimal | null
  }

  export type P2PTransactionSumAggregateOutputType = {
    id: bigint | null
    senderId: number | null
    receiverId: number | null
    amount: Decimal | null
  }

  export type P2PTransactionMinAggregateOutputType = {
    id: bigint | null
    senderId: number | null
    receiverId: number | null
    amount: Decimal | null
  }

  export type P2PTransactionMaxAggregateOutputType = {
    id: bigint | null
    senderId: number | null
    receiverId: number | null
    amount: Decimal | null
  }

  export type P2PTransactionCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    amount: number
    _all: number
  }


  export type P2PTransactionAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    amount?: true
  }

  export type P2PTransactionSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    amount?: true
  }

  export type P2PTransactionMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    amount?: true
  }

  export type P2PTransactionMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    amount?: true
  }

  export type P2PTransactionCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    amount?: true
    _all?: true
  }

  export type P2PTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which P2PTransaction to aggregate.
     */
    where?: P2PTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2PTransactions to fetch.
     */
    orderBy?: P2PTransactionOrderByWithRelationInput | P2PTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: P2PTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2PTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2PTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned P2PTransactions
    **/
    _count?: true | P2PTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: P2PTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: P2PTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: P2PTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: P2PTransactionMaxAggregateInputType
  }

  export type GetP2PTransactionAggregateType<T extends P2PTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateP2PTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateP2PTransaction[P]>
      : GetScalarType<T[P], AggregateP2PTransaction[P]>
  }




  export type P2PTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2PTransactionWhereInput
    orderBy?: P2PTransactionOrderByWithAggregationInput | P2PTransactionOrderByWithAggregationInput[]
    by: P2PTransactionScalarFieldEnum[] | P2PTransactionScalarFieldEnum
    having?: P2PTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: P2PTransactionCountAggregateInputType | true
    _avg?: P2PTransactionAvgAggregateInputType
    _sum?: P2PTransactionSumAggregateInputType
    _min?: P2PTransactionMinAggregateInputType
    _max?: P2PTransactionMaxAggregateInputType
  }

  export type P2PTransactionGroupByOutputType = {
    id: bigint
    senderId: number
    receiverId: number
    amount: Decimal
    _count: P2PTransactionCountAggregateOutputType | null
    _avg: P2PTransactionAvgAggregateOutputType | null
    _sum: P2PTransactionSumAggregateOutputType | null
    _min: P2PTransactionMinAggregateOutputType | null
    _max: P2PTransactionMaxAggregateOutputType | null
  }

  type GetP2PTransactionGroupByPayload<T extends P2PTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<P2PTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof P2PTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], P2PTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], P2PTransactionGroupByOutputType[P]>
        }
      >
    >


  export type P2PTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    amount?: boolean
    senderUser?: boolean | UserDefaultArgs<ExtArgs>
    receiverUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2PTransaction"]>

  export type P2PTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    amount?: boolean
    senderUser?: boolean | UserDefaultArgs<ExtArgs>
    receiverUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2PTransaction"]>

  export type P2PTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    amount?: boolean
    senderUser?: boolean | UserDefaultArgs<ExtArgs>
    receiverUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2PTransaction"]>

  export type P2PTransactionSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    amount?: boolean
  }

  export type P2PTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "amount", ExtArgs["result"]["p2PTransaction"]>
  export type P2PTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderUser?: boolean | UserDefaultArgs<ExtArgs>
    receiverUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type P2PTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderUser?: boolean | UserDefaultArgs<ExtArgs>
    receiverUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type P2PTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderUser?: boolean | UserDefaultArgs<ExtArgs>
    receiverUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $P2PTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "P2PTransaction"
    objects: {
      senderUser: Prisma.$UserPayload<ExtArgs>
      receiverUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      senderId: number
      receiverId: number
      amount: Prisma.Decimal
    }, ExtArgs["result"]["p2PTransaction"]>
    composites: {}
  }

  type P2PTransactionGetPayload<S extends boolean | null | undefined | P2PTransactionDefaultArgs> = $Result.GetResult<Prisma.$P2PTransactionPayload, S>

  type P2PTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<P2PTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: P2PTransactionCountAggregateInputType | true
    }

  export interface P2PTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['P2PTransaction'], meta: { name: 'P2PTransaction' } }
    /**
     * Find zero or one P2PTransaction that matches the filter.
     * @param {P2PTransactionFindUniqueArgs} args - Arguments to find a P2PTransaction
     * @example
     * // Get one P2PTransaction
     * const p2PTransaction = await prisma.p2PTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends P2PTransactionFindUniqueArgs>(args: SelectSubset<T, P2PTransactionFindUniqueArgs<ExtArgs>>): Prisma__P2PTransactionClient<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one P2PTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {P2PTransactionFindUniqueOrThrowArgs} args - Arguments to find a P2PTransaction
     * @example
     * // Get one P2PTransaction
     * const p2PTransaction = await prisma.p2PTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends P2PTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, P2PTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__P2PTransactionClient<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first P2PTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransactionFindFirstArgs} args - Arguments to find a P2PTransaction
     * @example
     * // Get one P2PTransaction
     * const p2PTransaction = await prisma.p2PTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends P2PTransactionFindFirstArgs>(args?: SelectSubset<T, P2PTransactionFindFirstArgs<ExtArgs>>): Prisma__P2PTransactionClient<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first P2PTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransactionFindFirstOrThrowArgs} args - Arguments to find a P2PTransaction
     * @example
     * // Get one P2PTransaction
     * const p2PTransaction = await prisma.p2PTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends P2PTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, P2PTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__P2PTransactionClient<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more P2PTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all P2PTransactions
     * const p2PTransactions = await prisma.p2PTransaction.findMany()
     * 
     * // Get first 10 P2PTransactions
     * const p2PTransactions = await prisma.p2PTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const p2PTransactionWithIdOnly = await prisma.p2PTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends P2PTransactionFindManyArgs>(args?: SelectSubset<T, P2PTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a P2PTransaction.
     * @param {P2PTransactionCreateArgs} args - Arguments to create a P2PTransaction.
     * @example
     * // Create one P2PTransaction
     * const P2PTransaction = await prisma.p2PTransaction.create({
     *   data: {
     *     // ... data to create a P2PTransaction
     *   }
     * })
     * 
     */
    create<T extends P2PTransactionCreateArgs>(args: SelectSubset<T, P2PTransactionCreateArgs<ExtArgs>>): Prisma__P2PTransactionClient<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many P2PTransactions.
     * @param {P2PTransactionCreateManyArgs} args - Arguments to create many P2PTransactions.
     * @example
     * // Create many P2PTransactions
     * const p2PTransaction = await prisma.p2PTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends P2PTransactionCreateManyArgs>(args?: SelectSubset<T, P2PTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many P2PTransactions and returns the data saved in the database.
     * @param {P2PTransactionCreateManyAndReturnArgs} args - Arguments to create many P2PTransactions.
     * @example
     * // Create many P2PTransactions
     * const p2PTransaction = await prisma.p2PTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many P2PTransactions and only return the `id`
     * const p2PTransactionWithIdOnly = await prisma.p2PTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends P2PTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, P2PTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a P2PTransaction.
     * @param {P2PTransactionDeleteArgs} args - Arguments to delete one P2PTransaction.
     * @example
     * // Delete one P2PTransaction
     * const P2PTransaction = await prisma.p2PTransaction.delete({
     *   where: {
     *     // ... filter to delete one P2PTransaction
     *   }
     * })
     * 
     */
    delete<T extends P2PTransactionDeleteArgs>(args: SelectSubset<T, P2PTransactionDeleteArgs<ExtArgs>>): Prisma__P2PTransactionClient<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one P2PTransaction.
     * @param {P2PTransactionUpdateArgs} args - Arguments to update one P2PTransaction.
     * @example
     * // Update one P2PTransaction
     * const p2PTransaction = await prisma.p2PTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends P2PTransactionUpdateArgs>(args: SelectSubset<T, P2PTransactionUpdateArgs<ExtArgs>>): Prisma__P2PTransactionClient<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more P2PTransactions.
     * @param {P2PTransactionDeleteManyArgs} args - Arguments to filter P2PTransactions to delete.
     * @example
     * // Delete a few P2PTransactions
     * const { count } = await prisma.p2PTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends P2PTransactionDeleteManyArgs>(args?: SelectSubset<T, P2PTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2PTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many P2PTransactions
     * const p2PTransaction = await prisma.p2PTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends P2PTransactionUpdateManyArgs>(args: SelectSubset<T, P2PTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2PTransactions and returns the data updated in the database.
     * @param {P2PTransactionUpdateManyAndReturnArgs} args - Arguments to update many P2PTransactions.
     * @example
     * // Update many P2PTransactions
     * const p2PTransaction = await prisma.p2PTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more P2PTransactions and only return the `id`
     * const p2PTransactionWithIdOnly = await prisma.p2PTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends P2PTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, P2PTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one P2PTransaction.
     * @param {P2PTransactionUpsertArgs} args - Arguments to update or create a P2PTransaction.
     * @example
     * // Update or create a P2PTransaction
     * const p2PTransaction = await prisma.p2PTransaction.upsert({
     *   create: {
     *     // ... data to create a P2PTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the P2PTransaction we want to update
     *   }
     * })
     */
    upsert<T extends P2PTransactionUpsertArgs>(args: SelectSubset<T, P2PTransactionUpsertArgs<ExtArgs>>): Prisma__P2PTransactionClient<$Result.GetResult<Prisma.$P2PTransactionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of P2PTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransactionCountArgs} args - Arguments to filter P2PTransactions to count.
     * @example
     * // Count the number of P2PTransactions
     * const count = await prisma.p2PTransaction.count({
     *   where: {
     *     // ... the filter for the P2PTransactions we want to count
     *   }
     * })
    **/
    count<T extends P2PTransactionCountArgs>(
      args?: Subset<T, P2PTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], P2PTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a P2PTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends P2PTransactionAggregateArgs>(args: Subset<T, P2PTransactionAggregateArgs>): Prisma.PrismaPromise<GetP2PTransactionAggregateType<T>>

    /**
     * Group by P2PTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends P2PTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: P2PTransactionGroupByArgs['orderBy'] }
        : { orderBy?: P2PTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, P2PTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetP2PTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the P2PTransaction model
   */
  readonly fields: P2PTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for P2PTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__P2PTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    receiverUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the P2PTransaction model
   */ 
  interface P2PTransactionFieldRefs {
    readonly id: FieldRef<"P2PTransaction", 'BigInt'>
    readonly senderId: FieldRef<"P2PTransaction", 'Int'>
    readonly receiverId: FieldRef<"P2PTransaction", 'Int'>
    readonly amount: FieldRef<"P2PTransaction", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * P2PTransaction findUnique
   */
  export type P2PTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransaction to fetch.
     */
    where: P2PTransactionWhereUniqueInput
  }

  /**
   * P2PTransaction findUniqueOrThrow
   */
  export type P2PTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransaction to fetch.
     */
    where: P2PTransactionWhereUniqueInput
  }

  /**
   * P2PTransaction findFirst
   */
  export type P2PTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransaction to fetch.
     */
    where?: P2PTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2PTransactions to fetch.
     */
    orderBy?: P2PTransactionOrderByWithRelationInput | P2PTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for P2PTransactions.
     */
    cursor?: P2PTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2PTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2PTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of P2PTransactions.
     */
    distinct?: P2PTransactionScalarFieldEnum | P2PTransactionScalarFieldEnum[]
  }

  /**
   * P2PTransaction findFirstOrThrow
   */
  export type P2PTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransaction to fetch.
     */
    where?: P2PTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2PTransactions to fetch.
     */
    orderBy?: P2PTransactionOrderByWithRelationInput | P2PTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for P2PTransactions.
     */
    cursor?: P2PTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2PTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2PTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of P2PTransactions.
     */
    distinct?: P2PTransactionScalarFieldEnum | P2PTransactionScalarFieldEnum[]
  }

  /**
   * P2PTransaction findMany
   */
  export type P2PTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransactions to fetch.
     */
    where?: P2PTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2PTransactions to fetch.
     */
    orderBy?: P2PTransactionOrderByWithRelationInput | P2PTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing P2PTransactions.
     */
    cursor?: P2PTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2PTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2PTransactions.
     */
    skip?: number
    distinct?: P2PTransactionScalarFieldEnum | P2PTransactionScalarFieldEnum[]
  }

  /**
   * P2PTransaction create
   */
  export type P2PTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a P2PTransaction.
     */
    data: XOR<P2PTransactionCreateInput, P2PTransactionUncheckedCreateInput>
  }

  /**
   * P2PTransaction createMany
   */
  export type P2PTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many P2PTransactions.
     */
    data: P2PTransactionCreateManyInput | P2PTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * P2PTransaction createManyAndReturn
   */
  export type P2PTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many P2PTransactions.
     */
    data: P2PTransactionCreateManyInput | P2PTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * P2PTransaction update
   */
  export type P2PTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a P2PTransaction.
     */
    data: XOR<P2PTransactionUpdateInput, P2PTransactionUncheckedUpdateInput>
    /**
     * Choose, which P2PTransaction to update.
     */
    where: P2PTransactionWhereUniqueInput
  }

  /**
   * P2PTransaction updateMany
   */
  export type P2PTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update P2PTransactions.
     */
    data: XOR<P2PTransactionUpdateManyMutationInput, P2PTransactionUncheckedUpdateManyInput>
    /**
     * Filter which P2PTransactions to update
     */
    where?: P2PTransactionWhereInput
    /**
     * Limit how many P2PTransactions to update.
     */
    limit?: number
  }

  /**
   * P2PTransaction updateManyAndReturn
   */
  export type P2PTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * The data used to update P2PTransactions.
     */
    data: XOR<P2PTransactionUpdateManyMutationInput, P2PTransactionUncheckedUpdateManyInput>
    /**
     * Filter which P2PTransactions to update
     */
    where?: P2PTransactionWhereInput
    /**
     * Limit how many P2PTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * P2PTransaction upsert
   */
  export type P2PTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the P2PTransaction to update in case it exists.
     */
    where: P2PTransactionWhereUniqueInput
    /**
     * In case the P2PTransaction found by the `where` argument doesn't exist, create a new P2PTransaction with this data.
     */
    create: XOR<P2PTransactionCreateInput, P2PTransactionUncheckedCreateInput>
    /**
     * In case the P2PTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<P2PTransactionUpdateInput, P2PTransactionUncheckedUpdateInput>
  }

  /**
   * P2PTransaction delete
   */
  export type P2PTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
    /**
     * Filter which P2PTransaction to delete.
     */
    where: P2PTransactionWhereUniqueInput
  }

  /**
   * P2PTransaction deleteMany
   */
  export type P2PTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which P2PTransactions to delete
     */
    where?: P2PTransactionWhereInput
    /**
     * Limit how many P2PTransactions to delete.
     */
    limit?: number
  }

  /**
   * P2PTransaction without action
   */
  export type P2PTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransaction
     */
    select?: P2PTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransaction
     */
    omit?: P2PTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: Decimal | null
  }

  export type WalletSumAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: Decimal | null
  }

  export type WalletMinAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: Decimal | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: Decimal | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    updatedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: number
    userId: number
    balance: Decimal
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    updatedAt?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balance" | "updatedAt", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      balance: Prisma.Decimal
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wallet model
   */ 
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'Int'>
    readonly userId: FieldRef<"Wallet", 'Int'>
    readonly balance: FieldRef<"Wallet", 'Decimal'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model MagicLinkToken
   */

  export type AggregateMagicLinkToken = {
    _count: MagicLinkTokenCountAggregateOutputType | null
    _avg: MagicLinkTokenAvgAggregateOutputType | null
    _sum: MagicLinkTokenSumAggregateOutputType | null
    _min: MagicLinkTokenMinAggregateOutputType | null
    _max: MagicLinkTokenMaxAggregateOutputType | null
  }

  export type MagicLinkTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MagicLinkTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MagicLinkTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
  }

  export type MagicLinkTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
  }

  export type MagicLinkTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    _all: number
  }


  export type MagicLinkTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MagicLinkTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MagicLinkTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
  }

  export type MagicLinkTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
  }

  export type MagicLinkTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    _all?: true
  }

  export type MagicLinkTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MagicLinkToken to aggregate.
     */
    where?: MagicLinkTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicLinkTokens to fetch.
     */
    orderBy?: MagicLinkTokenOrderByWithRelationInput | MagicLinkTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MagicLinkTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicLinkTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicLinkTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MagicLinkTokens
    **/
    _count?: true | MagicLinkTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MagicLinkTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MagicLinkTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MagicLinkTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MagicLinkTokenMaxAggregateInputType
  }

  export type GetMagicLinkTokenAggregateType<T extends MagicLinkTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateMagicLinkToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMagicLinkToken[P]>
      : GetScalarType<T[P], AggregateMagicLinkToken[P]>
  }




  export type MagicLinkTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagicLinkTokenWhereInput
    orderBy?: MagicLinkTokenOrderByWithAggregationInput | MagicLinkTokenOrderByWithAggregationInput[]
    by: MagicLinkTokenScalarFieldEnum[] | MagicLinkTokenScalarFieldEnum
    having?: MagicLinkTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MagicLinkTokenCountAggregateInputType | true
    _avg?: MagicLinkTokenAvgAggregateInputType
    _sum?: MagicLinkTokenSumAggregateInputType
    _min?: MagicLinkTokenMinAggregateInputType
    _max?: MagicLinkTokenMaxAggregateInputType
  }

  export type MagicLinkTokenGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date
    _count: MagicLinkTokenCountAggregateOutputType | null
    _avg: MagicLinkTokenAvgAggregateOutputType | null
    _sum: MagicLinkTokenSumAggregateOutputType | null
    _min: MagicLinkTokenMinAggregateOutputType | null
    _max: MagicLinkTokenMaxAggregateOutputType | null
  }

  type GetMagicLinkTokenGroupByPayload<T extends MagicLinkTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MagicLinkTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MagicLinkTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MagicLinkTokenGroupByOutputType[P]>
            : GetScalarType<T[P], MagicLinkTokenGroupByOutputType[P]>
        }
      >
    >


  export type MagicLinkTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["magicLinkToken"]>

  export type MagicLinkTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["magicLinkToken"]>

  export type MagicLinkTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["magicLinkToken"]>

  export type MagicLinkTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
  }

  export type MagicLinkTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt", ExtArgs["result"]["magicLinkToken"]>
  export type MagicLinkTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MagicLinkTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MagicLinkTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MagicLinkTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MagicLinkToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date
    }, ExtArgs["result"]["magicLinkToken"]>
    composites: {}
  }

  type MagicLinkTokenGetPayload<S extends boolean | null | undefined | MagicLinkTokenDefaultArgs> = $Result.GetResult<Prisma.$MagicLinkTokenPayload, S>

  type MagicLinkTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MagicLinkTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MagicLinkTokenCountAggregateInputType | true
    }

  export interface MagicLinkTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MagicLinkToken'], meta: { name: 'MagicLinkToken' } }
    /**
     * Find zero or one MagicLinkToken that matches the filter.
     * @param {MagicLinkTokenFindUniqueArgs} args - Arguments to find a MagicLinkToken
     * @example
     * // Get one MagicLinkToken
     * const magicLinkToken = await prisma.magicLinkToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MagicLinkTokenFindUniqueArgs>(args: SelectSubset<T, MagicLinkTokenFindUniqueArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MagicLinkToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MagicLinkTokenFindUniqueOrThrowArgs} args - Arguments to find a MagicLinkToken
     * @example
     * // Get one MagicLinkToken
     * const magicLinkToken = await prisma.magicLinkToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MagicLinkTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, MagicLinkTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MagicLinkToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkTokenFindFirstArgs} args - Arguments to find a MagicLinkToken
     * @example
     * // Get one MagicLinkToken
     * const magicLinkToken = await prisma.magicLinkToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MagicLinkTokenFindFirstArgs>(args?: SelectSubset<T, MagicLinkTokenFindFirstArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MagicLinkToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkTokenFindFirstOrThrowArgs} args - Arguments to find a MagicLinkToken
     * @example
     * // Get one MagicLinkToken
     * const magicLinkToken = await prisma.magicLinkToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MagicLinkTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, MagicLinkTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MagicLinkTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MagicLinkTokens
     * const magicLinkTokens = await prisma.magicLinkToken.findMany()
     * 
     * // Get first 10 MagicLinkTokens
     * const magicLinkTokens = await prisma.magicLinkToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const magicLinkTokenWithIdOnly = await prisma.magicLinkToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MagicLinkTokenFindManyArgs>(args?: SelectSubset<T, MagicLinkTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MagicLinkToken.
     * @param {MagicLinkTokenCreateArgs} args - Arguments to create a MagicLinkToken.
     * @example
     * // Create one MagicLinkToken
     * const MagicLinkToken = await prisma.magicLinkToken.create({
     *   data: {
     *     // ... data to create a MagicLinkToken
     *   }
     * })
     * 
     */
    create<T extends MagicLinkTokenCreateArgs>(args: SelectSubset<T, MagicLinkTokenCreateArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MagicLinkTokens.
     * @param {MagicLinkTokenCreateManyArgs} args - Arguments to create many MagicLinkTokens.
     * @example
     * // Create many MagicLinkTokens
     * const magicLinkToken = await prisma.magicLinkToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MagicLinkTokenCreateManyArgs>(args?: SelectSubset<T, MagicLinkTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MagicLinkTokens and returns the data saved in the database.
     * @param {MagicLinkTokenCreateManyAndReturnArgs} args - Arguments to create many MagicLinkTokens.
     * @example
     * // Create many MagicLinkTokens
     * const magicLinkToken = await prisma.magicLinkToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MagicLinkTokens and only return the `id`
     * const magicLinkTokenWithIdOnly = await prisma.magicLinkToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MagicLinkTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, MagicLinkTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MagicLinkToken.
     * @param {MagicLinkTokenDeleteArgs} args - Arguments to delete one MagicLinkToken.
     * @example
     * // Delete one MagicLinkToken
     * const MagicLinkToken = await prisma.magicLinkToken.delete({
     *   where: {
     *     // ... filter to delete one MagicLinkToken
     *   }
     * })
     * 
     */
    delete<T extends MagicLinkTokenDeleteArgs>(args: SelectSubset<T, MagicLinkTokenDeleteArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MagicLinkToken.
     * @param {MagicLinkTokenUpdateArgs} args - Arguments to update one MagicLinkToken.
     * @example
     * // Update one MagicLinkToken
     * const magicLinkToken = await prisma.magicLinkToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MagicLinkTokenUpdateArgs>(args: SelectSubset<T, MagicLinkTokenUpdateArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MagicLinkTokens.
     * @param {MagicLinkTokenDeleteManyArgs} args - Arguments to filter MagicLinkTokens to delete.
     * @example
     * // Delete a few MagicLinkTokens
     * const { count } = await prisma.magicLinkToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MagicLinkTokenDeleteManyArgs>(args?: SelectSubset<T, MagicLinkTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MagicLinkTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MagicLinkTokens
     * const magicLinkToken = await prisma.magicLinkToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MagicLinkTokenUpdateManyArgs>(args: SelectSubset<T, MagicLinkTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MagicLinkTokens and returns the data updated in the database.
     * @param {MagicLinkTokenUpdateManyAndReturnArgs} args - Arguments to update many MagicLinkTokens.
     * @example
     * // Update many MagicLinkTokens
     * const magicLinkToken = await prisma.magicLinkToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MagicLinkTokens and only return the `id`
     * const magicLinkTokenWithIdOnly = await prisma.magicLinkToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MagicLinkTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, MagicLinkTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MagicLinkToken.
     * @param {MagicLinkTokenUpsertArgs} args - Arguments to update or create a MagicLinkToken.
     * @example
     * // Update or create a MagicLinkToken
     * const magicLinkToken = await prisma.magicLinkToken.upsert({
     *   create: {
     *     // ... data to create a MagicLinkToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MagicLinkToken we want to update
     *   }
     * })
     */
    upsert<T extends MagicLinkTokenUpsertArgs>(args: SelectSubset<T, MagicLinkTokenUpsertArgs<ExtArgs>>): Prisma__MagicLinkTokenClient<$Result.GetResult<Prisma.$MagicLinkTokenPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MagicLinkTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkTokenCountArgs} args - Arguments to filter MagicLinkTokens to count.
     * @example
     * // Count the number of MagicLinkTokens
     * const count = await prisma.magicLinkToken.count({
     *   where: {
     *     // ... the filter for the MagicLinkTokens we want to count
     *   }
     * })
    **/
    count<T extends MagicLinkTokenCountArgs>(
      args?: Subset<T, MagicLinkTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MagicLinkTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MagicLinkToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MagicLinkTokenAggregateArgs>(args: Subset<T, MagicLinkTokenAggregateArgs>): Prisma.PrismaPromise<GetMagicLinkTokenAggregateType<T>>

    /**
     * Group by MagicLinkToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MagicLinkTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MagicLinkTokenGroupByArgs['orderBy'] }
        : { orderBy?: MagicLinkTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MagicLinkTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMagicLinkTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MagicLinkToken model
   */
  readonly fields: MagicLinkTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MagicLinkToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MagicLinkTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MagicLinkToken model
   */ 
  interface MagicLinkTokenFieldRefs {
    readonly id: FieldRef<"MagicLinkToken", 'Int'>
    readonly userId: FieldRef<"MagicLinkToken", 'Int'>
    readonly token: FieldRef<"MagicLinkToken", 'String'>
    readonly expiresAt: FieldRef<"MagicLinkToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MagicLinkToken findUnique
   */
  export type MagicLinkTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which MagicLinkToken to fetch.
     */
    where: MagicLinkTokenWhereUniqueInput
  }

  /**
   * MagicLinkToken findUniqueOrThrow
   */
  export type MagicLinkTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which MagicLinkToken to fetch.
     */
    where: MagicLinkTokenWhereUniqueInput
  }

  /**
   * MagicLinkToken findFirst
   */
  export type MagicLinkTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which MagicLinkToken to fetch.
     */
    where?: MagicLinkTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicLinkTokens to fetch.
     */
    orderBy?: MagicLinkTokenOrderByWithRelationInput | MagicLinkTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MagicLinkTokens.
     */
    cursor?: MagicLinkTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicLinkTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicLinkTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MagicLinkTokens.
     */
    distinct?: MagicLinkTokenScalarFieldEnum | MagicLinkTokenScalarFieldEnum[]
  }

  /**
   * MagicLinkToken findFirstOrThrow
   */
  export type MagicLinkTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which MagicLinkToken to fetch.
     */
    where?: MagicLinkTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicLinkTokens to fetch.
     */
    orderBy?: MagicLinkTokenOrderByWithRelationInput | MagicLinkTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MagicLinkTokens.
     */
    cursor?: MagicLinkTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicLinkTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicLinkTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MagicLinkTokens.
     */
    distinct?: MagicLinkTokenScalarFieldEnum | MagicLinkTokenScalarFieldEnum[]
  }

  /**
   * MagicLinkToken findMany
   */
  export type MagicLinkTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which MagicLinkTokens to fetch.
     */
    where?: MagicLinkTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicLinkTokens to fetch.
     */
    orderBy?: MagicLinkTokenOrderByWithRelationInput | MagicLinkTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MagicLinkTokens.
     */
    cursor?: MagicLinkTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicLinkTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicLinkTokens.
     */
    skip?: number
    distinct?: MagicLinkTokenScalarFieldEnum | MagicLinkTokenScalarFieldEnum[]
  }

  /**
   * MagicLinkToken create
   */
  export type MagicLinkTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a MagicLinkToken.
     */
    data: XOR<MagicLinkTokenCreateInput, MagicLinkTokenUncheckedCreateInput>
  }

  /**
   * MagicLinkToken createMany
   */
  export type MagicLinkTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MagicLinkTokens.
     */
    data: MagicLinkTokenCreateManyInput | MagicLinkTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MagicLinkToken createManyAndReturn
   */
  export type MagicLinkTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * The data used to create many MagicLinkTokens.
     */
    data: MagicLinkTokenCreateManyInput | MagicLinkTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MagicLinkToken update
   */
  export type MagicLinkTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a MagicLinkToken.
     */
    data: XOR<MagicLinkTokenUpdateInput, MagicLinkTokenUncheckedUpdateInput>
    /**
     * Choose, which MagicLinkToken to update.
     */
    where: MagicLinkTokenWhereUniqueInput
  }

  /**
   * MagicLinkToken updateMany
   */
  export type MagicLinkTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MagicLinkTokens.
     */
    data: XOR<MagicLinkTokenUpdateManyMutationInput, MagicLinkTokenUncheckedUpdateManyInput>
    /**
     * Filter which MagicLinkTokens to update
     */
    where?: MagicLinkTokenWhereInput
    /**
     * Limit how many MagicLinkTokens to update.
     */
    limit?: number
  }

  /**
   * MagicLinkToken updateManyAndReturn
   */
  export type MagicLinkTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * The data used to update MagicLinkTokens.
     */
    data: XOR<MagicLinkTokenUpdateManyMutationInput, MagicLinkTokenUncheckedUpdateManyInput>
    /**
     * Filter which MagicLinkTokens to update
     */
    where?: MagicLinkTokenWhereInput
    /**
     * Limit how many MagicLinkTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MagicLinkToken upsert
   */
  export type MagicLinkTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the MagicLinkToken to update in case it exists.
     */
    where: MagicLinkTokenWhereUniqueInput
    /**
     * In case the MagicLinkToken found by the `where` argument doesn't exist, create a new MagicLinkToken with this data.
     */
    create: XOR<MagicLinkTokenCreateInput, MagicLinkTokenUncheckedCreateInput>
    /**
     * In case the MagicLinkToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MagicLinkTokenUpdateInput, MagicLinkTokenUncheckedUpdateInput>
  }

  /**
   * MagicLinkToken delete
   */
  export type MagicLinkTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
    /**
     * Filter which MagicLinkToken to delete.
     */
    where: MagicLinkTokenWhereUniqueInput
  }

  /**
   * MagicLinkToken deleteMany
   */
  export type MagicLinkTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MagicLinkTokens to delete
     */
    where?: MagicLinkTokenWhereInput
    /**
     * Limit how many MagicLinkTokens to delete.
     */
    limit?: number
  }

  /**
   * MagicLinkToken without action
   */
  export type MagicLinkTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLinkToken
     */
    select?: MagicLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicLinkToken
     */
    omit?: MagicLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BankTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    provider: 'provider',
    operationType: 'operationType',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type BankTransactionScalarFieldEnum = (typeof BankTransactionScalarFieldEnum)[keyof typeof BankTransactionScalarFieldEnum]


  export const P2PTransactionScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    amount: 'amount'
  };

  export type P2PTransactionScalarFieldEnum = (typeof P2PTransactionScalarFieldEnum)[keyof typeof P2PTransactionScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const MagicLinkTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt'
  };

  export type MagicLinkTokenScalarFieldEnum = (typeof MagicLinkTokenScalarFieldEnum)[keyof typeof MagicLinkTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'BankOperation'
   */
  export type EnumBankOperationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BankOperation'>
    


  /**
   * Reference to a field of type 'BankOperation[]'
   */
  export type ListEnumBankOperationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BankOperation[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    magicToken?: XOR<MagicLinkTokenNullableScalarRelationFilter, MagicLinkTokenWhereInput> | null
    BankTxns?: BankTransactionListRelationFilter
    sentTxns?: P2PTransactionListRelationFilter
    receiveTxns?: P2PTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    magicToken?: MagicLinkTokenOrderByWithRelationInput
    BankTxns?: BankTransactionOrderByRelationAggregateInput
    sentTxns?: P2PTransactionOrderByRelationAggregateInput
    receiveTxns?: P2PTransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    magicToken?: XOR<MagicLinkTokenNullableScalarRelationFilter, MagicLinkTokenWhereInput> | null
    BankTxns?: BankTransactionListRelationFilter
    sentTxns?: P2PTransactionListRelationFilter
    receiveTxns?: P2PTransactionListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BankTransactionWhereInput = {
    AND?: BankTransactionWhereInput | BankTransactionWhereInput[]
    OR?: BankTransactionWhereInput[]
    NOT?: BankTransactionWhereInput | BankTransactionWhereInput[]
    id?: BigIntFilter<"BankTransaction"> | bigint | number
    userId?: IntFilter<"BankTransaction"> | number
    token?: StringNullableFilter<"BankTransaction"> | string | null
    provider?: StringFilter<"BankTransaction"> | string
    operationType?: EnumBankOperationFilter<"BankTransaction"> | $Enums.BankOperation
    amount?: DecimalFilter<"BankTransaction"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BankTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrderInput | SortOrder
    provider?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BankTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: BankTransactionWhereInput | BankTransactionWhereInput[]
    OR?: BankTransactionWhereInput[]
    NOT?: BankTransactionWhereInput | BankTransactionWhereInput[]
    userId?: IntFilter<"BankTransaction"> | number
    token?: StringNullableFilter<"BankTransaction"> | string | null
    provider?: StringFilter<"BankTransaction"> | string
    operationType?: EnumBankOperationFilter<"BankTransaction"> | $Enums.BankOperation
    amount?: DecimalFilter<"BankTransaction"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BankTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrderInput | SortOrder
    provider?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: BankTransactionCountOrderByAggregateInput
    _avg?: BankTransactionAvgOrderByAggregateInput
    _max?: BankTransactionMaxOrderByAggregateInput
    _min?: BankTransactionMinOrderByAggregateInput
    _sum?: BankTransactionSumOrderByAggregateInput
  }

  export type BankTransactionScalarWhereWithAggregatesInput = {
    AND?: BankTransactionScalarWhereWithAggregatesInput | BankTransactionScalarWhereWithAggregatesInput[]
    OR?: BankTransactionScalarWhereWithAggregatesInput[]
    NOT?: BankTransactionScalarWhereWithAggregatesInput | BankTransactionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"BankTransaction"> | bigint | number
    userId?: IntWithAggregatesFilter<"BankTransaction"> | number
    token?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    provider?: StringWithAggregatesFilter<"BankTransaction"> | string
    operationType?: EnumBankOperationWithAggregatesFilter<"BankTransaction"> | $Enums.BankOperation
    amount?: DecimalWithAggregatesFilter<"BankTransaction"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"BankTransaction"> | Date | string
  }

  export type P2PTransactionWhereInput = {
    AND?: P2PTransactionWhereInput | P2PTransactionWhereInput[]
    OR?: P2PTransactionWhereInput[]
    NOT?: P2PTransactionWhereInput | P2PTransactionWhereInput[]
    id?: BigIntFilter<"P2PTransaction"> | bigint | number
    senderId?: IntFilter<"P2PTransaction"> | number
    receiverId?: IntFilter<"P2PTransaction"> | number
    amount?: DecimalFilter<"P2PTransaction"> | Decimal | DecimalJsLike | number | string
    senderUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type P2PTransactionOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    amount?: SortOrder
    senderUser?: UserOrderByWithRelationInput
    receiverUser?: UserOrderByWithRelationInput
  }

  export type P2PTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: P2PTransactionWhereInput | P2PTransactionWhereInput[]
    OR?: P2PTransactionWhereInput[]
    NOT?: P2PTransactionWhereInput | P2PTransactionWhereInput[]
    senderId?: IntFilter<"P2PTransaction"> | number
    receiverId?: IntFilter<"P2PTransaction"> | number
    amount?: DecimalFilter<"P2PTransaction"> | Decimal | DecimalJsLike | number | string
    senderUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type P2PTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    amount?: SortOrder
    _count?: P2PTransactionCountOrderByAggregateInput
    _avg?: P2PTransactionAvgOrderByAggregateInput
    _max?: P2PTransactionMaxOrderByAggregateInput
    _min?: P2PTransactionMinOrderByAggregateInput
    _sum?: P2PTransactionSumOrderByAggregateInput
  }

  export type P2PTransactionScalarWhereWithAggregatesInput = {
    AND?: P2PTransactionScalarWhereWithAggregatesInput | P2PTransactionScalarWhereWithAggregatesInput[]
    OR?: P2PTransactionScalarWhereWithAggregatesInput[]
    NOT?: P2PTransactionScalarWhereWithAggregatesInput | P2PTransactionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"P2PTransaction"> | bigint | number
    senderId?: IntWithAggregatesFilter<"P2PTransaction"> | number
    receiverId?: IntWithAggregatesFilter<"P2PTransaction"> | number
    amount?: DecimalWithAggregatesFilter<"P2PTransaction"> | Decimal | DecimalJsLike | number | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: IntFilter<"Wallet"> | number
    userId?: IntFilter<"Wallet"> | number
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wallet"> | number
    userId?: IntWithAggregatesFilter<"Wallet"> | number
    balance?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type MagicLinkTokenWhereInput = {
    AND?: MagicLinkTokenWhereInput | MagicLinkTokenWhereInput[]
    OR?: MagicLinkTokenWhereInput[]
    NOT?: MagicLinkTokenWhereInput | MagicLinkTokenWhereInput[]
    id?: IntFilter<"MagicLinkToken"> | number
    userId?: IntFilter<"MagicLinkToken"> | number
    token?: StringFilter<"MagicLinkToken"> | string
    expiresAt?: DateTimeFilter<"MagicLinkToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MagicLinkTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MagicLinkTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    token?: string
    AND?: MagicLinkTokenWhereInput | MagicLinkTokenWhereInput[]
    OR?: MagicLinkTokenWhereInput[]
    NOT?: MagicLinkTokenWhereInput | MagicLinkTokenWhereInput[]
    expiresAt?: DateTimeFilter<"MagicLinkToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "token">

  export type MagicLinkTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    _count?: MagicLinkTokenCountOrderByAggregateInput
    _avg?: MagicLinkTokenAvgOrderByAggregateInput
    _max?: MagicLinkTokenMaxOrderByAggregateInput
    _min?: MagicLinkTokenMinOrderByAggregateInput
    _sum?: MagicLinkTokenSumOrderByAggregateInput
  }

  export type MagicLinkTokenScalarWhereWithAggregatesInput = {
    AND?: MagicLinkTokenScalarWhereWithAggregatesInput | MagicLinkTokenScalarWhereWithAggregatesInput[]
    OR?: MagicLinkTokenScalarWhereWithAggregatesInput[]
    NOT?: MagicLinkTokenScalarWhereWithAggregatesInput | MagicLinkTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MagicLinkToken"> | number
    userId?: IntWithAggregatesFilter<"MagicLinkToken"> | number
    token?: StringWithAggregatesFilter<"MagicLinkToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"MagicLinkToken"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    magicToken?: MagicLinkTokenCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionCreateNestedManyWithoutUserInput
    sentTxns?: P2PTransactionCreateNestedManyWithoutSenderUserInput
    receiveTxns?: P2PTransactionCreateNestedManyWithoutReceiverUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    magicToken?: MagicLinkTokenUncheckedCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    sentTxns?: P2PTransactionUncheckedCreateNestedManyWithoutSenderUserInput
    receiveTxns?: P2PTransactionUncheckedCreateNestedManyWithoutReceiverUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    magicToken?: MagicLinkTokenUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUpdateManyWithoutUserNestedInput
    sentTxns?: P2PTransactionUpdateManyWithoutSenderUserNestedInput
    receiveTxns?: P2PTransactionUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    magicToken?: MagicLinkTokenUncheckedUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTxns?: P2PTransactionUncheckedUpdateManyWithoutSenderUserNestedInput
    receiveTxns?: P2PTransactionUncheckedUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionCreateInput = {
    id?: bigint | number
    token?: string | null
    provider: string
    operationType: $Enums.BankOperation
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBankTxnsInput
  }

  export type BankTransactionUncheckedCreateInput = {
    id?: bigint | number
    userId: number
    token?: string | null
    provider: string
    operationType: $Enums.BankOperation
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type BankTransactionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    operationType?: EnumBankOperationFieldUpdateOperationsInput | $Enums.BankOperation
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBankTxnsNestedInput
  }

  export type BankTransactionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    operationType?: EnumBankOperationFieldUpdateOperationsInput | $Enums.BankOperation
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionCreateManyInput = {
    id?: bigint | number
    userId: number
    token?: string | null
    provider: string
    operationType: $Enums.BankOperation
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type BankTransactionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    operationType?: EnumBankOperationFieldUpdateOperationsInput | $Enums.BankOperation
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    operationType?: EnumBankOperationFieldUpdateOperationsInput | $Enums.BankOperation
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type P2PTransactionCreateInput = {
    id?: bigint | number
    amount?: Decimal | DecimalJsLike | number | string
    senderUser: UserCreateNestedOneWithoutSentTxnsInput
    receiverUser: UserCreateNestedOneWithoutReceiveTxnsInput
  }

  export type P2PTransactionUncheckedCreateInput = {
    id?: bigint | number
    senderId: number
    receiverId: number
    amount?: Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    senderUser?: UserUpdateOneRequiredWithoutSentTxnsNestedInput
    receiverUser?: UserUpdateOneRequiredWithoutReceiveTxnsNestedInput
  }

  export type P2PTransactionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionCreateManyInput = {
    id?: bigint | number
    senderId: number
    receiverId: number
    amount?: Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type WalletCreateInput = {
    balance?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: number
    userId: number
    balance?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type WalletUpdateInput = {
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateManyInput = {
    id?: number
    userId: number
    balance?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkTokenCreateInput = {
    token: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutMagicTokenInput
  }

  export type MagicLinkTokenUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
  }

  export type MagicLinkTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMagicTokenNestedInput
  }

  export type MagicLinkTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkTokenCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
  }

  export type MagicLinkTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WalletNullableScalarRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type MagicLinkTokenNullableScalarRelationFilter = {
    is?: MagicLinkTokenWhereInput | null
    isNot?: MagicLinkTokenWhereInput | null
  }

  export type BankTransactionListRelationFilter = {
    every?: BankTransactionWhereInput
    some?: BankTransactionWhereInput
    none?: BankTransactionWhereInput
  }

  export type P2PTransactionListRelationFilter = {
    every?: P2PTransactionWhereInput
    some?: P2PTransactionWhereInput
    none?: P2PTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BankTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type P2PTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumBankOperationFilter<$PrismaModel = never> = {
    equals?: $Enums.BankOperation | EnumBankOperationFieldRefInput<$PrismaModel>
    in?: $Enums.BankOperation[] | ListEnumBankOperationFieldRefInput<$PrismaModel>
    notIn?: $Enums.BankOperation[] | ListEnumBankOperationFieldRefInput<$PrismaModel>
    not?: NestedEnumBankOperationFilter<$PrismaModel> | $Enums.BankOperation
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BankTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type BankTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type BankTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type BankTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    operationType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type BankTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumBankOperationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BankOperation | EnumBankOperationFieldRefInput<$PrismaModel>
    in?: $Enums.BankOperation[] | ListEnumBankOperationFieldRefInput<$PrismaModel>
    notIn?: $Enums.BankOperation[] | ListEnumBankOperationFieldRefInput<$PrismaModel>
    not?: NestedEnumBankOperationWithAggregatesFilter<$PrismaModel> | $Enums.BankOperation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBankOperationFilter<$PrismaModel>
    _max?: NestedEnumBankOperationFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type P2PTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    amount?: SortOrder
  }

  export type P2PTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    amount?: SortOrder
  }

  export type P2PTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    amount?: SortOrder
  }

  export type P2PTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    amount?: SortOrder
  }

  export type P2PTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    amount?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type MagicLinkTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type MagicLinkTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MagicLinkTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type MagicLinkTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type MagicLinkTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WalletCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type MagicLinkTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<MagicLinkTokenCreateWithoutUserInput, MagicLinkTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: MagicLinkTokenCreateOrConnectWithoutUserInput
    connect?: MagicLinkTokenWhereUniqueInput
  }

  export type BankTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput> | BankTransactionCreateWithoutUserInput[] | BankTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUserInput | BankTransactionCreateOrConnectWithoutUserInput[]
    createMany?: BankTransactionCreateManyUserInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type P2PTransactionCreateNestedManyWithoutSenderUserInput = {
    create?: XOR<P2PTransactionCreateWithoutSenderUserInput, P2PTransactionUncheckedCreateWithoutSenderUserInput> | P2PTransactionCreateWithoutSenderUserInput[] | P2PTransactionUncheckedCreateWithoutSenderUserInput[]
    connectOrCreate?: P2PTransactionCreateOrConnectWithoutSenderUserInput | P2PTransactionCreateOrConnectWithoutSenderUserInput[]
    createMany?: P2PTransactionCreateManySenderUserInputEnvelope
    connect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
  }

  export type P2PTransactionCreateNestedManyWithoutReceiverUserInput = {
    create?: XOR<P2PTransactionCreateWithoutReceiverUserInput, P2PTransactionUncheckedCreateWithoutReceiverUserInput> | P2PTransactionCreateWithoutReceiverUserInput[] | P2PTransactionUncheckedCreateWithoutReceiverUserInput[]
    connectOrCreate?: P2PTransactionCreateOrConnectWithoutReceiverUserInput | P2PTransactionCreateOrConnectWithoutReceiverUserInput[]
    createMany?: P2PTransactionCreateManyReceiverUserInputEnvelope
    connect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type MagicLinkTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MagicLinkTokenCreateWithoutUserInput, MagicLinkTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: MagicLinkTokenCreateOrConnectWithoutUserInput
    connect?: MagicLinkTokenWhereUniqueInput
  }

  export type BankTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput> | BankTransactionCreateWithoutUserInput[] | BankTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUserInput | BankTransactionCreateOrConnectWithoutUserInput[]
    createMany?: BankTransactionCreateManyUserInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type P2PTransactionUncheckedCreateNestedManyWithoutSenderUserInput = {
    create?: XOR<P2PTransactionCreateWithoutSenderUserInput, P2PTransactionUncheckedCreateWithoutSenderUserInput> | P2PTransactionCreateWithoutSenderUserInput[] | P2PTransactionUncheckedCreateWithoutSenderUserInput[]
    connectOrCreate?: P2PTransactionCreateOrConnectWithoutSenderUserInput | P2PTransactionCreateOrConnectWithoutSenderUserInput[]
    createMany?: P2PTransactionCreateManySenderUserInputEnvelope
    connect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
  }

  export type P2PTransactionUncheckedCreateNestedManyWithoutReceiverUserInput = {
    create?: XOR<P2PTransactionCreateWithoutReceiverUserInput, P2PTransactionUncheckedCreateWithoutReceiverUserInput> | P2PTransactionCreateWithoutReceiverUserInput[] | P2PTransactionUncheckedCreateWithoutReceiverUserInput[]
    connectOrCreate?: P2PTransactionCreateOrConnectWithoutReceiverUserInput | P2PTransactionCreateOrConnectWithoutReceiverUserInput[]
    createMany?: P2PTransactionCreateManyReceiverUserInputEnvelope
    connect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type MagicLinkTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<MagicLinkTokenCreateWithoutUserInput, MagicLinkTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: MagicLinkTokenCreateOrConnectWithoutUserInput
    upsert?: MagicLinkTokenUpsertWithoutUserInput
    disconnect?: MagicLinkTokenWhereInput | boolean
    delete?: MagicLinkTokenWhereInput | boolean
    connect?: MagicLinkTokenWhereUniqueInput
    update?: XOR<XOR<MagicLinkTokenUpdateToOneWithWhereWithoutUserInput, MagicLinkTokenUpdateWithoutUserInput>, MagicLinkTokenUncheckedUpdateWithoutUserInput>
  }

  export type BankTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput> | BankTransactionCreateWithoutUserInput[] | BankTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUserInput | BankTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutUserInput | BankTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankTransactionCreateManyUserInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutUserInput | BankTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutUserInput | BankTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type P2PTransactionUpdateManyWithoutSenderUserNestedInput = {
    create?: XOR<P2PTransactionCreateWithoutSenderUserInput, P2PTransactionUncheckedCreateWithoutSenderUserInput> | P2PTransactionCreateWithoutSenderUserInput[] | P2PTransactionUncheckedCreateWithoutSenderUserInput[]
    connectOrCreate?: P2PTransactionCreateOrConnectWithoutSenderUserInput | P2PTransactionCreateOrConnectWithoutSenderUserInput[]
    upsert?: P2PTransactionUpsertWithWhereUniqueWithoutSenderUserInput | P2PTransactionUpsertWithWhereUniqueWithoutSenderUserInput[]
    createMany?: P2PTransactionCreateManySenderUserInputEnvelope
    set?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    disconnect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    delete?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    connect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    update?: P2PTransactionUpdateWithWhereUniqueWithoutSenderUserInput | P2PTransactionUpdateWithWhereUniqueWithoutSenderUserInput[]
    updateMany?: P2PTransactionUpdateManyWithWhereWithoutSenderUserInput | P2PTransactionUpdateManyWithWhereWithoutSenderUserInput[]
    deleteMany?: P2PTransactionScalarWhereInput | P2PTransactionScalarWhereInput[]
  }

  export type P2PTransactionUpdateManyWithoutReceiverUserNestedInput = {
    create?: XOR<P2PTransactionCreateWithoutReceiverUserInput, P2PTransactionUncheckedCreateWithoutReceiverUserInput> | P2PTransactionCreateWithoutReceiverUserInput[] | P2PTransactionUncheckedCreateWithoutReceiverUserInput[]
    connectOrCreate?: P2PTransactionCreateOrConnectWithoutReceiverUserInput | P2PTransactionCreateOrConnectWithoutReceiverUserInput[]
    upsert?: P2PTransactionUpsertWithWhereUniqueWithoutReceiverUserInput | P2PTransactionUpsertWithWhereUniqueWithoutReceiverUserInput[]
    createMany?: P2PTransactionCreateManyReceiverUserInputEnvelope
    set?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    disconnect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    delete?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    connect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    update?: P2PTransactionUpdateWithWhereUniqueWithoutReceiverUserInput | P2PTransactionUpdateWithWhereUniqueWithoutReceiverUserInput[]
    updateMany?: P2PTransactionUpdateManyWithWhereWithoutReceiverUserInput | P2PTransactionUpdateManyWithWhereWithoutReceiverUserInput[]
    deleteMany?: P2PTransactionScalarWhereInput | P2PTransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type MagicLinkTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MagicLinkTokenCreateWithoutUserInput, MagicLinkTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: MagicLinkTokenCreateOrConnectWithoutUserInput
    upsert?: MagicLinkTokenUpsertWithoutUserInput
    disconnect?: MagicLinkTokenWhereInput | boolean
    delete?: MagicLinkTokenWhereInput | boolean
    connect?: MagicLinkTokenWhereUniqueInput
    update?: XOR<XOR<MagicLinkTokenUpdateToOneWithWhereWithoutUserInput, MagicLinkTokenUpdateWithoutUserInput>, MagicLinkTokenUncheckedUpdateWithoutUserInput>
  }

  export type BankTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput> | BankTransactionCreateWithoutUserInput[] | BankTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUserInput | BankTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutUserInput | BankTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankTransactionCreateManyUserInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutUserInput | BankTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutUserInput | BankTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type P2PTransactionUncheckedUpdateManyWithoutSenderUserNestedInput = {
    create?: XOR<P2PTransactionCreateWithoutSenderUserInput, P2PTransactionUncheckedCreateWithoutSenderUserInput> | P2PTransactionCreateWithoutSenderUserInput[] | P2PTransactionUncheckedCreateWithoutSenderUserInput[]
    connectOrCreate?: P2PTransactionCreateOrConnectWithoutSenderUserInput | P2PTransactionCreateOrConnectWithoutSenderUserInput[]
    upsert?: P2PTransactionUpsertWithWhereUniqueWithoutSenderUserInput | P2PTransactionUpsertWithWhereUniqueWithoutSenderUserInput[]
    createMany?: P2PTransactionCreateManySenderUserInputEnvelope
    set?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    disconnect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    delete?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    connect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    update?: P2PTransactionUpdateWithWhereUniqueWithoutSenderUserInput | P2PTransactionUpdateWithWhereUniqueWithoutSenderUserInput[]
    updateMany?: P2PTransactionUpdateManyWithWhereWithoutSenderUserInput | P2PTransactionUpdateManyWithWhereWithoutSenderUserInput[]
    deleteMany?: P2PTransactionScalarWhereInput | P2PTransactionScalarWhereInput[]
  }

  export type P2PTransactionUncheckedUpdateManyWithoutReceiverUserNestedInput = {
    create?: XOR<P2PTransactionCreateWithoutReceiverUserInput, P2PTransactionUncheckedCreateWithoutReceiverUserInput> | P2PTransactionCreateWithoutReceiverUserInput[] | P2PTransactionUncheckedCreateWithoutReceiverUserInput[]
    connectOrCreate?: P2PTransactionCreateOrConnectWithoutReceiverUserInput | P2PTransactionCreateOrConnectWithoutReceiverUserInput[]
    upsert?: P2PTransactionUpsertWithWhereUniqueWithoutReceiverUserInput | P2PTransactionUpsertWithWhereUniqueWithoutReceiverUserInput[]
    createMany?: P2PTransactionCreateManyReceiverUserInputEnvelope
    set?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    disconnect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    delete?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    connect?: P2PTransactionWhereUniqueInput | P2PTransactionWhereUniqueInput[]
    update?: P2PTransactionUpdateWithWhereUniqueWithoutReceiverUserInput | P2PTransactionUpdateWithWhereUniqueWithoutReceiverUserInput[]
    updateMany?: P2PTransactionUpdateManyWithWhereWithoutReceiverUserInput | P2PTransactionUpdateManyWithWhereWithoutReceiverUserInput[]
    deleteMany?: P2PTransactionScalarWhereInput | P2PTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBankTxnsInput = {
    create?: XOR<UserCreateWithoutBankTxnsInput, UserUncheckedCreateWithoutBankTxnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankTxnsInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumBankOperationFieldUpdateOperationsInput = {
    set?: $Enums.BankOperation
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutBankTxnsNestedInput = {
    create?: XOR<UserCreateWithoutBankTxnsInput, UserUncheckedCreateWithoutBankTxnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankTxnsInput
    upsert?: UserUpsertWithoutBankTxnsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankTxnsInput, UserUpdateWithoutBankTxnsInput>, UserUncheckedUpdateWithoutBankTxnsInput>
  }

  export type UserCreateNestedOneWithoutSentTxnsInput = {
    create?: XOR<UserCreateWithoutSentTxnsInput, UserUncheckedCreateWithoutSentTxnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTxnsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiveTxnsInput = {
    create?: XOR<UserCreateWithoutReceiveTxnsInput, UserUncheckedCreateWithoutReceiveTxnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiveTxnsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentTxnsNestedInput = {
    create?: XOR<UserCreateWithoutSentTxnsInput, UserUncheckedCreateWithoutSentTxnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTxnsInput
    upsert?: UserUpsertWithoutSentTxnsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentTxnsInput, UserUpdateWithoutSentTxnsInput>, UserUncheckedUpdateWithoutSentTxnsInput>
  }

  export type UserUpdateOneRequiredWithoutReceiveTxnsNestedInput = {
    create?: XOR<UserCreateWithoutReceiveTxnsInput, UserUncheckedCreateWithoutReceiveTxnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiveTxnsInput
    upsert?: UserUpsertWithoutReceiveTxnsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiveTxnsInput, UserUpdateWithoutReceiveTxnsInput>, UserUncheckedUpdateWithoutReceiveTxnsInput>
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserCreateNestedOneWithoutMagicTokenInput = {
    create?: XOR<UserCreateWithoutMagicTokenInput, UserUncheckedCreateWithoutMagicTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutMagicTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMagicTokenNestedInput = {
    create?: XOR<UserCreateWithoutMagicTokenInput, UserUncheckedCreateWithoutMagicTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutMagicTokenInput
    upsert?: UserUpsertWithoutMagicTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMagicTokenInput, UserUpdateWithoutMagicTokenInput>, UserUncheckedUpdateWithoutMagicTokenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumBankOperationFilter<$PrismaModel = never> = {
    equals?: $Enums.BankOperation | EnumBankOperationFieldRefInput<$PrismaModel>
    in?: $Enums.BankOperation[] | ListEnumBankOperationFieldRefInput<$PrismaModel>
    notIn?: $Enums.BankOperation[] | ListEnumBankOperationFieldRefInput<$PrismaModel>
    not?: NestedEnumBankOperationFilter<$PrismaModel> | $Enums.BankOperation
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumBankOperationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BankOperation | EnumBankOperationFieldRefInput<$PrismaModel>
    in?: $Enums.BankOperation[] | ListEnumBankOperationFieldRefInput<$PrismaModel>
    notIn?: $Enums.BankOperation[] | ListEnumBankOperationFieldRefInput<$PrismaModel>
    not?: NestedEnumBankOperationWithAggregatesFilter<$PrismaModel> | $Enums.BankOperation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBankOperationFilter<$PrismaModel>
    _max?: NestedEnumBankOperationFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type WalletCreateWithoutUserInput = {
    balance?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: number
    balance?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type MagicLinkTokenCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
  }

  export type MagicLinkTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
  }

  export type MagicLinkTokenCreateOrConnectWithoutUserInput = {
    where: MagicLinkTokenWhereUniqueInput
    create: XOR<MagicLinkTokenCreateWithoutUserInput, MagicLinkTokenUncheckedCreateWithoutUserInput>
  }

  export type BankTransactionCreateWithoutUserInput = {
    id?: bigint | number
    token?: string | null
    provider: string
    operationType: $Enums.BankOperation
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type BankTransactionUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    token?: string | null
    provider: string
    operationType: $Enums.BankOperation
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type BankTransactionCreateOrConnectWithoutUserInput = {
    where: BankTransactionWhereUniqueInput
    create: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput>
  }

  export type BankTransactionCreateManyUserInputEnvelope = {
    data: BankTransactionCreateManyUserInput | BankTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type P2PTransactionCreateWithoutSenderUserInput = {
    id?: bigint | number
    amount?: Decimal | DecimalJsLike | number | string
    receiverUser: UserCreateNestedOneWithoutReceiveTxnsInput
  }

  export type P2PTransactionUncheckedCreateWithoutSenderUserInput = {
    id?: bigint | number
    receiverId: number
    amount?: Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionCreateOrConnectWithoutSenderUserInput = {
    where: P2PTransactionWhereUniqueInput
    create: XOR<P2PTransactionCreateWithoutSenderUserInput, P2PTransactionUncheckedCreateWithoutSenderUserInput>
  }

  export type P2PTransactionCreateManySenderUserInputEnvelope = {
    data: P2PTransactionCreateManySenderUserInput | P2PTransactionCreateManySenderUserInput[]
    skipDuplicates?: boolean
  }

  export type P2PTransactionCreateWithoutReceiverUserInput = {
    id?: bigint | number
    amount?: Decimal | DecimalJsLike | number | string
    senderUser: UserCreateNestedOneWithoutSentTxnsInput
  }

  export type P2PTransactionUncheckedCreateWithoutReceiverUserInput = {
    id?: bigint | number
    senderId: number
    amount?: Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionCreateOrConnectWithoutReceiverUserInput = {
    where: P2PTransactionWhereUniqueInput
    create: XOR<P2PTransactionCreateWithoutReceiverUserInput, P2PTransactionUncheckedCreateWithoutReceiverUserInput>
  }

  export type P2PTransactionCreateManyReceiverUserInputEnvelope = {
    data: P2PTransactionCreateManyReceiverUserInput | P2PTransactionCreateManyReceiverUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithoutUserInput = {
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutUserInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateWithoutUserInput = {
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkTokenUpsertWithoutUserInput = {
    update: XOR<MagicLinkTokenUpdateWithoutUserInput, MagicLinkTokenUncheckedUpdateWithoutUserInput>
    create: XOR<MagicLinkTokenCreateWithoutUserInput, MagicLinkTokenUncheckedCreateWithoutUserInput>
    where?: MagicLinkTokenWhereInput
  }

  export type MagicLinkTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: MagicLinkTokenWhereInput
    data: XOR<MagicLinkTokenUpdateWithoutUserInput, MagicLinkTokenUncheckedUpdateWithoutUserInput>
  }

  export type MagicLinkTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: BankTransactionWhereUniqueInput
    update: XOR<BankTransactionUpdateWithoutUserInput, BankTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput>
  }

  export type BankTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: BankTransactionWhereUniqueInput
    data: XOR<BankTransactionUpdateWithoutUserInput, BankTransactionUncheckedUpdateWithoutUserInput>
  }

  export type BankTransactionUpdateManyWithWhereWithoutUserInput = {
    where: BankTransactionScalarWhereInput
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type BankTransactionScalarWhereInput = {
    AND?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
    OR?: BankTransactionScalarWhereInput[]
    NOT?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
    id?: BigIntFilter<"BankTransaction"> | bigint | number
    userId?: IntFilter<"BankTransaction"> | number
    token?: StringNullableFilter<"BankTransaction"> | string | null
    provider?: StringFilter<"BankTransaction"> | string
    operationType?: EnumBankOperationFilter<"BankTransaction"> | $Enums.BankOperation
    amount?: DecimalFilter<"BankTransaction"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
  }

  export type P2PTransactionUpsertWithWhereUniqueWithoutSenderUserInput = {
    where: P2PTransactionWhereUniqueInput
    update: XOR<P2PTransactionUpdateWithoutSenderUserInput, P2PTransactionUncheckedUpdateWithoutSenderUserInput>
    create: XOR<P2PTransactionCreateWithoutSenderUserInput, P2PTransactionUncheckedCreateWithoutSenderUserInput>
  }

  export type P2PTransactionUpdateWithWhereUniqueWithoutSenderUserInput = {
    where: P2PTransactionWhereUniqueInput
    data: XOR<P2PTransactionUpdateWithoutSenderUserInput, P2PTransactionUncheckedUpdateWithoutSenderUserInput>
  }

  export type P2PTransactionUpdateManyWithWhereWithoutSenderUserInput = {
    where: P2PTransactionScalarWhereInput
    data: XOR<P2PTransactionUpdateManyMutationInput, P2PTransactionUncheckedUpdateManyWithoutSenderUserInput>
  }

  export type P2PTransactionScalarWhereInput = {
    AND?: P2PTransactionScalarWhereInput | P2PTransactionScalarWhereInput[]
    OR?: P2PTransactionScalarWhereInput[]
    NOT?: P2PTransactionScalarWhereInput | P2PTransactionScalarWhereInput[]
    id?: BigIntFilter<"P2PTransaction"> | bigint | number
    senderId?: IntFilter<"P2PTransaction"> | number
    receiverId?: IntFilter<"P2PTransaction"> | number
    amount?: DecimalFilter<"P2PTransaction"> | Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionUpsertWithWhereUniqueWithoutReceiverUserInput = {
    where: P2PTransactionWhereUniqueInput
    update: XOR<P2PTransactionUpdateWithoutReceiverUserInput, P2PTransactionUncheckedUpdateWithoutReceiverUserInput>
    create: XOR<P2PTransactionCreateWithoutReceiverUserInput, P2PTransactionUncheckedCreateWithoutReceiverUserInput>
  }

  export type P2PTransactionUpdateWithWhereUniqueWithoutReceiverUserInput = {
    where: P2PTransactionWhereUniqueInput
    data: XOR<P2PTransactionUpdateWithoutReceiverUserInput, P2PTransactionUncheckedUpdateWithoutReceiverUserInput>
  }

  export type P2PTransactionUpdateManyWithWhereWithoutReceiverUserInput = {
    where: P2PTransactionScalarWhereInput
    data: XOR<P2PTransactionUpdateManyMutationInput, P2PTransactionUncheckedUpdateManyWithoutReceiverUserInput>
  }

  export type UserCreateWithoutBankTxnsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    magicToken?: MagicLinkTokenCreateNestedOneWithoutUserInput
    sentTxns?: P2PTransactionCreateNestedManyWithoutSenderUserInput
    receiveTxns?: P2PTransactionCreateNestedManyWithoutReceiverUserInput
  }

  export type UserUncheckedCreateWithoutBankTxnsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    magicToken?: MagicLinkTokenUncheckedCreateNestedOneWithoutUserInput
    sentTxns?: P2PTransactionUncheckedCreateNestedManyWithoutSenderUserInput
    receiveTxns?: P2PTransactionUncheckedCreateNestedManyWithoutReceiverUserInput
  }

  export type UserCreateOrConnectWithoutBankTxnsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankTxnsInput, UserUncheckedCreateWithoutBankTxnsInput>
  }

  export type UserUpsertWithoutBankTxnsInput = {
    update: XOR<UserUpdateWithoutBankTxnsInput, UserUncheckedUpdateWithoutBankTxnsInput>
    create: XOR<UserCreateWithoutBankTxnsInput, UserUncheckedCreateWithoutBankTxnsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankTxnsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankTxnsInput, UserUncheckedUpdateWithoutBankTxnsInput>
  }

  export type UserUpdateWithoutBankTxnsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    magicToken?: MagicLinkTokenUpdateOneWithoutUserNestedInput
    sentTxns?: P2PTransactionUpdateManyWithoutSenderUserNestedInput
    receiveTxns?: P2PTransactionUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBankTxnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    magicToken?: MagicLinkTokenUncheckedUpdateOneWithoutUserNestedInput
    sentTxns?: P2PTransactionUncheckedUpdateManyWithoutSenderUserNestedInput
    receiveTxns?: P2PTransactionUncheckedUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserCreateWithoutSentTxnsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    magicToken?: MagicLinkTokenCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionCreateNestedManyWithoutUserInput
    receiveTxns?: P2PTransactionCreateNestedManyWithoutReceiverUserInput
  }

  export type UserUncheckedCreateWithoutSentTxnsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    magicToken?: MagicLinkTokenUncheckedCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    receiveTxns?: P2PTransactionUncheckedCreateNestedManyWithoutReceiverUserInput
  }

  export type UserCreateOrConnectWithoutSentTxnsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentTxnsInput, UserUncheckedCreateWithoutSentTxnsInput>
  }

  export type UserCreateWithoutReceiveTxnsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    magicToken?: MagicLinkTokenCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionCreateNestedManyWithoutUserInput
    sentTxns?: P2PTransactionCreateNestedManyWithoutSenderUserInput
  }

  export type UserUncheckedCreateWithoutReceiveTxnsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    magicToken?: MagicLinkTokenUncheckedCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    sentTxns?: P2PTransactionUncheckedCreateNestedManyWithoutSenderUserInput
  }

  export type UserCreateOrConnectWithoutReceiveTxnsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiveTxnsInput, UserUncheckedCreateWithoutReceiveTxnsInput>
  }

  export type UserUpsertWithoutSentTxnsInput = {
    update: XOR<UserUpdateWithoutSentTxnsInput, UserUncheckedUpdateWithoutSentTxnsInput>
    create: XOR<UserCreateWithoutSentTxnsInput, UserUncheckedCreateWithoutSentTxnsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentTxnsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentTxnsInput, UserUncheckedUpdateWithoutSentTxnsInput>
  }

  export type UserUpdateWithoutSentTxnsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    magicToken?: MagicLinkTokenUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUpdateManyWithoutUserNestedInput
    receiveTxns?: P2PTransactionUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentTxnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    magicToken?: MagicLinkTokenUncheckedUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    receiveTxns?: P2PTransactionUncheckedUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserUpsertWithoutReceiveTxnsInput = {
    update: XOR<UserUpdateWithoutReceiveTxnsInput, UserUncheckedUpdateWithoutReceiveTxnsInput>
    create: XOR<UserCreateWithoutReceiveTxnsInput, UserUncheckedCreateWithoutReceiveTxnsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiveTxnsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiveTxnsInput, UserUncheckedUpdateWithoutReceiveTxnsInput>
  }

  export type UserUpdateWithoutReceiveTxnsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    magicToken?: MagicLinkTokenUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUpdateManyWithoutUserNestedInput
    sentTxns?: P2PTransactionUpdateManyWithoutSenderUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiveTxnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    magicToken?: MagicLinkTokenUncheckedUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTxns?: P2PTransactionUncheckedUpdateManyWithoutSenderUserNestedInput
  }

  export type UserCreateWithoutWalletInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    magicToken?: MagicLinkTokenCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionCreateNestedManyWithoutUserInput
    sentTxns?: P2PTransactionCreateNestedManyWithoutSenderUserInput
    receiveTxns?: P2PTransactionCreateNestedManyWithoutReceiverUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    magicToken?: MagicLinkTokenUncheckedCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    sentTxns?: P2PTransactionUncheckedCreateNestedManyWithoutSenderUserInput
    receiveTxns?: P2PTransactionUncheckedCreateNestedManyWithoutReceiverUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    magicToken?: MagicLinkTokenUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUpdateManyWithoutUserNestedInput
    sentTxns?: P2PTransactionUpdateManyWithoutSenderUserNestedInput
    receiveTxns?: P2PTransactionUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    magicToken?: MagicLinkTokenUncheckedUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTxns?: P2PTransactionUncheckedUpdateManyWithoutSenderUserNestedInput
    receiveTxns?: P2PTransactionUncheckedUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserCreateWithoutMagicTokenInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionCreateNestedManyWithoutUserInput
    sentTxns?: P2PTransactionCreateNestedManyWithoutSenderUserInput
    receiveTxns?: P2PTransactionCreateNestedManyWithoutReceiverUserInput
  }

  export type UserUncheckedCreateWithoutMagicTokenInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    BankTxns?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    sentTxns?: P2PTransactionUncheckedCreateNestedManyWithoutSenderUserInput
    receiveTxns?: P2PTransactionUncheckedCreateNestedManyWithoutReceiverUserInput
  }

  export type UserCreateOrConnectWithoutMagicTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMagicTokenInput, UserUncheckedCreateWithoutMagicTokenInput>
  }

  export type UserUpsertWithoutMagicTokenInput = {
    update: XOR<UserUpdateWithoutMagicTokenInput, UserUncheckedUpdateWithoutMagicTokenInput>
    create: XOR<UserCreateWithoutMagicTokenInput, UserUncheckedCreateWithoutMagicTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMagicTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMagicTokenInput, UserUncheckedUpdateWithoutMagicTokenInput>
  }

  export type UserUpdateWithoutMagicTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUpdateManyWithoutUserNestedInput
    sentTxns?: P2PTransactionUpdateManyWithoutSenderUserNestedInput
    receiveTxns?: P2PTransactionUpdateManyWithoutReceiverUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMagicTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    BankTxns?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTxns?: P2PTransactionUncheckedUpdateManyWithoutSenderUserNestedInput
    receiveTxns?: P2PTransactionUncheckedUpdateManyWithoutReceiverUserNestedInput
  }

  export type BankTransactionCreateManyUserInput = {
    id?: bigint | number
    token?: string | null
    provider: string
    operationType: $Enums.BankOperation
    amount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type P2PTransactionCreateManySenderUserInput = {
    id?: bigint | number
    receiverId: number
    amount?: Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionCreateManyReceiverUserInput = {
    id?: bigint | number
    senderId: number
    amount?: Decimal | DecimalJsLike | number | string
  }

  export type BankTransactionUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    operationType?: EnumBankOperationFieldUpdateOperationsInput | $Enums.BankOperation
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    operationType?: EnumBankOperationFieldUpdateOperationsInput | $Enums.BankOperation
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    operationType?: EnumBankOperationFieldUpdateOperationsInput | $Enums.BankOperation
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type P2PTransactionUpdateWithoutSenderUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receiverUser?: UserUpdateOneRequiredWithoutReceiveTxnsNestedInput
  }

  export type P2PTransactionUncheckedUpdateWithoutSenderUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiverId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionUncheckedUpdateManyWithoutSenderUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    receiverId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionUpdateWithoutReceiverUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    senderUser?: UserUpdateOneRequiredWithoutSentTxnsNestedInput
  }

  export type P2PTransactionUncheckedUpdateWithoutReceiverUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type P2PTransactionUncheckedUpdateManyWithoutReceiverUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    senderId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}