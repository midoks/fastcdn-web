import { e as eventHandler, u as unAuthorizedResponse, a as useResponseSuccess } from '../../../nitro/nitro.mjs';
import { v as verifyAccessToken, M as MOCK_CODES } from '../../../_/jwt-utils.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'jsonwebtoken';

const codes = eventHandler((event) => {
  var _a, _b;
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  const codes = (_b = (_a = MOCK_CODES.find((item) => item.username === userinfo.username)) == null ? void 0 : _a.codes) != null ? _b : [];
  return useResponseSuccess(codes);
});

export { codes as default };
//# sourceMappingURL=codes.mjs.map
