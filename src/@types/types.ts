import {
  FastifyRequest,
  FastifyReply,
  RouteGenericInterface,
  RawServerDefault,
  FastifySchema,
  FastifyTypeProviderDefault,
  FastifyBaseLogger,
} from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

// export interface MyReqUser extends FastifyRequest<any> {
//   user: any; // or any other type
// }

export type ReqDefault = FastifyRequest<
  RouteGenericInterface,
  RawServerDefault,
  IncomingMessage,
  FastifySchema,
  FastifyTypeProviderDefault,
  unknown,
  FastifyBaseLogger
>;

export interface MyReqUser
  extends FastifyRequest<
    RouteGenericInterface,
    RawServerDefault,
    IncomingMessage,
    FastifySchema,
    FastifyTypeProviderDefault,
    unknown,
    FastifyBaseLogger
  > {
  user: any;
}

export type MyReqUserWid = FastifyRequest<{ Querystring: { id: string } }>;
export type MyReqUserQuery = FastifyRequest<{
  Querystring: {
    categoryid?: string;
    page?: string;
    size?: string;
    status?: string;
  };
  user: any;
}>;

export type MyReqId = FastifyRequest<{
  Querystring: { id: string };
}>;

export type MyReqPage = FastifyRequest<{
  Querystring: { page: string; size: string };
}>;

export type ResDefault = FastifyReply<
  RawServerDefault,
  IncomingMessage,
  ServerResponse<IncomingMessage>,
  RouteGenericInterface,
  unknown,
  FastifySchema,
  FastifyTypeProviderDefault,
  unknown
>;
