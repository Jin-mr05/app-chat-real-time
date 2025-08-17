
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Code
 * 
 */
export type Code = $Result.DefaultSelection<Prisma.$CodePayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model ReadProgram
 * 
 */
export type ReadProgram = $Result.DefaultSelection<Prisma.$ReadProgramPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model RolePermisson
 * 
 */
export type RolePermisson = $Result.DefaultSelection<Prisma.$RolePermissonPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CodeType: {
  VERIFY: 'VERIFY',
  RESET_PASSWORD: 'RESET_PASSWORD'
};

export type CodeType = (typeof CodeType)[keyof typeof CodeType]


export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  FILE: 'FILE'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const StatusMessage: {
  SENDING: 'SENDING',
  RECEIVED: 'RECEIVED',
  READ: 'READ'
};

export type StatusMessage = (typeof StatusMessage)[keyof typeof StatusMessage]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHERS: 'OTHERS'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type CodeType = $Enums.CodeType

export const CodeType: typeof $Enums.CodeType

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type StatusMessage = $Enums.StatusMessage

export const StatusMessage: typeof $Enums.StatusMessage

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.code`: Exposes CRUD operations for the **Code** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codes
    * const codes = await prisma.code.findMany()
    * ```
    */
  get code(): Prisma.CodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.readProgram`: Exposes CRUD operations for the **ReadProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReadPrograms
    * const readPrograms = await prisma.readProgram.findMany()
    * ```
    */
  get readProgram(): Prisma.ReadProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermisson`: Exposes CRUD operations for the **RolePermisson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissons
    * const rolePermissons = await prisma.rolePermisson.findMany()
    * ```
    */
  get rolePermisson(): Prisma.RolePermissonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    Code: 'Code',
    Message: 'Message',
    ReadProgram: 'ReadProgram',
    Room: 'Room',
    GroupMember: 'GroupMember',
    Role: 'Role',
    Permission: 'Permission',
    RolePermisson: 'RolePermisson',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "code" | "message" | "readProgram" | "room" | "groupMember" | "role" | "permission" | "rolePermisson" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Code: {
        payload: Prisma.$CodePayload<ExtArgs>
        fields: Prisma.CodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          findFirst: {
            args: Prisma.CodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          findMany: {
            args: Prisma.CodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          create: {
            args: Prisma.CodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          createMany: {
            args: Prisma.CodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          delete: {
            args: Prisma.CodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          update: {
            args: Prisma.CodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          deleteMany: {
            args: Prisma.CodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          upsert: {
            args: Prisma.CodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          aggregate: {
            args: Prisma.CodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCode>
          }
          groupBy: {
            args: Prisma.CodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeCountArgs<ExtArgs>
            result: $Utils.Optional<CodeCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      ReadProgram: {
        payload: Prisma.$ReadProgramPayload<ExtArgs>
        fields: Prisma.ReadProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>
          }
          findFirst: {
            args: Prisma.ReadProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>
          }
          findMany: {
            args: Prisma.ReadProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>[]
          }
          create: {
            args: Prisma.ReadProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>
          }
          createMany: {
            args: Prisma.ReadProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>[]
          }
          delete: {
            args: Prisma.ReadProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>
          }
          update: {
            args: Prisma.ReadProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>
          }
          deleteMany: {
            args: Prisma.ReadProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReadProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>[]
          }
          upsert: {
            args: Prisma.ReadProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadProgramPayload>
          }
          aggregate: {
            args: Prisma.ReadProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReadProgram>
          }
          groupBy: {
            args: Prisma.ReadProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ReadProgramCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      RolePermisson: {
        payload: Prisma.$RolePermissonPayload<ExtArgs>
        fields: Prisma.RolePermissonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>
          }
          findFirst: {
            args: Prisma.RolePermissonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>
          }
          findMany: {
            args: Prisma.RolePermissonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>[]
          }
          create: {
            args: Prisma.RolePermissonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>
          }
          createMany: {
            args: Prisma.RolePermissonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>[]
          }
          delete: {
            args: Prisma.RolePermissonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>
          }
          update: {
            args: Prisma.RolePermissonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePermissonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>[]
          }
          upsert: {
            args: Prisma.RolePermissonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissonPayload>
          }
          aggregate: {
            args: Prisma.RolePermissonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermisson>
          }
          groupBy: {
            args: Prisma.RolePermissonGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissonGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissonCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissonCountAggregateOutputType> | number
          }
        }
      }
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    session?: SessionOmit
    code?: CodeOmit
    message?: MessageOmit
    readProgram?: ReadProgramOmit
    room?: RoomOmit
    groupMember?: GroupMemberOmit
    role?: RoleOmit
    permission?: PermissionOmit
    rolePermisson?: RolePermissonOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    members: number
    readPrograms: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | RoomCountOutputTypeCountMembersArgs
    readPrograms?: boolean | RoomCountOutputTypeCountReadProgramsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReadProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadProgramWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userRoles: number
    rolePermissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | RoleCountOutputTypeCountUserRolesArgs
    rolePermissions?: boolean | RoleCountOutputTypeCountRolePermissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissonWhereInput
  }


  /**
   * Count Type RolePermissonCountOutputType
   */

  export type RolePermissonCountOutputType = {
    permission: number
  }

  export type RolePermissonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | RolePermissonCountOutputTypeCountPermissionArgs
  }

  // Custom InputTypes
  /**
   * RolePermissonCountOutputType without action
   */
  export type RolePermissonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissonCountOutputType
     */
    select?: RolePermissonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolePermissonCountOutputType without action
   */
  export type RolePermissonCountOutputTypeCountPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memberGroups: number
    createdGroups: number
    messages: number
    readProgram: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberGroups?: boolean | UserCountOutputTypeCountMemberGroupsArgs
    createdGroups?: boolean | UserCountOutputTypeCountCreatedGroupsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    readProgram?: boolean | UserCountOutputTypeCountReadProgramArgs
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
  export type UserCountOutputTypeCountMemberGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReadProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadProgramWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    hasedRefreshToken: string | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    hasedRefreshToken: string | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    hasedRefreshToken: number
    userId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    hasedRefreshToken?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    hasedRefreshToken?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    hasedRefreshToken?: true
    userId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    hasedRefreshToken: string | null
    userId: string | null
    createAt: Date
    updateAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasedRefreshToken?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasedRefreshToken?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasedRefreshToken?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    hasedRefreshToken?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hasedRefreshToken" | "userId" | "createAt" | "updateAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hasedRefreshToken: string | null
      userId: string | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Session$userArgs<ExtArgs> = {}>(args?: Subset<T, Session$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly hasedRefreshToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly createAt: FieldRef<"Session", 'DateTime'>
    readonly updateAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.user
   */
  export type Session$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Code
   */

  export type AggregateCode = {
    _count: CodeCountAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  export type CodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: $Enums.CodeType | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: $Enums.CodeType | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CodeCountAggregateOutputType = {
    id: number
    code: number
    type: number
    userId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CodeMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type CodeMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type CodeCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    userId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Code to aggregate.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Codes
    **/
    _count?: true | CodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeMaxAggregateInputType
  }

  export type GetCodeAggregateType<T extends CodeAggregateArgs> = {
        [P in keyof T & keyof AggregateCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCode[P]>
      : GetScalarType<T[P], AggregateCode[P]>
  }




  export type CodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeWhereInput
    orderBy?: CodeOrderByWithAggregationInput | CodeOrderByWithAggregationInput[]
    by: CodeScalarFieldEnum[] | CodeScalarFieldEnum
    having?: CodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeCountAggregateInputType | true
    _min?: CodeMinAggregateInputType
    _max?: CodeMaxAggregateInputType
  }

  export type CodeGroupByOutputType = {
    id: string
    code: string | null
    type: $Enums.CodeType
    userId: string | null
    createAt: Date
    updateAt: Date
    _count: CodeCountAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  type GetCodeGroupByPayload<T extends CodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeGroupByOutputType[P]>
            : GetScalarType<T[P], CodeGroupByOutputType[P]>
        }
      >
    >


  export type CodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | Code$userArgs<ExtArgs>
  }, ExtArgs["result"]["code"]>

  export type CodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | Code$userArgs<ExtArgs>
  }, ExtArgs["result"]["code"]>

  export type CodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | Code$userArgs<ExtArgs>
  }, ExtArgs["result"]["code"]>

  export type CodeSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type CodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "userId" | "createAt" | "updateAt", ExtArgs["result"]["code"]>
  export type CodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Code$userArgs<ExtArgs>
  }
  export type CodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Code$userArgs<ExtArgs>
  }
  export type CodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Code$userArgs<ExtArgs>
  }

  export type $CodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Code"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string | null
      type: $Enums.CodeType
      userId: string | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["code"]>
    composites: {}
  }

  type CodeGetPayload<S extends boolean | null | undefined | CodeDefaultArgs> = $Result.GetResult<Prisma.$CodePayload, S>

  type CodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeCountAggregateInputType | true
    }

  export interface CodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Code'], meta: { name: 'Code' } }
    /**
     * Find zero or one Code that matches the filter.
     * @param {CodeFindUniqueArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeFindUniqueArgs>(args: SelectSubset<T, CodeFindUniqueArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Code that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeFindUniqueOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Code that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindFirstArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeFindFirstArgs>(args?: SelectSubset<T, CodeFindFirstArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Code that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindFirstOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codes
     * const codes = await prisma.code.findMany()
     * 
     * // Get first 10 Codes
     * const codes = await prisma.code.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeWithIdOnly = await prisma.code.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeFindManyArgs>(args?: SelectSubset<T, CodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Code.
     * @param {CodeCreateArgs} args - Arguments to create a Code.
     * @example
     * // Create one Code
     * const Code = await prisma.code.create({
     *   data: {
     *     // ... data to create a Code
     *   }
     * })
     * 
     */
    create<T extends CodeCreateArgs>(args: SelectSubset<T, CodeCreateArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codes.
     * @param {CodeCreateManyArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeCreateManyArgs>(args?: SelectSubset<T, CodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Codes and returns the data saved in the database.
     * @param {CodeCreateManyAndReturnArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Codes and only return the `id`
     * const codeWithIdOnly = await prisma.code.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Code.
     * @param {CodeDeleteArgs} args - Arguments to delete one Code.
     * @example
     * // Delete one Code
     * const Code = await prisma.code.delete({
     *   where: {
     *     // ... filter to delete one Code
     *   }
     * })
     * 
     */
    delete<T extends CodeDeleteArgs>(args: SelectSubset<T, CodeDeleteArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Code.
     * @param {CodeUpdateArgs} args - Arguments to update one Code.
     * @example
     * // Update one Code
     * const code = await prisma.code.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeUpdateArgs>(args: SelectSubset<T, CodeUpdateArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codes.
     * @param {CodeDeleteManyArgs} args - Arguments to filter Codes to delete.
     * @example
     * // Delete a few Codes
     * const { count } = await prisma.code.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeDeleteManyArgs>(args?: SelectSubset<T, CodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codes
     * const code = await prisma.code.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeUpdateManyArgs>(args: SelectSubset<T, CodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes and returns the data updated in the database.
     * @param {CodeUpdateManyAndReturnArgs} args - Arguments to update many Codes.
     * @example
     * // Update many Codes
     * const code = await prisma.code.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Codes and only return the `id`
     * const codeWithIdOnly = await prisma.code.updateManyAndReturn({
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
    updateManyAndReturn<T extends CodeUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Code.
     * @param {CodeUpsertArgs} args - Arguments to update or create a Code.
     * @example
     * // Update or create a Code
     * const code = await prisma.code.upsert({
     *   create: {
     *     // ... data to create a Code
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Code we want to update
     *   }
     * })
     */
    upsert<T extends CodeUpsertArgs>(args: SelectSubset<T, CodeUpsertArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeCountArgs} args - Arguments to filter Codes to count.
     * @example
     * // Count the number of Codes
     * const count = await prisma.code.count({
     *   where: {
     *     // ... the filter for the Codes we want to count
     *   }
     * })
    **/
    count<T extends CodeCountArgs>(
      args?: Subset<T, CodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeAggregateArgs>(args: Subset<T, CodeAggregateArgs>): Prisma.PrismaPromise<GetCodeAggregateType<T>>

    /**
     * Group by Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeGroupByArgs} args - Group by arguments.
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
      T extends CodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeGroupByArgs['orderBy'] }
        : { orderBy?: CodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Code model
   */
  readonly fields: CodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Code.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Code$userArgs<ExtArgs> = {}>(args?: Subset<T, Code$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Code model
   */
  interface CodeFieldRefs {
    readonly id: FieldRef<"Code", 'String'>
    readonly code: FieldRef<"Code", 'String'>
    readonly type: FieldRef<"Code", 'CodeType'>
    readonly userId: FieldRef<"Code", 'String'>
    readonly createAt: FieldRef<"Code", 'DateTime'>
    readonly updateAt: FieldRef<"Code", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Code findUnique
   */
  export type CodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code findUniqueOrThrow
   */
  export type CodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code findFirst
   */
  export type CodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code findFirstOrThrow
   */
  export type CodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code findMany
   */
  export type CodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code create
   */
  export type CodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Code.
     */
    data: XOR<CodeCreateInput, CodeUncheckedCreateInput>
  }

  /**
   * Code createMany
   */
  export type CodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Codes.
     */
    data: CodeCreateManyInput | CodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Code createManyAndReturn
   */
  export type CodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The data used to create many Codes.
     */
    data: CodeCreateManyInput | CodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Code update
   */
  export type CodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Code.
     */
    data: XOR<CodeUpdateInput, CodeUncheckedUpdateInput>
    /**
     * Choose, which Code to update.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code updateMany
   */
  export type CodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Codes.
     */
    data: XOR<CodeUpdateManyMutationInput, CodeUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
  }

  /**
   * Code updateManyAndReturn
   */
  export type CodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The data used to update Codes.
     */
    data: XOR<CodeUpdateManyMutationInput, CodeUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Code upsert
   */
  export type CodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Code to update in case it exists.
     */
    where: CodeWhereUniqueInput
    /**
     * In case the Code found by the `where` argument doesn't exist, create a new Code with this data.
     */
    create: XOR<CodeCreateInput, CodeUncheckedCreateInput>
    /**
     * In case the Code was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeUpdateInput, CodeUncheckedUpdateInput>
  }

  /**
   * Code delete
   */
  export type CodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter which Code to delete.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code deleteMany
   */
  export type CodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codes to delete
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to delete.
     */
    limit?: number
  }

  /**
   * Code.user
   */
  export type Code$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Code without action
   */
  export type CodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    staus: $Enums.StatusMessage | null
    createAt: Date | null
    updateAt: Date | null
    roomId: string | null
    addressId: string | null
    userId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    staus: $Enums.StatusMessage | null
    createAt: Date | null
    updateAt: Date | null
    roomId: string | null
    addressId: string | null
    userId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    staus: number
    createAt: number
    updateAt: number
    roomId: number
    addressId: number
    userId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    staus?: true
    createAt?: true
    updateAt?: true
    roomId?: true
    addressId?: true
    userId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    staus?: true
    createAt?: true
    updateAt?: true
    roomId?: true
    addressId?: true
    userId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    staus?: true
    createAt?: true
    updateAt?: true
    roomId?: true
    addressId?: true
    userId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    staus: $Enums.StatusMessage
    createAt: Date
    updateAt: Date
    roomId: string | null
    addressId: string | null
    userId: string
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    staus?: boolean
    createAt?: boolean
    updateAt?: boolean
    roomId?: boolean
    addressId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    staus?: boolean
    createAt?: boolean
    updateAt?: boolean
    roomId?: boolean
    addressId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    staus?: boolean
    createAt?: boolean
    updateAt?: boolean
    roomId?: boolean
    addressId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    staus?: boolean
    createAt?: boolean
    updateAt?: boolean
    roomId?: boolean
    addressId?: boolean
    userId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "staus" | "createAt" | "updateAt" | "roomId" | "addressId" | "userId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      staus: $Enums.StatusMessage
      createAt: Date
      updateAt: Date
      roomId: string | null
      addressId: string | null
      userId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly staus: FieldRef<"Message", 'StatusMessage'>
    readonly createAt: FieldRef<"Message", 'DateTime'>
    readonly updateAt: FieldRef<"Message", 'DateTime'>
    readonly roomId: FieldRef<"Message", 'String'>
    readonly addressId: FieldRef<"Message", 'String'>
    readonly userId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model ReadProgram
   */

  export type AggregateReadProgram = {
    _count: ReadProgramCountAggregateOutputType | null
    _avg: ReadProgramAvgAggregateOutputType | null
    _sum: ReadProgramSumAggregateOutputType | null
    _min: ReadProgramMinAggregateOutputType | null
    _max: ReadProgramMaxAggregateOutputType | null
  }

  export type ReadProgramAvgAggregateOutputType = {
    lastestMessgaId: number | null
  }

  export type ReadProgramSumAggregateOutputType = {
    lastestMessgaId: number | null
  }

  export type ReadProgramMinAggregateOutputType = {
    id: string | null
    lastestMessgaId: number | null
    userId: string | null
    roomId: string | null
  }

  export type ReadProgramMaxAggregateOutputType = {
    id: string | null
    lastestMessgaId: number | null
    userId: string | null
    roomId: string | null
  }

  export type ReadProgramCountAggregateOutputType = {
    id: number
    lastestMessgaId: number
    userId: number
    roomId: number
    _all: number
  }


  export type ReadProgramAvgAggregateInputType = {
    lastestMessgaId?: true
  }

  export type ReadProgramSumAggregateInputType = {
    lastestMessgaId?: true
  }

  export type ReadProgramMinAggregateInputType = {
    id?: true
    lastestMessgaId?: true
    userId?: true
    roomId?: true
  }

  export type ReadProgramMaxAggregateInputType = {
    id?: true
    lastestMessgaId?: true
    userId?: true
    roomId?: true
  }

  export type ReadProgramCountAggregateInputType = {
    id?: true
    lastestMessgaId?: true
    userId?: true
    roomId?: true
    _all?: true
  }

  export type ReadProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadProgram to aggregate.
     */
    where?: ReadProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadPrograms to fetch.
     */
    orderBy?: ReadProgramOrderByWithRelationInput | ReadProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReadPrograms
    **/
    _count?: true | ReadProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadProgramMaxAggregateInputType
  }

  export type GetReadProgramAggregateType<T extends ReadProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateReadProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReadProgram[P]>
      : GetScalarType<T[P], AggregateReadProgram[P]>
  }




  export type ReadProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadProgramWhereInput
    orderBy?: ReadProgramOrderByWithAggregationInput | ReadProgramOrderByWithAggregationInput[]
    by: ReadProgramScalarFieldEnum[] | ReadProgramScalarFieldEnum
    having?: ReadProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadProgramCountAggregateInputType | true
    _avg?: ReadProgramAvgAggregateInputType
    _sum?: ReadProgramSumAggregateInputType
    _min?: ReadProgramMinAggregateInputType
    _max?: ReadProgramMaxAggregateInputType
  }

  export type ReadProgramGroupByOutputType = {
    id: string
    lastestMessgaId: number | null
    userId: string
    roomId: string
    _count: ReadProgramCountAggregateOutputType | null
    _avg: ReadProgramAvgAggregateOutputType | null
    _sum: ReadProgramSumAggregateOutputType | null
    _min: ReadProgramMinAggregateOutputType | null
    _max: ReadProgramMaxAggregateOutputType | null
  }

  type GetReadProgramGroupByPayload<T extends ReadProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ReadProgramGroupByOutputType[P]>
        }
      >
    >


  export type ReadProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastestMessgaId?: boolean
    userId?: boolean
    roomId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readProgram"]>

  export type ReadProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastestMessgaId?: boolean
    userId?: boolean
    roomId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readProgram"]>

  export type ReadProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastestMessgaId?: boolean
    userId?: boolean
    roomId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readProgram"]>

  export type ReadProgramSelectScalar = {
    id?: boolean
    lastestMessgaId?: boolean
    userId?: boolean
    roomId?: boolean
  }

  export type ReadProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastestMessgaId" | "userId" | "roomId", ExtArgs["result"]["readProgram"]>
  export type ReadProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type ReadProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type ReadProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $ReadProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReadProgram"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastestMessgaId: number | null
      userId: string
      roomId: string
    }, ExtArgs["result"]["readProgram"]>
    composites: {}
  }

  type ReadProgramGetPayload<S extends boolean | null | undefined | ReadProgramDefaultArgs> = $Result.GetResult<Prisma.$ReadProgramPayload, S>

  type ReadProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReadProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReadProgramCountAggregateInputType | true
    }

  export interface ReadProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReadProgram'], meta: { name: 'ReadProgram' } }
    /**
     * Find zero or one ReadProgram that matches the filter.
     * @param {ReadProgramFindUniqueArgs} args - Arguments to find a ReadProgram
     * @example
     * // Get one ReadProgram
     * const readProgram = await prisma.readProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadProgramFindUniqueArgs>(args: SelectSubset<T, ReadProgramFindUniqueArgs<ExtArgs>>): Prisma__ReadProgramClient<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReadProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadProgramFindUniqueOrThrowArgs} args - Arguments to find a ReadProgram
     * @example
     * // Get one ReadProgram
     * const readProgram = await prisma.readProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadProgramClient<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadProgramFindFirstArgs} args - Arguments to find a ReadProgram
     * @example
     * // Get one ReadProgram
     * const readProgram = await prisma.readProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadProgramFindFirstArgs>(args?: SelectSubset<T, ReadProgramFindFirstArgs<ExtArgs>>): Prisma__ReadProgramClient<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadProgramFindFirstOrThrowArgs} args - Arguments to find a ReadProgram
     * @example
     * // Get one ReadProgram
     * const readProgram = await prisma.readProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadProgramClient<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReadPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReadPrograms
     * const readPrograms = await prisma.readProgram.findMany()
     * 
     * // Get first 10 ReadPrograms
     * const readPrograms = await prisma.readProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readProgramWithIdOnly = await prisma.readProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadProgramFindManyArgs>(args?: SelectSubset<T, ReadProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReadProgram.
     * @param {ReadProgramCreateArgs} args - Arguments to create a ReadProgram.
     * @example
     * // Create one ReadProgram
     * const ReadProgram = await prisma.readProgram.create({
     *   data: {
     *     // ... data to create a ReadProgram
     *   }
     * })
     * 
     */
    create<T extends ReadProgramCreateArgs>(args: SelectSubset<T, ReadProgramCreateArgs<ExtArgs>>): Prisma__ReadProgramClient<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReadPrograms.
     * @param {ReadProgramCreateManyArgs} args - Arguments to create many ReadPrograms.
     * @example
     * // Create many ReadPrograms
     * const readProgram = await prisma.readProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadProgramCreateManyArgs>(args?: SelectSubset<T, ReadProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReadPrograms and returns the data saved in the database.
     * @param {ReadProgramCreateManyAndReturnArgs} args - Arguments to create many ReadPrograms.
     * @example
     * // Create many ReadPrograms
     * const readProgram = await prisma.readProgram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReadPrograms and only return the `id`
     * const readProgramWithIdOnly = await prisma.readProgram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReadProgram.
     * @param {ReadProgramDeleteArgs} args - Arguments to delete one ReadProgram.
     * @example
     * // Delete one ReadProgram
     * const ReadProgram = await prisma.readProgram.delete({
     *   where: {
     *     // ... filter to delete one ReadProgram
     *   }
     * })
     * 
     */
    delete<T extends ReadProgramDeleteArgs>(args: SelectSubset<T, ReadProgramDeleteArgs<ExtArgs>>): Prisma__ReadProgramClient<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReadProgram.
     * @param {ReadProgramUpdateArgs} args - Arguments to update one ReadProgram.
     * @example
     * // Update one ReadProgram
     * const readProgram = await prisma.readProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadProgramUpdateArgs>(args: SelectSubset<T, ReadProgramUpdateArgs<ExtArgs>>): Prisma__ReadProgramClient<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReadPrograms.
     * @param {ReadProgramDeleteManyArgs} args - Arguments to filter ReadPrograms to delete.
     * @example
     * // Delete a few ReadPrograms
     * const { count } = await prisma.readProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadProgramDeleteManyArgs>(args?: SelectSubset<T, ReadProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReadPrograms
     * const readProgram = await prisma.readProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadProgramUpdateManyArgs>(args: SelectSubset<T, ReadProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadPrograms and returns the data updated in the database.
     * @param {ReadProgramUpdateManyAndReturnArgs} args - Arguments to update many ReadPrograms.
     * @example
     * // Update many ReadPrograms
     * const readProgram = await prisma.readProgram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReadPrograms and only return the `id`
     * const readProgramWithIdOnly = await prisma.readProgram.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReadProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ReadProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReadProgram.
     * @param {ReadProgramUpsertArgs} args - Arguments to update or create a ReadProgram.
     * @example
     * // Update or create a ReadProgram
     * const readProgram = await prisma.readProgram.upsert({
     *   create: {
     *     // ... data to create a ReadProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReadProgram we want to update
     *   }
     * })
     */
    upsert<T extends ReadProgramUpsertArgs>(args: SelectSubset<T, ReadProgramUpsertArgs<ExtArgs>>): Prisma__ReadProgramClient<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReadPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadProgramCountArgs} args - Arguments to filter ReadPrograms to count.
     * @example
     * // Count the number of ReadPrograms
     * const count = await prisma.readProgram.count({
     *   where: {
     *     // ... the filter for the ReadPrograms we want to count
     *   }
     * })
    **/
    count<T extends ReadProgramCountArgs>(
      args?: Subset<T, ReadProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReadProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReadProgramAggregateArgs>(args: Subset<T, ReadProgramAggregateArgs>): Prisma.PrismaPromise<GetReadProgramAggregateType<T>>

    /**
     * Group by ReadProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadProgramGroupByArgs} args - Group by arguments.
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
      T extends ReadProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadProgramGroupByArgs['orderBy'] }
        : { orderBy?: ReadProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReadProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReadProgram model
   */
  readonly fields: ReadProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReadProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReadProgram model
   */
  interface ReadProgramFieldRefs {
    readonly id: FieldRef<"ReadProgram", 'String'>
    readonly lastestMessgaId: FieldRef<"ReadProgram", 'Int'>
    readonly userId: FieldRef<"ReadProgram", 'String'>
    readonly roomId: FieldRef<"ReadProgram", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReadProgram findUnique
   */
  export type ReadProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * Filter, which ReadProgram to fetch.
     */
    where: ReadProgramWhereUniqueInput
  }

  /**
   * ReadProgram findUniqueOrThrow
   */
  export type ReadProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * Filter, which ReadProgram to fetch.
     */
    where: ReadProgramWhereUniqueInput
  }

  /**
   * ReadProgram findFirst
   */
  export type ReadProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * Filter, which ReadProgram to fetch.
     */
    where?: ReadProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadPrograms to fetch.
     */
    orderBy?: ReadProgramOrderByWithRelationInput | ReadProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadPrograms.
     */
    cursor?: ReadProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadPrograms.
     */
    distinct?: ReadProgramScalarFieldEnum | ReadProgramScalarFieldEnum[]
  }

  /**
   * ReadProgram findFirstOrThrow
   */
  export type ReadProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * Filter, which ReadProgram to fetch.
     */
    where?: ReadProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadPrograms to fetch.
     */
    orderBy?: ReadProgramOrderByWithRelationInput | ReadProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadPrograms.
     */
    cursor?: ReadProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadPrograms.
     */
    distinct?: ReadProgramScalarFieldEnum | ReadProgramScalarFieldEnum[]
  }

  /**
   * ReadProgram findMany
   */
  export type ReadProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * Filter, which ReadPrograms to fetch.
     */
    where?: ReadProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadPrograms to fetch.
     */
    orderBy?: ReadProgramOrderByWithRelationInput | ReadProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReadPrograms.
     */
    cursor?: ReadProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadPrograms.
     */
    skip?: number
    distinct?: ReadProgramScalarFieldEnum | ReadProgramScalarFieldEnum[]
  }

  /**
   * ReadProgram create
   */
  export type ReadProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a ReadProgram.
     */
    data: XOR<ReadProgramCreateInput, ReadProgramUncheckedCreateInput>
  }

  /**
   * ReadProgram createMany
   */
  export type ReadProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReadPrograms.
     */
    data: ReadProgramCreateManyInput | ReadProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReadProgram createManyAndReturn
   */
  export type ReadProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * The data used to create many ReadPrograms.
     */
    data: ReadProgramCreateManyInput | ReadProgramCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadProgram update
   */
  export type ReadProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a ReadProgram.
     */
    data: XOR<ReadProgramUpdateInput, ReadProgramUncheckedUpdateInput>
    /**
     * Choose, which ReadProgram to update.
     */
    where: ReadProgramWhereUniqueInput
  }

  /**
   * ReadProgram updateMany
   */
  export type ReadProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReadPrograms.
     */
    data: XOR<ReadProgramUpdateManyMutationInput, ReadProgramUncheckedUpdateManyInput>
    /**
     * Filter which ReadPrograms to update
     */
    where?: ReadProgramWhereInput
    /**
     * Limit how many ReadPrograms to update.
     */
    limit?: number
  }

  /**
   * ReadProgram updateManyAndReturn
   */
  export type ReadProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * The data used to update ReadPrograms.
     */
    data: XOR<ReadProgramUpdateManyMutationInput, ReadProgramUncheckedUpdateManyInput>
    /**
     * Filter which ReadPrograms to update
     */
    where?: ReadProgramWhereInput
    /**
     * Limit how many ReadPrograms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadProgram upsert
   */
  export type ReadProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the ReadProgram to update in case it exists.
     */
    where: ReadProgramWhereUniqueInput
    /**
     * In case the ReadProgram found by the `where` argument doesn't exist, create a new ReadProgram with this data.
     */
    create: XOR<ReadProgramCreateInput, ReadProgramUncheckedCreateInput>
    /**
     * In case the ReadProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadProgramUpdateInput, ReadProgramUncheckedUpdateInput>
  }

  /**
   * ReadProgram delete
   */
  export type ReadProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    /**
     * Filter which ReadProgram to delete.
     */
    where: ReadProgramWhereUniqueInput
  }

  /**
   * ReadProgram deleteMany
   */
  export type ReadProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadPrograms to delete
     */
    where?: ReadProgramWhereInput
    /**
     * Limit how many ReadPrograms to delete.
     */
    limit?: number
  }

  /**
   * ReadProgram without action
   */
  export type ReadProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    linkRoom: string | null
    createAt: Date | null
    updateAt: Date | null
    authorId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    linkRoom: string | null
    createAt: Date | null
    updateAt: Date | null
    authorId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    linkRoom: number
    createAt: number
    updateAt: number
    authorId: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    linkRoom?: true
    createAt?: true
    updateAt?: true
    authorId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    linkRoom?: true
    createAt?: true
    updateAt?: true
    authorId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    linkRoom?: true
    createAt?: true
    updateAt?: true
    authorId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    linkRoom: string | null
    createAt: Date
    updateAt: Date
    authorId: string | null
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkRoom?: boolean
    createAt?: boolean
    updateAt?: boolean
    authorId?: boolean
    author?: boolean | Room$authorArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    readPrograms?: boolean | Room$readProgramsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkRoom?: boolean
    createAt?: boolean
    updateAt?: boolean
    authorId?: boolean
    author?: boolean | Room$authorArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    linkRoom?: boolean
    createAt?: boolean
    updateAt?: boolean
    authorId?: boolean
    author?: boolean | Room$authorArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    linkRoom?: boolean
    createAt?: boolean
    updateAt?: boolean
    authorId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "linkRoom" | "createAt" | "updateAt" | "authorId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Room$authorArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    readPrograms?: boolean | Room$readProgramsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Room$authorArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Room$authorArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      readPrograms: Prisma.$ReadProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      linkRoom: string | null
      createAt: Date
      updateAt: Date
      authorId: string | null
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends Room$authorArgs<ExtArgs> = {}>(args?: Subset<T, Room$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Room$membersArgs<ExtArgs> = {}>(args?: Subset<T, Room$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readPrograms<T extends Room$readProgramsArgs<ExtArgs> = {}>(args?: Subset<T, Room$readProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly linkRoom: FieldRef<"Room", 'String'>
    readonly createAt: FieldRef<"Room", 'DateTime'>
    readonly updateAt: FieldRef<"Room", 'DateTime'>
    readonly authorId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.author
   */
  export type Room$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Room.members
   */
  export type Room$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Room.readPrograms
   */
  export type Room$readProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    where?: ReadProgramWhereInput
    orderBy?: ReadProgramOrderByWithRelationInput | ReadProgramOrderByWithRelationInput[]
    cursor?: ReadProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadProgramScalarFieldEnum | ReadProgramScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    joinAt: Date | null
    roomID: string | null
    roleId: string | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    joinAt: Date | null
    roomID: string | null
    roleId: string | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    userId: number
    joinAt: number
    roomID: number
    roleId: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    userId?: true
    joinAt?: true
    roomID?: true
    roleId?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    joinAt?: true
    roomID?: true
    roleId?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    userId?: true
    joinAt?: true
    roomID?: true
    roleId?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    userId: string
    joinAt: Date
    roomID: string
    roleId: string
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    joinAt?: boolean
    roomID?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    joinAt?: boolean
    roomID?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    joinAt?: boolean
    roomID?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    joinAt?: boolean
    roomID?: boolean
    roleId?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "joinAt" | "roomID" | "roleId", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      joinAt: Date
      roomID: string
      roleId: string
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
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
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly joinAt: FieldRef<"GroupMember", 'DateTime'>
    readonly roomID: FieldRef<"GroupMember", 'String'>
    readonly roleId: FieldRef<"GroupMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    nameRole: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    nameRole: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    nameRole: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    nameRole?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    nameRole?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    nameRole?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    nameRole: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameRole?: boolean
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameRole?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameRole?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    nameRole?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameRole", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      userRoles: Prisma.$GroupMemberPayload<ExtArgs>[]
      rolePermissions: Prisma.$RolePermissonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameRole: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends Role$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rolePermissions<T extends Role$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly nameRole: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.userRoles
   */
  export type Role$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Role.rolePermissions
   */
  export type Role$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    where?: RolePermissonWhereInput
    orderBy?: RolePermissonOrderByWithRelationInput | RolePermissonOrderByWithRelationInput[]
    cursor?: RolePermissonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissonScalarFieldEnum | RolePermissonScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    codePermisson: number | null
  }

  export type PermissionSumAggregateOutputType = {
    codePermisson: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    namePermission: string | null
    codePermisson: number | null
    rolePermissonId: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    namePermission: string | null
    codePermisson: number | null
    rolePermissonId: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    namePermission: number
    codePermisson: number
    rolePermissonId: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    codePermisson?: true
  }

  export type PermissionSumAggregateInputType = {
    codePermisson?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    namePermission?: true
    codePermisson?: true
    rolePermissonId?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    namePermission?: true
    codePermisson?: true
    rolePermissonId?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    namePermission?: true
    codePermisson?: true
    rolePermissonId?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    namePermission: string
    codePermisson: number
    rolePermissonId: string | null
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namePermission?: boolean
    codePermisson?: boolean
    rolePermissonId?: boolean
    rolePermission?: boolean | Permission$rolePermissionArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namePermission?: boolean
    codePermisson?: boolean
    rolePermissonId?: boolean
    rolePermission?: boolean | Permission$rolePermissionArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namePermission?: boolean
    codePermisson?: boolean
    rolePermissonId?: boolean
    rolePermission?: boolean | Permission$rolePermissionArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    namePermission?: boolean
    codePermisson?: boolean
    rolePermissonId?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namePermission" | "codePermisson" | "rolePermissonId", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermission?: boolean | Permission$rolePermissionArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermission?: boolean | Permission$rolePermissionArgs<ExtArgs>
  }
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermission?: boolean | Permission$rolePermissionArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      rolePermission: Prisma.$RolePermissonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namePermission: string
      codePermisson: number
      rolePermissonId: string | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolePermission<T extends Permission$rolePermissionArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolePermissionArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly namePermission: FieldRef<"Permission", 'String'>
    readonly codePermisson: FieldRef<"Permission", 'Int'>
    readonly rolePermissonId: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.rolePermission
   */
  export type Permission$rolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    where?: RolePermissonWhereInput
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model RolePermisson
   */

  export type AggregateRolePermisson = {
    _count: RolePermissonCountAggregateOutputType | null
    _min: RolePermissonMinAggregateOutputType | null
    _max: RolePermissonMaxAggregateOutputType | null
  }

  export type RolePermissonMinAggregateOutputType = {
    id: string | null
    roleId: string | null
  }

  export type RolePermissonMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
  }

  export type RolePermissonCountAggregateOutputType = {
    id: number
    roleId: number
    _all: number
  }


  export type RolePermissonMinAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type RolePermissonMaxAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type RolePermissonCountAggregateInputType = {
    id?: true
    roleId?: true
    _all?: true
  }

  export type RolePermissonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermisson to aggregate.
     */
    where?: RolePermissonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissons to fetch.
     */
    orderBy?: RolePermissonOrderByWithRelationInput | RolePermissonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissons
    **/
    _count?: true | RolePermissonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissonMaxAggregateInputType
  }

  export type GetRolePermissonAggregateType<T extends RolePermissonAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermisson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermisson[P]>
      : GetScalarType<T[P], AggregateRolePermisson[P]>
  }




  export type RolePermissonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissonWhereInput
    orderBy?: RolePermissonOrderByWithAggregationInput | RolePermissonOrderByWithAggregationInput[]
    by: RolePermissonScalarFieldEnum[] | RolePermissonScalarFieldEnum
    having?: RolePermissonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissonCountAggregateInputType | true
    _min?: RolePermissonMinAggregateInputType
    _max?: RolePermissonMaxAggregateInputType
  }

  export type RolePermissonGroupByOutputType = {
    id: string
    roleId: string
    _count: RolePermissonCountAggregateOutputType | null
    _min: RolePermissonMinAggregateOutputType | null
    _max: RolePermissonMaxAggregateOutputType | null
  }

  type GetRolePermissonGroupByPayload<T extends RolePermissonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissonGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissonGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | RolePermisson$permissionArgs<ExtArgs>
    _count?: boolean | RolePermissonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermisson"]>

  export type RolePermissonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermisson"]>

  export type RolePermissonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermisson"]>

  export type RolePermissonSelectScalar = {
    id?: boolean
    roleId?: boolean
  }

  export type RolePermissonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId", ExtArgs["result"]["rolePermisson"]>
  export type RolePermissonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | RolePermisson$permissionArgs<ExtArgs>
    _count?: boolean | RolePermissonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolePermissonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RolePermissonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $RolePermissonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermisson"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
    }, ExtArgs["result"]["rolePermisson"]>
    composites: {}
  }

  type RolePermissonGetPayload<S extends boolean | null | undefined | RolePermissonDefaultArgs> = $Result.GetResult<Prisma.$RolePermissonPayload, S>

  type RolePermissonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissonCountAggregateInputType | true
    }

  export interface RolePermissonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermisson'], meta: { name: 'RolePermisson' } }
    /**
     * Find zero or one RolePermisson that matches the filter.
     * @param {RolePermissonFindUniqueArgs} args - Arguments to find a RolePermisson
     * @example
     * // Get one RolePermisson
     * const rolePermisson = await prisma.rolePermisson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissonFindUniqueArgs>(args: SelectSubset<T, RolePermissonFindUniqueArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermisson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissonFindUniqueOrThrowArgs} args - Arguments to find a RolePermisson
     * @example
     * // Get one RolePermisson
     * const rolePermisson = await prisma.rolePermisson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissonFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermisson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissonFindFirstArgs} args - Arguments to find a RolePermisson
     * @example
     * // Get one RolePermisson
     * const rolePermisson = await prisma.rolePermisson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissonFindFirstArgs>(args?: SelectSubset<T, RolePermissonFindFirstArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermisson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissonFindFirstOrThrowArgs} args - Arguments to find a RolePermisson
     * @example
     * // Get one RolePermisson
     * const rolePermisson = await prisma.rolePermisson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissonFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissonFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissons
     * const rolePermissons = await prisma.rolePermisson.findMany()
     * 
     * // Get first 10 RolePermissons
     * const rolePermissons = await prisma.rolePermisson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissonWithIdOnly = await prisma.rolePermisson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissonFindManyArgs>(args?: SelectSubset<T, RolePermissonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermisson.
     * @param {RolePermissonCreateArgs} args - Arguments to create a RolePermisson.
     * @example
     * // Create one RolePermisson
     * const RolePermisson = await prisma.rolePermisson.create({
     *   data: {
     *     // ... data to create a RolePermisson
     *   }
     * })
     * 
     */
    create<T extends RolePermissonCreateArgs>(args: SelectSubset<T, RolePermissonCreateArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissons.
     * @param {RolePermissonCreateManyArgs} args - Arguments to create many RolePermissons.
     * @example
     * // Create many RolePermissons
     * const rolePermisson = await prisma.rolePermisson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissonCreateManyArgs>(args?: SelectSubset<T, RolePermissonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissons and returns the data saved in the database.
     * @param {RolePermissonCreateManyAndReturnArgs} args - Arguments to create many RolePermissons.
     * @example
     * // Create many RolePermissons
     * const rolePermisson = await prisma.rolePermisson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissons and only return the `id`
     * const rolePermissonWithIdOnly = await prisma.rolePermisson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissonCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePermisson.
     * @param {RolePermissonDeleteArgs} args - Arguments to delete one RolePermisson.
     * @example
     * // Delete one RolePermisson
     * const RolePermisson = await prisma.rolePermisson.delete({
     *   where: {
     *     // ... filter to delete one RolePermisson
     *   }
     * })
     * 
     */
    delete<T extends RolePermissonDeleteArgs>(args: SelectSubset<T, RolePermissonDeleteArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermisson.
     * @param {RolePermissonUpdateArgs} args - Arguments to update one RolePermisson.
     * @example
     * // Update one RolePermisson
     * const rolePermisson = await prisma.rolePermisson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissonUpdateArgs>(args: SelectSubset<T, RolePermissonUpdateArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissons.
     * @param {RolePermissonDeleteManyArgs} args - Arguments to filter RolePermissons to delete.
     * @example
     * // Delete a few RolePermissons
     * const { count } = await prisma.rolePermisson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissonDeleteManyArgs>(args?: SelectSubset<T, RolePermissonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissons
     * const rolePermisson = await prisma.rolePermisson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissonUpdateManyArgs>(args: SelectSubset<T, RolePermissonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissons and returns the data updated in the database.
     * @param {RolePermissonUpdateManyAndReturnArgs} args - Arguments to update many RolePermissons.
     * @example
     * // Update many RolePermissons
     * const rolePermisson = await prisma.rolePermisson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePermissons and only return the `id`
     * const rolePermissonWithIdOnly = await prisma.rolePermisson.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolePermissonUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePermissonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePermisson.
     * @param {RolePermissonUpsertArgs} args - Arguments to update or create a RolePermisson.
     * @example
     * // Update or create a RolePermisson
     * const rolePermisson = await prisma.rolePermisson.upsert({
     *   create: {
     *     // ... data to create a RolePermisson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermisson we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissonUpsertArgs>(args: SelectSubset<T, RolePermissonUpsertArgs<ExtArgs>>): Prisma__RolePermissonClient<$Result.GetResult<Prisma.$RolePermissonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissonCountArgs} args - Arguments to filter RolePermissons to count.
     * @example
     * // Count the number of RolePermissons
     * const count = await prisma.rolePermisson.count({
     *   where: {
     *     // ... the filter for the RolePermissons we want to count
     *   }
     * })
    **/
    count<T extends RolePermissonCountArgs>(
      args?: Subset<T, RolePermissonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermisson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolePermissonAggregateArgs>(args: Subset<T, RolePermissonAggregateArgs>): Prisma.PrismaPromise<GetRolePermissonAggregateType<T>>

    /**
     * Group by RolePermisson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissonGroupByArgs} args - Group by arguments.
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
      T extends RolePermissonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissonGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolePermissonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermisson model
   */
  readonly fields: RolePermissonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermisson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends RolePermisson$permissionArgs<ExtArgs> = {}>(args?: Subset<T, RolePermisson$permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RolePermisson model
   */
  interface RolePermissonFieldRefs {
    readonly id: FieldRef<"RolePermisson", 'String'>
    readonly roleId: FieldRef<"RolePermisson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RolePermisson findUnique
   */
  export type RolePermissonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * Filter, which RolePermisson to fetch.
     */
    where: RolePermissonWhereUniqueInput
  }

  /**
   * RolePermisson findUniqueOrThrow
   */
  export type RolePermissonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * Filter, which RolePermisson to fetch.
     */
    where: RolePermissonWhereUniqueInput
  }

  /**
   * RolePermisson findFirst
   */
  export type RolePermissonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * Filter, which RolePermisson to fetch.
     */
    where?: RolePermissonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissons to fetch.
     */
    orderBy?: RolePermissonOrderByWithRelationInput | RolePermissonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissons.
     */
    cursor?: RolePermissonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissons.
     */
    distinct?: RolePermissonScalarFieldEnum | RolePermissonScalarFieldEnum[]
  }

  /**
   * RolePermisson findFirstOrThrow
   */
  export type RolePermissonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * Filter, which RolePermisson to fetch.
     */
    where?: RolePermissonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissons to fetch.
     */
    orderBy?: RolePermissonOrderByWithRelationInput | RolePermissonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissons.
     */
    cursor?: RolePermissonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissons.
     */
    distinct?: RolePermissonScalarFieldEnum | RolePermissonScalarFieldEnum[]
  }

  /**
   * RolePermisson findMany
   */
  export type RolePermissonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissons to fetch.
     */
    where?: RolePermissonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissons to fetch.
     */
    orderBy?: RolePermissonOrderByWithRelationInput | RolePermissonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissons.
     */
    cursor?: RolePermissonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissons.
     */
    skip?: number
    distinct?: RolePermissonScalarFieldEnum | RolePermissonScalarFieldEnum[]
  }

  /**
   * RolePermisson create
   */
  export type RolePermissonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermisson.
     */
    data: XOR<RolePermissonCreateInput, RolePermissonUncheckedCreateInput>
  }

  /**
   * RolePermisson createMany
   */
  export type RolePermissonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissons.
     */
    data: RolePermissonCreateManyInput | RolePermissonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermisson createManyAndReturn
   */
  export type RolePermissonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * The data used to create many RolePermissons.
     */
    data: RolePermissonCreateManyInput | RolePermissonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermisson update
   */
  export type RolePermissonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermisson.
     */
    data: XOR<RolePermissonUpdateInput, RolePermissonUncheckedUpdateInput>
    /**
     * Choose, which RolePermisson to update.
     */
    where: RolePermissonWhereUniqueInput
  }

  /**
   * RolePermisson updateMany
   */
  export type RolePermissonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissons.
     */
    data: XOR<RolePermissonUpdateManyMutationInput, RolePermissonUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissons to update
     */
    where?: RolePermissonWhereInput
    /**
     * Limit how many RolePermissons to update.
     */
    limit?: number
  }

  /**
   * RolePermisson updateManyAndReturn
   */
  export type RolePermissonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * The data used to update RolePermissons.
     */
    data: XOR<RolePermissonUpdateManyMutationInput, RolePermissonUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissons to update
     */
    where?: RolePermissonWhereInput
    /**
     * Limit how many RolePermissons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermisson upsert
   */
  export type RolePermissonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermisson to update in case it exists.
     */
    where: RolePermissonWhereUniqueInput
    /**
     * In case the RolePermisson found by the `where` argument doesn't exist, create a new RolePermisson with this data.
     */
    create: XOR<RolePermissonCreateInput, RolePermissonUncheckedCreateInput>
    /**
     * In case the RolePermisson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissonUpdateInput, RolePermissonUncheckedUpdateInput>
  }

  /**
   * RolePermisson delete
   */
  export type RolePermissonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
    /**
     * Filter which RolePermisson to delete.
     */
    where: RolePermissonWhereUniqueInput
  }

  /**
   * RolePermisson deleteMany
   */
  export type RolePermissonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissons to delete
     */
    where?: RolePermissonWhereInput
    /**
     * Limit how many RolePermissons to delete.
     */
    limit?: number
  }

  /**
   * RolePermisson.permission
   */
  export type RolePermisson$permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * RolePermisson without action
   */
  export type RolePermissonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermisson
     */
    select?: RolePermissonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermisson
     */
    omit?: RolePermissonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissonInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    birthday: Date | null
    gender: $Enums.Gender | null
    email: string | null
    hashedPassword: string | null
    isActive: boolean | null
    idDelete: boolean | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    birthday: Date | null
    gender: $Enums.Gender | null
    email: string | null
    hashedPassword: string | null
    isActive: boolean | null
    idDelete: boolean | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    birthday: number
    gender: number
    email: number
    hashedPassword: number
    isActive: number
    idDelete: number
    createAt: number
    updateAt: number
    deleteAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    gender?: true
    email?: true
    hashedPassword?: true
    isActive?: true
    idDelete?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    gender?: true
    email?: true
    hashedPassword?: true
    isActive?: true
    idDelete?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    birthday?: true
    gender?: true
    email?: true
    hashedPassword?: true
    isActive?: true
    idDelete?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    birthday: Date | null
    gender: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive: boolean
    idDelete: boolean
    createAt: Date
    updateAt: Date
    deleteAt: Date | null
    _count: UserCountAggregateOutputType | null
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
    birthday?: boolean
    gender?: boolean
    email?: boolean
    hashedPassword?: boolean
    isActive?: boolean
    idDelete?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
    session?: boolean | User$sessionArgs<ExtArgs>
    code?: boolean | User$codeArgs<ExtArgs>
    memberGroups?: boolean | User$memberGroupsArgs<ExtArgs>
    createdGroups?: boolean | User$createdGroupsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    readProgram?: boolean | User$readProgramArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthday?: boolean
    gender?: boolean
    email?: boolean
    hashedPassword?: boolean
    isActive?: boolean
    idDelete?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthday?: boolean
    gender?: boolean
    email?: boolean
    hashedPassword?: boolean
    isActive?: boolean
    idDelete?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    birthday?: boolean
    gender?: boolean
    email?: boolean
    hashedPassword?: boolean
    isActive?: boolean
    idDelete?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birthday" | "gender" | "email" | "hashedPassword" | "isActive" | "idDelete" | "createAt" | "updateAt" | "deleteAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | User$sessionArgs<ExtArgs>
    code?: boolean | User$codeArgs<ExtArgs>
    memberGroups?: boolean | User$memberGroupsArgs<ExtArgs>
    createdGroups?: boolean | User$createdGroupsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    readProgram?: boolean | User$readProgramArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs> | null
      code: Prisma.$CodePayload<ExtArgs> | null
      memberGroups: Prisma.$GroupMemberPayload<ExtArgs>[]
      createdGroups: Prisma.$RoomPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      readProgram: Prisma.$ReadProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      birthday: Date | null
      gender: $Enums.Gender | null
      email: string
      hashedPassword: string
      isActive: boolean
      idDelete: boolean
      createAt: Date
      updateAt: Date
      deleteAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    code<T extends User$codeArgs<ExtArgs> = {}>(args?: Subset<T, User$codeArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    memberGroups<T extends User$memberGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$memberGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdGroups<T extends User$createdGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readProgram<T extends User$readProgramArgs<ExtArgs> = {}>(args?: Subset<T, User$readProgramArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly idDelete: FieldRef<"User", 'Boolean'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly deleteAt: FieldRef<"User", 'DateTime'>
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
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * User.code
   */
  export type User$codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    where?: CodeWhereInput
  }

  /**
   * User.memberGroups
   */
  export type User$memberGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.createdGroups
   */
  export type User$createdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.readProgram
   */
  export type User$readProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadProgram
     */
    select?: ReadProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadProgram
     */
    omit?: ReadProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadProgramInclude<ExtArgs> | null
    where?: ReadProgramWhereInput
    orderBy?: ReadProgramOrderByWithRelationInput | ReadProgramOrderByWithRelationInput[]
    cursor?: ReadProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadProgramScalarFieldEnum | ReadProgramScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    hasedRefreshToken: 'hasedRefreshToken',
    userId: 'userId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const CodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    userId: 'userId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CodeScalarFieldEnum = (typeof CodeScalarFieldEnum)[keyof typeof CodeScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    staus: 'staus',
    createAt: 'createAt',
    updateAt: 'updateAt',
    roomId: 'roomId',
    addressId: 'addressId',
    userId: 'userId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ReadProgramScalarFieldEnum: {
    id: 'id',
    lastestMessgaId: 'lastestMessgaId',
    userId: 'userId',
    roomId: 'roomId'
  };

  export type ReadProgramScalarFieldEnum = (typeof ReadProgramScalarFieldEnum)[keyof typeof ReadProgramScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    linkRoom: 'linkRoom',
    createAt: 'createAt',
    updateAt: 'updateAt',
    authorId: 'authorId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    joinAt: 'joinAt',
    roomID: 'roomID',
    roleId: 'roleId'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    nameRole: 'nameRole'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    namePermission: 'namePermission',
    codePermisson: 'codePermisson',
    rolePermissonId: 'rolePermissonId'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RolePermissonScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId'
  };

  export type RolePermissonScalarFieldEnum = (typeof RolePermissonScalarFieldEnum)[keyof typeof RolePermissonScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birthday: 'birthday',
    gender: 'gender',
    email: 'email',
    hashedPassword: 'hashedPassword',
    isActive: 'isActive',
    idDelete: 'idDelete',
    createAt: 'createAt',
    updateAt: 'updateAt',
    deleteAt: 'deleteAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CodeType'
   */
  export type EnumCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeType'>
    


  /**
   * Reference to a field of type 'CodeType[]'
   */
  export type ListEnumCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusMessage'
   */
  export type EnumStatusMessageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusMessage'>
    


  /**
   * Reference to a field of type 'StatusMessage[]'
   */
  export type ListEnumStatusMessageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusMessage[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    hasedRefreshToken?: StringNullableFilter<"Session"> | string | null
    userId?: UuidNullableFilter<"Session"> | string | null
    createAt?: DateTimeFilter<"Session"> | Date | string
    updateAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    hasedRefreshToken?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    hasedRefreshToken?: StringNullableFilter<"Session"> | string | null
    createAt?: DateTimeFilter<"Session"> | Date | string
    updateAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    hasedRefreshToken?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    hasedRefreshToken?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: UuidNullableWithAggregatesFilter<"Session"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type CodeWhereInput = {
    AND?: CodeWhereInput | CodeWhereInput[]
    OR?: CodeWhereInput[]
    NOT?: CodeWhereInput | CodeWhereInput[]
    id?: UuidFilter<"Code"> | string
    code?: StringNullableFilter<"Code"> | string | null
    type?: EnumCodeTypeFilter<"Code"> | $Enums.CodeType
    userId?: UuidNullableFilter<"Code"> | string | null
    createAt?: DateTimeFilter<"Code"> | Date | string
    updateAt?: DateTimeFilter<"Code"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CodeWhereInput | CodeWhereInput[]
    OR?: CodeWhereInput[]
    NOT?: CodeWhereInput | CodeWhereInput[]
    code?: StringNullableFilter<"Code"> | string | null
    type?: EnumCodeTypeFilter<"Code"> | $Enums.CodeType
    createAt?: DateTimeFilter<"Code"> | Date | string
    updateAt?: DateTimeFilter<"Code"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type CodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CodeCountOrderByAggregateInput
    _max?: CodeMaxOrderByAggregateInput
    _min?: CodeMinOrderByAggregateInput
  }

  export type CodeScalarWhereWithAggregatesInput = {
    AND?: CodeScalarWhereWithAggregatesInput | CodeScalarWhereWithAggregatesInput[]
    OR?: CodeScalarWhereWithAggregatesInput[]
    NOT?: CodeScalarWhereWithAggregatesInput | CodeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Code"> | string
    code?: StringNullableWithAggregatesFilter<"Code"> | string | null
    type?: EnumCodeTypeWithAggregatesFilter<"Code"> | $Enums.CodeType
    userId?: UuidNullableWithAggregatesFilter<"Code"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"Code"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Code"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    staus?: EnumStatusMessageFilter<"Message"> | $Enums.StatusMessage
    createAt?: DateTimeFilter<"Message"> | Date | string
    updateAt?: DateTimeFilter<"Message"> | Date | string
    roomId?: StringNullableFilter<"Message"> | string | null
    addressId?: StringNullableFilter<"Message"> | string | null
    userId?: UuidFilter<"Message"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    staus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    roomId?: SortOrderInput | SortOrder
    addressId?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    staus?: EnumStatusMessageFilter<"Message"> | $Enums.StatusMessage
    createAt?: DateTimeFilter<"Message"> | Date | string
    updateAt?: DateTimeFilter<"Message"> | Date | string
    roomId?: StringNullableFilter<"Message"> | string | null
    addressId?: StringNullableFilter<"Message"> | string | null
    userId?: UuidFilter<"Message"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    staus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    roomId?: SortOrderInput | SortOrder
    addressId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    staus?: EnumStatusMessageWithAggregatesFilter<"Message"> | $Enums.StatusMessage
    createAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    roomId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    addressId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    userId?: UuidWithAggregatesFilter<"Message"> | string
  }

  export type ReadProgramWhereInput = {
    AND?: ReadProgramWhereInput | ReadProgramWhereInput[]
    OR?: ReadProgramWhereInput[]
    NOT?: ReadProgramWhereInput | ReadProgramWhereInput[]
    id?: UuidFilter<"ReadProgram"> | string
    lastestMessgaId?: IntNullableFilter<"ReadProgram"> | number | null
    userId?: UuidFilter<"ReadProgram"> | string
    roomId?: UuidFilter<"ReadProgram"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type ReadProgramOrderByWithRelationInput = {
    id?: SortOrder
    lastestMessgaId?: SortOrderInput | SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type ReadProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    userId_roomId?: ReadProgramUserIdRoomIdCompoundUniqueInput
    AND?: ReadProgramWhereInput | ReadProgramWhereInput[]
    OR?: ReadProgramWhereInput[]
    NOT?: ReadProgramWhereInput | ReadProgramWhereInput[]
    lastestMessgaId?: IntNullableFilter<"ReadProgram"> | number | null
    roomId?: UuidFilter<"ReadProgram"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "userId" | "userId_roomId">

  export type ReadProgramOrderByWithAggregationInput = {
    id?: SortOrder
    lastestMessgaId?: SortOrderInput | SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    _count?: ReadProgramCountOrderByAggregateInput
    _avg?: ReadProgramAvgOrderByAggregateInput
    _max?: ReadProgramMaxOrderByAggregateInput
    _min?: ReadProgramMinOrderByAggregateInput
    _sum?: ReadProgramSumOrderByAggregateInput
  }

  export type ReadProgramScalarWhereWithAggregatesInput = {
    AND?: ReadProgramScalarWhereWithAggregatesInput | ReadProgramScalarWhereWithAggregatesInput[]
    OR?: ReadProgramScalarWhereWithAggregatesInput[]
    NOT?: ReadProgramScalarWhereWithAggregatesInput | ReadProgramScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ReadProgram"> | string
    lastestMessgaId?: IntNullableWithAggregatesFilter<"ReadProgram"> | number | null
    userId?: UuidWithAggregatesFilter<"ReadProgram"> | string
    roomId?: UuidWithAggregatesFilter<"ReadProgram"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: UuidFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    linkRoom?: StringNullableFilter<"Room"> | string | null
    createAt?: DateTimeFilter<"Room"> | Date | string
    updateAt?: DateTimeFilter<"Room"> | Date | string
    authorId?: UuidNullableFilter<"Room"> | string | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: GroupMemberListRelationFilter
    readPrograms?: ReadProgramListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    linkRoom?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    authorId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    readPrograms?: ReadProgramOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    linkRoom?: StringNullableFilter<"Room"> | string | null
    createAt?: DateTimeFilter<"Room"> | Date | string
    updateAt?: DateTimeFilter<"Room"> | Date | string
    authorId?: UuidNullableFilter<"Room"> | string | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: GroupMemberListRelationFilter
    readPrograms?: ReadProgramListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    linkRoom?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    linkRoom?: StringNullableWithAggregatesFilter<"Room"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    authorId?: UuidNullableWithAggregatesFilter<"Room"> | string | null
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: UuidFilter<"GroupMember"> | string
    userId?: UuidFilter<"GroupMember"> | string
    joinAt?: DateTimeFilter<"GroupMember"> | Date | string
    roomID?: UuidFilter<"GroupMember"> | string
    roleId?: UuidFilter<"GroupMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    joinAt?: SortOrder
    roomID?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomID_userId?: GroupMemberRoomIDUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    userId?: UuidFilter<"GroupMember"> | string
    joinAt?: DateTimeFilter<"GroupMember"> | Date | string
    roomID?: UuidFilter<"GroupMember"> | string
    roleId?: UuidFilter<"GroupMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "roomID_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    joinAt?: SortOrder
    roomID?: SortOrder
    roleId?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GroupMember"> | string
    userId?: UuidWithAggregatesFilter<"GroupMember"> | string
    joinAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
    roomID?: UuidWithAggregatesFilter<"GroupMember"> | string
    roleId?: UuidWithAggregatesFilter<"GroupMember"> | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: UuidFilter<"Role"> | string
    nameRole?: StringFilter<"Role"> | string
    userRoles?: GroupMemberListRelationFilter
    rolePermissions?: RolePermissonListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    nameRole?: SortOrder
    userRoles?: GroupMemberOrderByRelationAggregateInput
    rolePermissions?: RolePermissonOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nameRole?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    userRoles?: GroupMemberListRelationFilter
    rolePermissions?: RolePermissonListRelationFilter
  }, "id" | "nameRole">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    nameRole?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Role"> | string
    nameRole?: StringWithAggregatesFilter<"Role"> | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: UuidFilter<"Permission"> | string
    namePermission?: StringFilter<"Permission"> | string
    codePermisson?: IntFilter<"Permission"> | number
    rolePermissonId?: UuidNullableFilter<"Permission"> | string | null
    rolePermission?: XOR<RolePermissonNullableScalarRelationFilter, RolePermissonWhereInput> | null
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    namePermission?: SortOrder
    codePermisson?: SortOrder
    rolePermissonId?: SortOrderInput | SortOrder
    rolePermission?: RolePermissonOrderByWithRelationInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    namePermission?: StringFilter<"Permission"> | string
    codePermisson?: IntFilter<"Permission"> | number
    rolePermissonId?: UuidNullableFilter<"Permission"> | string | null
    rolePermission?: XOR<RolePermissonNullableScalarRelationFilter, RolePermissonWhereInput> | null
  }, "id">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    namePermission?: SortOrder
    codePermisson?: SortOrder
    rolePermissonId?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Permission"> | string
    namePermission?: StringWithAggregatesFilter<"Permission"> | string
    codePermisson?: IntWithAggregatesFilter<"Permission"> | number
    rolePermissonId?: UuidNullableWithAggregatesFilter<"Permission"> | string | null
  }

  export type RolePermissonWhereInput = {
    AND?: RolePermissonWhereInput | RolePermissonWhereInput[]
    OR?: RolePermissonWhereInput[]
    NOT?: RolePermissonWhereInput | RolePermissonWhereInput[]
    id?: UuidFilter<"RolePermisson"> | string
    roleId?: UuidFilter<"RolePermisson"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: PermissionListRelationFilter
  }

  export type RolePermissonOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionOrderByRelationAggregateInput
  }

  export type RolePermissonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RolePermissonWhereInput | RolePermissonWhereInput[]
    OR?: RolePermissonWhereInput[]
    NOT?: RolePermissonWhereInput | RolePermissonWhereInput[]
    roleId?: UuidFilter<"RolePermisson"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: PermissionListRelationFilter
  }, "id">

  export type RolePermissonOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    _count?: RolePermissonCountOrderByAggregateInput
    _max?: RolePermissonMaxOrderByAggregateInput
    _min?: RolePermissonMinOrderByAggregateInput
  }

  export type RolePermissonScalarWhereWithAggregatesInput = {
    AND?: RolePermissonScalarWhereWithAggregatesInput | RolePermissonScalarWhereWithAggregatesInput[]
    OR?: RolePermissonScalarWhereWithAggregatesInput[]
    NOT?: RolePermissonScalarWhereWithAggregatesInput | RolePermissonScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RolePermisson"> | string
    roleId?: UuidWithAggregatesFilter<"RolePermisson"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    email?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    idDelete?: BoolFilter<"User"> | boolean
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    deleteAt?: DateTimeNullableFilter<"User"> | Date | string | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    code?: XOR<CodeNullableScalarRelationFilter, CodeWhereInput> | null
    memberGroups?: GroupMemberListRelationFilter
    createdGroups?: RoomListRelationFilter
    messages?: MessageListRelationFilter
    readProgram?: ReadProgramListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    isActive?: SortOrder
    idDelete?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    session?: SessionOrderByWithRelationInput
    code?: CodeOrderByWithRelationInput
    memberGroups?: GroupMemberOrderByRelationAggregateInput
    createdGroups?: RoomOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    readProgram?: ReadProgramOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    hashedPassword?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    idDelete?: BoolFilter<"User"> | boolean
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    deleteAt?: DateTimeNullableFilter<"User"> | Date | string | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    code?: XOR<CodeNullableScalarRelationFilter, CodeWhereInput> | null
    memberGroups?: GroupMemberListRelationFilter
    createdGroups?: RoomListRelationFilter
    messages?: MessageListRelationFilter
    readProgram?: ReadProgramListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    isActive?: SortOrder
    idDelete?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    idDelete?: BoolWithAggregatesFilter<"User"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleteAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionCreateInput = {
    id?: string
    hasedRefreshToken?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    user?: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    hasedRefreshToken?: string | null
    userId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    hasedRefreshToken?: string | null
    userId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeCreateInput = {
    id?: string
    code?: string | null
    type: $Enums.CodeType
    createAt?: Date | string
    updateAt?: Date | string
    user?: UserCreateNestedOneWithoutCodeInput
  }

  export type CodeUncheckedCreateInput = {
    id?: string
    code?: string | null
    type: $Enums.CodeType
    userId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCodeNestedInput
  }

  export type CodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeCreateManyInput = {
    id?: string
    code?: string | null
    type: $Enums.CodeType
    userId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content: string
    staus?: $Enums.StatusMessage
    createAt?: Date | string
    updateAt?: Date | string
    roomId?: string | null
    addressId?: string | null
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    content: string
    staus?: $Enums.StatusMessage
    createAt?: Date | string
    updateAt?: Date | string
    roomId?: string | null
    addressId?: string | null
    userId: string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    staus?: EnumStatusMessageFieldUpdateOperationsInput | $Enums.StatusMessage
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    staus?: EnumStatusMessageFieldUpdateOperationsInput | $Enums.StatusMessage
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: number
    content: string
    staus?: $Enums.StatusMessage
    createAt?: Date | string
    updateAt?: Date | string
    roomId?: string | null
    addressId?: string | null
    userId: string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    staus?: EnumStatusMessageFieldUpdateOperationsInput | $Enums.StatusMessage
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    staus?: EnumStatusMessageFieldUpdateOperationsInput | $Enums.StatusMessage
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadProgramCreateInput = {
    id?: string
    lastestMessgaId?: number | null
    user: UserCreateNestedOneWithoutReadProgramInput
    room: RoomCreateNestedOneWithoutReadProgramsInput
  }

  export type ReadProgramUncheckedCreateInput = {
    id?: string
    lastestMessgaId?: number | null
    userId: string
    roomId: string
  }

  export type ReadProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutReadProgramNestedInput
    room?: RoomUpdateOneRequiredWithoutReadProgramsNestedInput
  }

  export type ReadProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadProgramCreateManyInput = {
    id?: string
    lastestMessgaId?: number | null
    userId: string
    roomId: string
  }

  export type ReadProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReadProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    author?: UserCreateNestedOneWithoutCreatedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutRoomInput
    readPrograms?: ReadProgramCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    authorId?: string | null
    members?: GroupMemberUncheckedCreateNestedManyWithoutRoomInput
    readPrograms?: ReadProgramUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutCreatedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutRoomNestedInput
    readPrograms?: ReadProgramUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: GroupMemberUncheckedUpdateManyWithoutRoomNestedInput
    readPrograms?: ReadProgramUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    authorId?: string | null
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupMemberCreateInput = {
    id?: string
    joinAt?: Date | string
    user: UserCreateNestedOneWithoutMemberGroupsInput
    room: RoomCreateNestedOneWithoutMembersInput
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    userId: string
    joinAt?: Date | string
    roomID: string
    roleId: string
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemberGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomID?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    userId: string
    joinAt?: Date | string
    roomID: string
    roleId: string
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomID?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateInput = {
    id?: string
    nameRole: string
    userRoles?: GroupMemberCreateNestedManyWithoutRoleInput
    rolePermissions?: RolePermissonCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    nameRole: string
    userRoles?: GroupMemberUncheckedCreateNestedManyWithoutRoleInput
    rolePermissions?: RolePermissonUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    userRoles?: GroupMemberUpdateManyWithoutRoleNestedInput
    rolePermissions?: RolePermissonUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    userRoles?: GroupMemberUncheckedUpdateManyWithoutRoleNestedInput
    rolePermissions?: RolePermissonUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    nameRole: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionCreateInput = {
    id?: string
    namePermission: string
    codePermisson: number
    rolePermission?: RolePermissonCreateNestedOneWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    namePermission: string
    codePermisson: number
    rolePermissonId?: string | null
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namePermission?: StringFieldUpdateOperationsInput | string
    codePermisson?: IntFieldUpdateOperationsInput | number
    rolePermission?: RolePermissonUpdateOneWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namePermission?: StringFieldUpdateOperationsInput | string
    codePermisson?: IntFieldUpdateOperationsInput | number
    rolePermissonId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionCreateManyInput = {
    id?: string
    namePermission: string
    codePermisson: number
    rolePermissonId?: string | null
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namePermission?: StringFieldUpdateOperationsInput | string
    codePermisson?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namePermission?: StringFieldUpdateOperationsInput | string
    codePermisson?: IntFieldUpdateOperationsInput | number
    rolePermissonId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissonCreateInput = {
    id?: string
    role: RoleCreateNestedOneWithoutRolePermissionsInput
    permission?: PermissionCreateNestedManyWithoutRolePermissionInput
  }

  export type RolePermissonUncheckedCreateInput = {
    id?: string
    roleId: string
    permission?: PermissionUncheckedCreateNestedManyWithoutRolePermissionInput
  }

  export type RolePermissonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
    permission?: PermissionUpdateManyWithoutRolePermissionNestedInput
  }

  export type RolePermissonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permission?: PermissionUncheckedUpdateManyWithoutRolePermissionNestedInput
  }

  export type RolePermissonCreateManyInput = {
    id?: string
    roleId: string
  }

  export type RolePermissonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionCreateNestedOneWithoutUserInput
    code?: CodeCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberCreateNestedManyWithoutUserInput
    createdGroups?: RoomCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
    code?: CodeUncheckedCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: RoomUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUpdateOneWithoutUserNestedInput
    code?: CodeUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
    code?: CodeUncheckedUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    hasedRefreshToken?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    hasedRefreshToken?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    hasedRefreshToken?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeFilter<$PrismaModel> | $Enums.CodeType
  }

  export type CodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EnumCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.CodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumCodeTypeFilter<$PrismaModel>
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

  export type EnumStatusMessageFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMessage | EnumStatusMessageFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMessage[] | ListEnumStatusMessageFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusMessage[] | ListEnumStatusMessageFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusMessageFilter<$PrismaModel> | $Enums.StatusMessage
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    staus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    roomId?: SortOrder
    addressId?: SortOrder
    userId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    staus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    roomId?: SortOrder
    addressId?: SortOrder
    userId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    staus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    roomId?: SortOrder
    addressId?: SortOrder
    userId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
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

  export type EnumStatusMessageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMessage | EnumStatusMessageFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMessage[] | ListEnumStatusMessageFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusMessage[] | ListEnumStatusMessageFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusMessageWithAggregatesFilter<$PrismaModel> | $Enums.StatusMessage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusMessageFilter<$PrismaModel>
    _max?: NestedEnumStatusMessageFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type ReadProgramUserIdRoomIdCompoundUniqueInput = {
    userId: string
    roomId: string
  }

  export type ReadProgramCountOrderByAggregateInput = {
    id?: SortOrder
    lastestMessgaId?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type ReadProgramAvgOrderByAggregateInput = {
    lastestMessgaId?: SortOrder
  }

  export type ReadProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    lastestMessgaId?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type ReadProgramMinOrderByAggregateInput = {
    id?: SortOrder
    lastestMessgaId?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type ReadProgramSumOrderByAggregateInput = {
    lastestMessgaId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type ReadProgramListRelationFilter = {
    every?: ReadProgramWhereInput
    some?: ReadProgramWhereInput
    none?: ReadProgramWhereInput
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReadProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkRoom?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    authorId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkRoom?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    authorId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    linkRoom?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    authorId?: SortOrder
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type GroupMemberRoomIDUserIdCompoundUniqueInput = {
    roomID: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    joinAt?: SortOrder
    roomID?: SortOrder
    roleId?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    joinAt?: SortOrder
    roomID?: SortOrder
    roleId?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    joinAt?: SortOrder
    roomID?: SortOrder
    roleId?: SortOrder
  }

  export type RolePermissonListRelationFilter = {
    every?: RolePermissonWhereInput
    some?: RolePermissonWhereInput
    none?: RolePermissonWhereInput
  }

  export type RolePermissonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    nameRole?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    nameRole?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    nameRole?: SortOrder
  }

  export type RolePermissonNullableScalarRelationFilter = {
    is?: RolePermissonWhereInput | null
    isNot?: RolePermissonWhereInput | null
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    namePermission?: SortOrder
    codePermisson?: SortOrder
    rolePermissonId?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    codePermisson?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    namePermission?: SortOrder
    codePermisson?: SortOrder
    rolePermissonId?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    namePermission?: SortOrder
    codePermisson?: SortOrder
    rolePermissonId?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    codePermisson?: SortOrder
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolePermissonCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type RolePermissonMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type RolePermissonMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type CodeNullableScalarRelationFilter = {
    is?: CodeWhereInput | null
    isNot?: CodeWhereInput | null
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    isActive?: SortOrder
    idDelete?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    isActive?: SortOrder
    idDelete?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    isActive?: SortOrder
    idDelete?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutCodeInput = {
    create?: XOR<UserCreateWithoutCodeInput, UserUncheckedCreateWithoutCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodeInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCodeTypeFieldUpdateOperationsInput = {
    set?: $Enums.CodeType
  }

  export type UserUpdateOneWithoutCodeNestedInput = {
    create?: XOR<UserCreateWithoutCodeInput, UserUncheckedCreateWithoutCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodeInput
    upsert?: UserUpsertWithoutCodeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCodeInput, UserUpdateWithoutCodeInput>, UserUncheckedUpdateWithoutCodeInput>
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusMessageFieldUpdateOperationsInput = {
    set?: $Enums.StatusMessage
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutReadProgramInput = {
    create?: XOR<UserCreateWithoutReadProgramInput, UserUncheckedCreateWithoutReadProgramInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadProgramInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutReadProgramsInput = {
    create?: XOR<RoomCreateWithoutReadProgramsInput, RoomUncheckedCreateWithoutReadProgramsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReadProgramsInput
    connect?: RoomWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReadProgramNestedInput = {
    create?: XOR<UserCreateWithoutReadProgramInput, UserUncheckedCreateWithoutReadProgramInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadProgramInput
    upsert?: UserUpsertWithoutReadProgramInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReadProgramInput, UserUpdateWithoutReadProgramInput>, UserUncheckedUpdateWithoutReadProgramInput>
  }

  export type RoomUpdateOneRequiredWithoutReadProgramsNestedInput = {
    create?: XOR<RoomCreateWithoutReadProgramsInput, RoomUncheckedCreateWithoutReadProgramsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReadProgramsInput
    upsert?: RoomUpsertWithoutReadProgramsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutReadProgramsInput, RoomUpdateWithoutReadProgramsInput>, RoomUncheckedUpdateWithoutReadProgramsInput>
  }

  export type UserCreateNestedOneWithoutCreatedGroupsInput = {
    create?: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutRoomInput = {
    create?: XOR<GroupMemberCreateWithoutRoomInput, GroupMemberUncheckedCreateWithoutRoomInput> | GroupMemberCreateWithoutRoomInput[] | GroupMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutRoomInput | GroupMemberCreateOrConnectWithoutRoomInput[]
    createMany?: GroupMemberCreateManyRoomInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ReadProgramCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReadProgramCreateWithoutRoomInput, ReadProgramUncheckedCreateWithoutRoomInput> | ReadProgramCreateWithoutRoomInput[] | ReadProgramUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReadProgramCreateOrConnectWithoutRoomInput | ReadProgramCreateOrConnectWithoutRoomInput[]
    createMany?: ReadProgramCreateManyRoomInputEnvelope
    connect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<GroupMemberCreateWithoutRoomInput, GroupMemberUncheckedCreateWithoutRoomInput> | GroupMemberCreateWithoutRoomInput[] | GroupMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutRoomInput | GroupMemberCreateOrConnectWithoutRoomInput[]
    createMany?: GroupMemberCreateManyRoomInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ReadProgramUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReadProgramCreateWithoutRoomInput, ReadProgramUncheckedCreateWithoutRoomInput> | ReadProgramCreateWithoutRoomInput[] | ReadProgramUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReadProgramCreateOrConnectWithoutRoomInput | ReadProgramCreateOrConnectWithoutRoomInput[]
    createMany?: ReadProgramCreateManyRoomInputEnvelope
    connect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCreatedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedGroupsInput
    upsert?: UserUpsertWithoutCreatedGroupsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedGroupsInput, UserUpdateWithoutCreatedGroupsInput>, UserUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type GroupMemberUpdateManyWithoutRoomNestedInput = {
    create?: XOR<GroupMemberCreateWithoutRoomInput, GroupMemberUncheckedCreateWithoutRoomInput> | GroupMemberCreateWithoutRoomInput[] | GroupMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutRoomInput | GroupMemberCreateOrConnectWithoutRoomInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutRoomInput | GroupMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: GroupMemberCreateManyRoomInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutRoomInput | GroupMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutRoomInput | GroupMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ReadProgramUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReadProgramCreateWithoutRoomInput, ReadProgramUncheckedCreateWithoutRoomInput> | ReadProgramCreateWithoutRoomInput[] | ReadProgramUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReadProgramCreateOrConnectWithoutRoomInput | ReadProgramCreateOrConnectWithoutRoomInput[]
    upsert?: ReadProgramUpsertWithWhereUniqueWithoutRoomInput | ReadProgramUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReadProgramCreateManyRoomInputEnvelope
    set?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    disconnect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    delete?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    connect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    update?: ReadProgramUpdateWithWhereUniqueWithoutRoomInput | ReadProgramUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReadProgramUpdateManyWithWhereWithoutRoomInput | ReadProgramUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReadProgramScalarWhereInput | ReadProgramScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<GroupMemberCreateWithoutRoomInput, GroupMemberUncheckedCreateWithoutRoomInput> | GroupMemberCreateWithoutRoomInput[] | GroupMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutRoomInput | GroupMemberCreateOrConnectWithoutRoomInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutRoomInput | GroupMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: GroupMemberCreateManyRoomInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutRoomInput | GroupMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutRoomInput | GroupMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ReadProgramUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReadProgramCreateWithoutRoomInput, ReadProgramUncheckedCreateWithoutRoomInput> | ReadProgramCreateWithoutRoomInput[] | ReadProgramUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReadProgramCreateOrConnectWithoutRoomInput | ReadProgramCreateOrConnectWithoutRoomInput[]
    upsert?: ReadProgramUpsertWithWhereUniqueWithoutRoomInput | ReadProgramUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReadProgramCreateManyRoomInputEnvelope
    set?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    disconnect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    delete?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    connect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    update?: ReadProgramUpdateWithWhereUniqueWithoutRoomInput | ReadProgramUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReadProgramUpdateManyWithWhereWithoutRoomInput | ReadProgramUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReadProgramScalarWhereInput | ReadProgramScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMemberGroupsInput = {
    create?: XOR<UserCreateWithoutMemberGroupsInput, UserUncheckedCreateWithoutMemberGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutMembersInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    connect?: RoomWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMemberGroupsNestedInput = {
    create?: XOR<UserCreateWithoutMemberGroupsInput, UserUncheckedCreateWithoutMemberGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberGroupsInput
    upsert?: UserUpsertWithoutMemberGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemberGroupsInput, UserUpdateWithoutMemberGroupsInput>, UserUncheckedUpdateWithoutMemberGroupsInput>
  }

  export type RoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    upsert?: RoomUpsertWithoutMembersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMembersInput, RoomUpdateWithoutMembersInput>, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type RoleUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    upsert?: RoleUpsertWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserRolesInput, RoleUpdateWithoutUserRolesInput>, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type GroupMemberCreateNestedManyWithoutRoleInput = {
    create?: XOR<GroupMemberCreateWithoutRoleInput, GroupMemberUncheckedCreateWithoutRoleInput> | GroupMemberCreateWithoutRoleInput[] | GroupMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutRoleInput | GroupMemberCreateOrConnectWithoutRoleInput[]
    createMany?: GroupMemberCreateManyRoleInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type RolePermissonCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissonCreateWithoutRoleInput, RolePermissonUncheckedCreateWithoutRoleInput> | RolePermissonCreateWithoutRoleInput[] | RolePermissonUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissonCreateOrConnectWithoutRoleInput | RolePermissonCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissonCreateManyRoleInputEnvelope
    connect?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<GroupMemberCreateWithoutRoleInput, GroupMemberUncheckedCreateWithoutRoleInput> | GroupMemberCreateWithoutRoleInput[] | GroupMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutRoleInput | GroupMemberCreateOrConnectWithoutRoleInput[]
    createMany?: GroupMemberCreateManyRoleInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type RolePermissonUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissonCreateWithoutRoleInput, RolePermissonUncheckedCreateWithoutRoleInput> | RolePermissonCreateWithoutRoleInput[] | RolePermissonUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissonCreateOrConnectWithoutRoleInput | RolePermissonCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissonCreateManyRoleInputEnvelope
    connect?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
  }

  export type GroupMemberUpdateManyWithoutRoleNestedInput = {
    create?: XOR<GroupMemberCreateWithoutRoleInput, GroupMemberUncheckedCreateWithoutRoleInput> | GroupMemberCreateWithoutRoleInput[] | GroupMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutRoleInput | GroupMemberCreateOrConnectWithoutRoleInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutRoleInput | GroupMemberUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: GroupMemberCreateManyRoleInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutRoleInput | GroupMemberUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutRoleInput | GroupMemberUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type RolePermissonUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissonCreateWithoutRoleInput, RolePermissonUncheckedCreateWithoutRoleInput> | RolePermissonCreateWithoutRoleInput[] | RolePermissonUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissonCreateOrConnectWithoutRoleInput | RolePermissonCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissonUpsertWithWhereUniqueWithoutRoleInput | RolePermissonUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissonCreateManyRoleInputEnvelope
    set?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
    disconnect?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
    delete?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
    connect?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
    update?: RolePermissonUpdateWithWhereUniqueWithoutRoleInput | RolePermissonUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissonUpdateManyWithWhereWithoutRoleInput | RolePermissonUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissonScalarWhereInput | RolePermissonScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<GroupMemberCreateWithoutRoleInput, GroupMemberUncheckedCreateWithoutRoleInput> | GroupMemberCreateWithoutRoleInput[] | GroupMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutRoleInput | GroupMemberCreateOrConnectWithoutRoleInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutRoleInput | GroupMemberUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: GroupMemberCreateManyRoleInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutRoleInput | GroupMemberUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutRoleInput | GroupMemberUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type RolePermissonUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissonCreateWithoutRoleInput, RolePermissonUncheckedCreateWithoutRoleInput> | RolePermissonCreateWithoutRoleInput[] | RolePermissonUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissonCreateOrConnectWithoutRoleInput | RolePermissonCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissonUpsertWithWhereUniqueWithoutRoleInput | RolePermissonUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissonCreateManyRoleInputEnvelope
    set?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
    disconnect?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
    delete?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
    connect?: RolePermissonWhereUniqueInput | RolePermissonWhereUniqueInput[]
    update?: RolePermissonUpdateWithWhereUniqueWithoutRoleInput | RolePermissonUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissonUpdateManyWithWhereWithoutRoleInput | RolePermissonUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissonScalarWhereInput | RolePermissonScalarWhereInput[]
  }

  export type RolePermissonCreateNestedOneWithoutPermissionInput = {
    create?: XOR<RolePermissonCreateWithoutPermissionInput, RolePermissonUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: RolePermissonCreateOrConnectWithoutPermissionInput
    connect?: RolePermissonWhereUniqueInput
  }

  export type RolePermissonUpdateOneWithoutPermissionNestedInput = {
    create?: XOR<RolePermissonCreateWithoutPermissionInput, RolePermissonUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: RolePermissonCreateOrConnectWithoutPermissionInput
    upsert?: RolePermissonUpsertWithoutPermissionInput
    disconnect?: RolePermissonWhereInput | boolean
    delete?: RolePermissonWhereInput | boolean
    connect?: RolePermissonWhereUniqueInput
    update?: XOR<XOR<RolePermissonUpdateToOneWithWhereWithoutPermissionInput, RolePermissonUpdateWithoutPermissionInput>, RolePermissonUncheckedUpdateWithoutPermissionInput>
  }

  export type RoleCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedManyWithoutRolePermissionInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput> | PermissionCreateWithoutRolePermissionInput[] | PermissionUncheckedCreateWithoutRolePermissionInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionInput | PermissionCreateOrConnectWithoutRolePermissionInput[]
    createMany?: PermissionCreateManyRolePermissionInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutRolePermissionInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput> | PermissionCreateWithoutRolePermissionInput[] | PermissionUncheckedCreateWithoutRolePermissionInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionInput | PermissionCreateOrConnectWithoutRolePermissionInput[]
    createMany?: PermissionCreateManyRolePermissionInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    upsert?: RoleUpsertWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePermissionsInput, RoleUpdateWithoutRolePermissionsInput>, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type PermissionUpdateManyWithoutRolePermissionNestedInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput> | PermissionCreateWithoutRolePermissionInput[] | PermissionUncheckedCreateWithoutRolePermissionInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionInput | PermissionCreateOrConnectWithoutRolePermissionInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolePermissionInput | PermissionUpsertWithWhereUniqueWithoutRolePermissionInput[]
    createMany?: PermissionCreateManyRolePermissionInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolePermissionInput | PermissionUpdateWithWhereUniqueWithoutRolePermissionInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolePermissionInput | PermissionUpdateManyWithWhereWithoutRolePermissionInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutRolePermissionNestedInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput> | PermissionCreateWithoutRolePermissionInput[] | PermissionUncheckedCreateWithoutRolePermissionInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionInput | PermissionCreateOrConnectWithoutRolePermissionInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolePermissionInput | PermissionUpsertWithWhereUniqueWithoutRolePermissionInput[]
    createMany?: PermissionCreateManyRolePermissionInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolePermissionInput | PermissionUpdateWithWhereUniqueWithoutRolePermissionInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolePermissionInput | PermissionUpdateManyWithWhereWithoutRolePermissionInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    connect?: SessionWhereUniqueInput
  }

  export type CodeCreateNestedOneWithoutUserInput = {
    create?: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: CodeCreateOrConnectWithoutUserInput
    connect?: CodeWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RoomCreateWithoutAuthorInput, RoomUncheckedCreateWithoutAuthorInput> | RoomCreateWithoutAuthorInput[] | RoomUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAuthorInput | RoomCreateOrConnectWithoutAuthorInput[]
    createMany?: RoomCreateManyAuthorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReadProgramCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadProgramCreateWithoutUserInput, ReadProgramUncheckedCreateWithoutUserInput> | ReadProgramCreateWithoutUserInput[] | ReadProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadProgramCreateOrConnectWithoutUserInput | ReadProgramCreateOrConnectWithoutUserInput[]
    createMany?: ReadProgramCreateManyUserInputEnvelope
    connect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    connect?: SessionWhereUniqueInput
  }

  export type CodeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: CodeCreateOrConnectWithoutUserInput
    connect?: CodeWhereUniqueInput
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RoomCreateWithoutAuthorInput, RoomUncheckedCreateWithoutAuthorInput> | RoomCreateWithoutAuthorInput[] | RoomUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAuthorInput | RoomCreateOrConnectWithoutAuthorInput[]
    createMany?: RoomCreateManyAuthorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ReadProgramUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadProgramCreateWithoutUserInput, ReadProgramUncheckedCreateWithoutUserInput> | ReadProgramCreateWithoutUserInput[] | ReadProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadProgramCreateOrConnectWithoutUserInput | ReadProgramCreateOrConnectWithoutUserInput[]
    createMany?: ReadProgramCreateManyUserInputEnvelope
    connect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SessionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    upsert?: SessionUpsertWithoutUserInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutUserInput, SessionUpdateWithoutUserInput>, SessionUncheckedUpdateWithoutUserInput>
  }

  export type CodeUpdateOneWithoutUserNestedInput = {
    create?: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: CodeCreateOrConnectWithoutUserInput
    upsert?: CodeUpsertWithoutUserInput
    disconnect?: CodeWhereInput | boolean
    delete?: CodeWhereInput | boolean
    connect?: CodeWhereUniqueInput
    update?: XOR<XOR<CodeUpdateToOneWithWhereWithoutUserInput, CodeUpdateWithoutUserInput>, CodeUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RoomCreateWithoutAuthorInput, RoomUncheckedCreateWithoutAuthorInput> | RoomCreateWithoutAuthorInput[] | RoomUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAuthorInput | RoomCreateOrConnectWithoutAuthorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutAuthorInput | RoomUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RoomCreateManyAuthorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutAuthorInput | RoomUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutAuthorInput | RoomUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReadProgramUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadProgramCreateWithoutUserInput, ReadProgramUncheckedCreateWithoutUserInput> | ReadProgramCreateWithoutUserInput[] | ReadProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadProgramCreateOrConnectWithoutUserInput | ReadProgramCreateOrConnectWithoutUserInput[]
    upsert?: ReadProgramUpsertWithWhereUniqueWithoutUserInput | ReadProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadProgramCreateManyUserInputEnvelope
    set?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    disconnect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    delete?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    connect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    update?: ReadProgramUpdateWithWhereUniqueWithoutUserInput | ReadProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadProgramUpdateManyWithWhereWithoutUserInput | ReadProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadProgramScalarWhereInput | ReadProgramScalarWhereInput[]
  }

  export type SessionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    upsert?: SessionUpsertWithoutUserInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutUserInput, SessionUpdateWithoutUserInput>, SessionUncheckedUpdateWithoutUserInput>
  }

  export type CodeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: CodeCreateOrConnectWithoutUserInput
    upsert?: CodeUpsertWithoutUserInput
    disconnect?: CodeWhereInput | boolean
    delete?: CodeWhereInput | boolean
    connect?: CodeWhereUniqueInput
    update?: XOR<XOR<CodeUpdateToOneWithWhereWithoutUserInput, CodeUpdateWithoutUserInput>, CodeUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RoomCreateWithoutAuthorInput, RoomUncheckedCreateWithoutAuthorInput> | RoomCreateWithoutAuthorInput[] | RoomUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAuthorInput | RoomCreateOrConnectWithoutAuthorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutAuthorInput | RoomUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RoomCreateManyAuthorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutAuthorInput | RoomUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutAuthorInput | RoomUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ReadProgramUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadProgramCreateWithoutUserInput, ReadProgramUncheckedCreateWithoutUserInput> | ReadProgramCreateWithoutUserInput[] | ReadProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadProgramCreateOrConnectWithoutUserInput | ReadProgramCreateOrConnectWithoutUserInput[]
    upsert?: ReadProgramUpsertWithWhereUniqueWithoutUserInput | ReadProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadProgramCreateManyUserInputEnvelope
    set?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    disconnect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    delete?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    connect?: ReadProgramWhereUniqueInput | ReadProgramWhereUniqueInput[]
    update?: ReadProgramUpdateWithWhereUniqueWithoutUserInput | ReadProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadProgramUpdateManyWithWhereWithoutUserInput | ReadProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadProgramScalarWhereInput | ReadProgramScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeFilter<$PrismaModel> | $Enums.CodeType
  }

  export type NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.CodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumCodeTypeFilter<$PrismaModel>
  }

  export type NestedEnumStatusMessageFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMessage | EnumStatusMessageFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMessage[] | ListEnumStatusMessageFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusMessage[] | ListEnumStatusMessageFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusMessageFilter<$PrismaModel> | $Enums.StatusMessage
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

  export type NestedEnumStatusMessageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMessage | EnumStatusMessageFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMessage[] | ListEnumStatusMessageFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusMessage[] | ListEnumStatusMessageFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusMessageWithAggregatesFilter<$PrismaModel> | $Enums.StatusMessage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusMessageFilter<$PrismaModel>
    _max?: NestedEnumStatusMessageFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    code?: CodeCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberCreateNestedManyWithoutUserInput
    createdGroups?: RoomCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    code?: CodeUncheckedCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: RoomUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: CodeUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    code?: CodeUncheckedUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCodeInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberCreateNestedManyWithoutUserInput
    createdGroups?: RoomCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCodeInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: RoomUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCodeInput, UserUncheckedCreateWithoutCodeInput>
  }

  export type UserUpsertWithoutCodeInput = {
    update: XOR<UserUpdateWithoutCodeInput, UserUncheckedUpdateWithoutCodeInput>
    create: XOR<UserCreateWithoutCodeInput, UserUncheckedCreateWithoutCodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCodeInput, UserUncheckedUpdateWithoutCodeInput>
  }

  export type UserUpdateWithoutCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionCreateNestedOneWithoutUserInput
    code?: CodeCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberCreateNestedManyWithoutUserInput
    createdGroups?: RoomCreateNestedManyWithoutAuthorInput
    readProgram?: ReadProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
    code?: CodeUncheckedCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: RoomUncheckedCreateNestedManyWithoutAuthorInput
    readProgram?: ReadProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUpdateOneWithoutUserNestedInput
    code?: CodeUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUpdateManyWithoutAuthorNestedInput
    readProgram?: ReadProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
    code?: CodeUncheckedUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUncheckedUpdateManyWithoutAuthorNestedInput
    readProgram?: ReadProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReadProgramInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionCreateNestedOneWithoutUserInput
    code?: CodeCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberCreateNestedManyWithoutUserInput
    createdGroups?: RoomCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReadProgramInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
    code?: CodeUncheckedCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: RoomUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReadProgramInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReadProgramInput, UserUncheckedCreateWithoutReadProgramInput>
  }

  export type RoomCreateWithoutReadProgramsInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    author?: UserCreateNestedOneWithoutCreatedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutReadProgramsInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    authorId?: string | null
    members?: GroupMemberUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutReadProgramsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutReadProgramsInput, RoomUncheckedCreateWithoutReadProgramsInput>
  }

  export type UserUpsertWithoutReadProgramInput = {
    update: XOR<UserUpdateWithoutReadProgramInput, UserUncheckedUpdateWithoutReadProgramInput>
    create: XOR<UserCreateWithoutReadProgramInput, UserUncheckedCreateWithoutReadProgramInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReadProgramInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReadProgramInput, UserUncheckedUpdateWithoutReadProgramInput>
  }

  export type UserUpdateWithoutReadProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUpdateOneWithoutUserNestedInput
    code?: CodeUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReadProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
    code?: CodeUncheckedUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: RoomUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutReadProgramsInput = {
    update: XOR<RoomUpdateWithoutReadProgramsInput, RoomUncheckedUpdateWithoutReadProgramsInput>
    create: XOR<RoomCreateWithoutReadProgramsInput, RoomUncheckedCreateWithoutReadProgramsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutReadProgramsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutReadProgramsInput, RoomUncheckedUpdateWithoutReadProgramsInput>
  }

  export type RoomUpdateWithoutReadProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutCreatedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutReadProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: GroupMemberUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutCreatedGroupsInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionCreateNestedOneWithoutUserInput
    code?: CodeCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedGroupsInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
    code?: CodeUncheckedCreateNestedOneWithoutUserInput
    memberGroups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
  }

  export type GroupMemberCreateWithoutRoomInput = {
    id?: string
    joinAt?: Date | string
    user: UserCreateNestedOneWithoutMemberGroupsInput
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type GroupMemberUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    joinAt?: Date | string
    roleId: string
  }

  export type GroupMemberCreateOrConnectWithoutRoomInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutRoomInput, GroupMemberUncheckedCreateWithoutRoomInput>
  }

  export type GroupMemberCreateManyRoomInputEnvelope = {
    data: GroupMemberCreateManyRoomInput | GroupMemberCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ReadProgramCreateWithoutRoomInput = {
    id?: string
    lastestMessgaId?: number | null
    user: UserCreateNestedOneWithoutReadProgramInput
  }

  export type ReadProgramUncheckedCreateWithoutRoomInput = {
    id?: string
    lastestMessgaId?: number | null
    userId: string
  }

  export type ReadProgramCreateOrConnectWithoutRoomInput = {
    where: ReadProgramWhereUniqueInput
    create: XOR<ReadProgramCreateWithoutRoomInput, ReadProgramUncheckedCreateWithoutRoomInput>
  }

  export type ReadProgramCreateManyRoomInputEnvelope = {
    data: ReadProgramCreateManyRoomInput | ReadProgramCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedGroupsInput = {
    update: XOR<UserUpdateWithoutCreatedGroupsInput, UserUncheckedUpdateWithoutCreatedGroupsInput>
    create: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedGroupsInput, UserUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type UserUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUpdateOneWithoutUserNestedInput
    code?: CodeUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
    code?: CodeUncheckedUpdateOneWithoutUserNestedInput
    memberGroups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutRoomInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutRoomInput, GroupMemberUncheckedUpdateWithoutRoomInput>
    create: XOR<GroupMemberCreateWithoutRoomInput, GroupMemberUncheckedCreateWithoutRoomInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutRoomInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutRoomInput, GroupMemberUncheckedUpdateWithoutRoomInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutRoomInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutRoomInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: UuidFilter<"GroupMember"> | string
    userId?: UuidFilter<"GroupMember"> | string
    joinAt?: DateTimeFilter<"GroupMember"> | Date | string
    roomID?: UuidFilter<"GroupMember"> | string
    roleId?: UuidFilter<"GroupMember"> | string
  }

  export type ReadProgramUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReadProgramWhereUniqueInput
    update: XOR<ReadProgramUpdateWithoutRoomInput, ReadProgramUncheckedUpdateWithoutRoomInput>
    create: XOR<ReadProgramCreateWithoutRoomInput, ReadProgramUncheckedCreateWithoutRoomInput>
  }

  export type ReadProgramUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReadProgramWhereUniqueInput
    data: XOR<ReadProgramUpdateWithoutRoomInput, ReadProgramUncheckedUpdateWithoutRoomInput>
  }

  export type ReadProgramUpdateManyWithWhereWithoutRoomInput = {
    where: ReadProgramScalarWhereInput
    data: XOR<ReadProgramUpdateManyMutationInput, ReadProgramUncheckedUpdateManyWithoutRoomInput>
  }

  export type ReadProgramScalarWhereInput = {
    AND?: ReadProgramScalarWhereInput | ReadProgramScalarWhereInput[]
    OR?: ReadProgramScalarWhereInput[]
    NOT?: ReadProgramScalarWhereInput | ReadProgramScalarWhereInput[]
    id?: UuidFilter<"ReadProgram"> | string
    lastestMessgaId?: IntNullableFilter<"ReadProgram"> | number | null
    userId?: UuidFilter<"ReadProgram"> | string
    roomId?: UuidFilter<"ReadProgram"> | string
  }

  export type UserCreateWithoutMemberGroupsInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionCreateNestedOneWithoutUserInput
    code?: CodeCreateNestedOneWithoutUserInput
    createdGroups?: RoomCreateNestedManyWithoutAuthorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemberGroupsInput = {
    id?: string
    name?: string | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    email: string
    hashedPassword: string
    isActive?: boolean
    idDelete?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
    code?: CodeUncheckedCreateNestedOneWithoutUserInput
    createdGroups?: RoomUncheckedCreateNestedManyWithoutAuthorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    readProgram?: ReadProgramUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemberGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemberGroupsInput, UserUncheckedCreateWithoutMemberGroupsInput>
  }

  export type RoomCreateWithoutMembersInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    author?: UserCreateNestedOneWithoutCreatedGroupsInput
    readPrograms?: ReadProgramCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    authorId?: string | null
    readPrograms?: ReadProgramUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMembersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
  }

  export type RoleCreateWithoutUserRolesInput = {
    id?: string
    nameRole: string
    rolePermissions?: RolePermissonCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUserRolesInput = {
    id?: string
    nameRole: string
    rolePermissions?: RolePermissonUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUserRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
  }

  export type UserUpsertWithoutMemberGroupsInput = {
    update: XOR<UserUpdateWithoutMemberGroupsInput, UserUncheckedUpdateWithoutMemberGroupsInput>
    create: XOR<UserCreateWithoutMemberGroupsInput, UserUncheckedCreateWithoutMemberGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemberGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemberGroupsInput, UserUncheckedUpdateWithoutMemberGroupsInput>
  }

  export type UserUpdateWithoutMemberGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUpdateOneWithoutUserNestedInput
    code?: CodeUpdateOneWithoutUserNestedInput
    createdGroups?: RoomUpdateManyWithoutAuthorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemberGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    idDelete?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
    code?: CodeUncheckedUpdateOneWithoutUserNestedInput
    createdGroups?: RoomUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    readProgram?: ReadProgramUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutMembersInput = {
    update: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type RoomUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutCreatedGroupsNestedInput
    readPrograms?: ReadProgramUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    readPrograms?: ReadProgramUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoleUpsertWithoutUserRolesInput = {
    update: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    rolePermissions?: RolePermissonUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    rolePermissions?: RolePermissonUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type GroupMemberCreateWithoutRoleInput = {
    id?: string
    joinAt?: Date | string
    user: UserCreateNestedOneWithoutMemberGroupsInput
    room: RoomCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutRoleInput = {
    id?: string
    userId: string
    joinAt?: Date | string
    roomID: string
  }

  export type GroupMemberCreateOrConnectWithoutRoleInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutRoleInput, GroupMemberUncheckedCreateWithoutRoleInput>
  }

  export type GroupMemberCreateManyRoleInputEnvelope = {
    data: GroupMemberCreateManyRoleInput | GroupMemberCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissonCreateWithoutRoleInput = {
    id?: string
    permission?: PermissionCreateNestedManyWithoutRolePermissionInput
  }

  export type RolePermissonUncheckedCreateWithoutRoleInput = {
    id?: string
    permission?: PermissionUncheckedCreateNestedManyWithoutRolePermissionInput
  }

  export type RolePermissonCreateOrConnectWithoutRoleInput = {
    where: RolePermissonWhereUniqueInput
    create: XOR<RolePermissonCreateWithoutRoleInput, RolePermissonUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissonCreateManyRoleInputEnvelope = {
    data: RolePermissonCreateManyRoleInput | RolePermissonCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutRoleInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutRoleInput, GroupMemberUncheckedUpdateWithoutRoleInput>
    create: XOR<GroupMemberCreateWithoutRoleInput, GroupMemberUncheckedCreateWithoutRoleInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutRoleInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutRoleInput, GroupMemberUncheckedUpdateWithoutRoleInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutRoleInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissonUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissonWhereUniqueInput
    update: XOR<RolePermissonUpdateWithoutRoleInput, RolePermissonUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissonCreateWithoutRoleInput, RolePermissonUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissonUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissonWhereUniqueInput
    data: XOR<RolePermissonUpdateWithoutRoleInput, RolePermissonUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissonUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissonScalarWhereInput
    data: XOR<RolePermissonUpdateManyMutationInput, RolePermissonUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissonScalarWhereInput = {
    AND?: RolePermissonScalarWhereInput | RolePermissonScalarWhereInput[]
    OR?: RolePermissonScalarWhereInput[]
    NOT?: RolePermissonScalarWhereInput | RolePermissonScalarWhereInput[]
    id?: UuidFilter<"RolePermisson"> | string
    roleId?: UuidFilter<"RolePermisson"> | string
  }

  export type RolePermissonCreateWithoutPermissionInput = {
    id?: string
    role: RoleCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissonUncheckedCreateWithoutPermissionInput = {
    id?: string
    roleId: string
  }

  export type RolePermissonCreateOrConnectWithoutPermissionInput = {
    where: RolePermissonWhereUniqueInput
    create: XOR<RolePermissonCreateWithoutPermissionInput, RolePermissonUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissonUpsertWithoutPermissionInput = {
    update: XOR<RolePermissonUpdateWithoutPermissionInput, RolePermissonUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissonCreateWithoutPermissionInput, RolePermissonUncheckedCreateWithoutPermissionInput>
    where?: RolePermissonWhereInput
  }

  export type RolePermissonUpdateToOneWithWhereWithoutPermissionInput = {
    where?: RolePermissonWhereInput
    data: XOR<RolePermissonUpdateWithoutPermissionInput, RolePermissonUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissonUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissonUncheckedUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateWithoutRolePermissionsInput = {
    id?: string
    nameRole: string
    userRoles?: GroupMemberCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionsInput = {
    id?: string
    nameRole: string
    userRoles?: GroupMemberUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
  }

  export type PermissionCreateWithoutRolePermissionInput = {
    id?: string
    namePermission: string
    codePermisson: number
  }

  export type PermissionUncheckedCreateWithoutRolePermissionInput = {
    id?: string
    namePermission: string
    codePermisson: number
  }

  export type PermissionCreateOrConnectWithoutRolePermissionInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
  }

  export type PermissionCreateManyRolePermissionInputEnvelope = {
    data: PermissionCreateManyRolePermissionInput | PermissionCreateManyRolePermissionInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutRolePermissionsInput = {
    update: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type RoleUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    userRoles?: GroupMemberUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    userRoles?: GroupMemberUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionUpsertWithWhereUniqueWithoutRolePermissionInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRolePermissionInput, PermissionUncheckedUpdateWithoutRolePermissionInput>
    create: XOR<PermissionCreateWithoutRolePermissionInput, PermissionUncheckedCreateWithoutRolePermissionInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRolePermissionInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRolePermissionInput, PermissionUncheckedUpdateWithoutRolePermissionInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRolePermissionInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutRolePermissionInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: UuidFilter<"Permission"> | string
    namePermission?: StringFilter<"Permission"> | string
    codePermisson?: IntFilter<"Permission"> | number
    rolePermissonId?: UuidNullableFilter<"Permission"> | string | null
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    hasedRefreshToken?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    hasedRefreshToken?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type CodeCreateWithoutUserInput = {
    id?: string
    code?: string | null
    type: $Enums.CodeType
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CodeUncheckedCreateWithoutUserInput = {
    id?: string
    code?: string | null
    type: $Enums.CodeType
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CodeCreateOrConnectWithoutUserInput = {
    where: CodeWhereUniqueInput
    create: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    joinAt?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    joinAt?: Date | string
    roomID: string
    roleId: string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutAuthorInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutRoomInput
    readPrograms?: ReadProgramCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAuthorInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutRoomInput
    readPrograms?: ReadProgramUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAuthorInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAuthorInput, RoomUncheckedCreateWithoutAuthorInput>
  }

  export type RoomCreateManyAuthorInputEnvelope = {
    data: RoomCreateManyAuthorInput | RoomCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    content: string
    staus?: $Enums.StatusMessage
    createAt?: Date | string
    updateAt?: Date | string
    roomId?: string | null
    addressId?: string | null
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    staus?: $Enums.StatusMessage
    createAt?: Date | string
    updateAt?: Date | string
    roomId?: string | null
    addressId?: string | null
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReadProgramCreateWithoutUserInput = {
    id?: string
    lastestMessgaId?: number | null
    room: RoomCreateNestedOneWithoutReadProgramsInput
  }

  export type ReadProgramUncheckedCreateWithoutUserInput = {
    id?: string
    lastestMessgaId?: number | null
    roomId: string
  }

  export type ReadProgramCreateOrConnectWithoutUserInput = {
    where: ReadProgramWhereUniqueInput
    create: XOR<ReadProgramCreateWithoutUserInput, ReadProgramUncheckedCreateWithoutUserInput>
  }

  export type ReadProgramCreateManyUserInputEnvelope = {
    data: ReadProgramCreateManyUserInput | ReadProgramCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithoutUserInput = {
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutUserInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeUpsertWithoutUserInput = {
    update: XOR<CodeUpdateWithoutUserInput, CodeUncheckedUpdateWithoutUserInput>
    create: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput>
    where?: CodeWhereInput
  }

  export type CodeUpdateToOneWithWhereWithoutUserInput = {
    where?: CodeWhereInput
    data: XOR<CodeUpdateWithoutUserInput, CodeUncheckedUpdateWithoutUserInput>
  }

  export type CodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutAuthorInput, RoomUncheckedUpdateWithoutAuthorInput>
    create: XOR<RoomCreateWithoutAuthorInput, RoomUncheckedCreateWithoutAuthorInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutAuthorInput, RoomUncheckedUpdateWithoutAuthorInput>
  }

  export type RoomUpdateManyWithWhereWithoutAuthorInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: UuidFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    linkRoom?: StringNullableFilter<"Room"> | string | null
    createAt?: DateTimeFilter<"Room"> | Date | string
    updateAt?: DateTimeFilter<"Room"> | Date | string
    authorId?: UuidNullableFilter<"Room"> | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    staus?: EnumStatusMessageFilter<"Message"> | $Enums.StatusMessage
    createAt?: DateTimeFilter<"Message"> | Date | string
    updateAt?: DateTimeFilter<"Message"> | Date | string
    roomId?: StringNullableFilter<"Message"> | string | null
    addressId?: StringNullableFilter<"Message"> | string | null
    userId?: UuidFilter<"Message"> | string
  }

  export type ReadProgramUpsertWithWhereUniqueWithoutUserInput = {
    where: ReadProgramWhereUniqueInput
    update: XOR<ReadProgramUpdateWithoutUserInput, ReadProgramUncheckedUpdateWithoutUserInput>
    create: XOR<ReadProgramCreateWithoutUserInput, ReadProgramUncheckedCreateWithoutUserInput>
  }

  export type ReadProgramUpdateWithWhereUniqueWithoutUserInput = {
    where: ReadProgramWhereUniqueInput
    data: XOR<ReadProgramUpdateWithoutUserInput, ReadProgramUncheckedUpdateWithoutUserInput>
  }

  export type ReadProgramUpdateManyWithWhereWithoutUserInput = {
    where: ReadProgramScalarWhereInput
    data: XOR<ReadProgramUpdateManyMutationInput, ReadProgramUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberCreateManyRoomInput = {
    id?: string
    userId: string
    joinAt?: Date | string
    roleId: string
  }

  export type ReadProgramCreateManyRoomInput = {
    id?: string
    lastestMessgaId?: number | null
    userId: string
  }

  export type GroupMemberUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemberGroupsNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadProgramUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutReadProgramNestedInput
  }

  export type ReadProgramUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadProgramUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateManyRoleInput = {
    id?: string
    userId: string
    joinAt?: Date | string
    roomID: string
  }

  export type RolePermissonCreateManyRoleInput = {
    id?: string
  }

  export type GroupMemberUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemberGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomID?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomID?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissonUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: PermissionUpdateManyWithoutRolePermissionNestedInput
  }

  export type RolePermissonUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: PermissionUncheckedUpdateManyWithoutRolePermissionNestedInput
  }

  export type RolePermissonUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionCreateManyRolePermissionInput = {
    id?: string
    namePermission: string
    codePermisson: number
  }

  export type PermissionUpdateWithoutRolePermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    namePermission?: StringFieldUpdateOperationsInput | string
    codePermisson?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionUncheckedUpdateWithoutRolePermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    namePermission?: StringFieldUpdateOperationsInput | string
    codePermisson?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionUncheckedUpdateManyWithoutRolePermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    namePermission?: StringFieldUpdateOperationsInput | string
    codePermisson?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    joinAt?: Date | string
    roomID: string
    roleId: string
  }

  export type RoomCreateManyAuthorInput = {
    id?: string
    name: string
    linkRoom?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MessageCreateManyUserInput = {
    id?: number
    content: string
    staus?: $Enums.StatusMessage
    createAt?: Date | string
    updateAt?: Date | string
    roomId?: string | null
    addressId?: string | null
  }

  export type ReadProgramCreateManyUserInput = {
    id?: string
    lastestMessgaId?: number | null
    roomId: string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomID?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomID?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutRoomNestedInput
    readPrograms?: ReadProgramUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutRoomNestedInput
    readPrograms?: ReadProgramUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    linkRoom?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    staus?: EnumStatusMessageFieldUpdateOperationsInput | $Enums.StatusMessage
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    staus?: EnumStatusMessageFieldUpdateOperationsInput | $Enums.StatusMessage
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    staus?: EnumStatusMessageFieldUpdateOperationsInput | $Enums.StatusMessage
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReadProgramUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    room?: RoomUpdateOneRequiredWithoutReadProgramsNestedInput
  }

  export type ReadProgramUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadProgramUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastestMessgaId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: StringFieldUpdateOperationsInput | string
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