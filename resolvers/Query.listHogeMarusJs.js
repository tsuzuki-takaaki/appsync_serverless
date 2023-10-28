import { util } from '@aws-appsync/utils';

export function request(ctx) {
  return {
    "version" : "2017-02-28",
    "operation" : "Scan",
  };
}

export function response(ctx) {
  return ctx.result.items;
}

