import { e as eventHandler, u as unAuthorizedResponse, k as sleep, a as useResponseSuccess } from '../../../../nitro/nitro.mjs';
import { v as verifyAccessToken } from '../../../../_/jwt-utils.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'jsonwebtoken';

const _post = eventHandler(async (event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  await sleep(600);
  return useResponseSuccess(null);
});

export { _post as default };
//# sourceMappingURL=.post.mjs.map
