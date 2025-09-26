import { e as eventHandler, u as unAuthorizedResponse, a as useResponseSuccess } from '../../../nitro/nitro.mjs';
import { v as verifyAccessToken, d as MOCK_MENUS } from '../../../_/jwt-utils.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'jsonwebtoken';

const all = eventHandler(async (event) => {
  var _a, _b;
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  const menus = (_b = (_a = MOCK_MENUS.find((item) => item.username === userinfo.username)) == null ? void 0 : _a.menus) != null ? _b : [];
  return useResponseSuccess(menus);
});

export { all as default };
//# sourceMappingURL=all.mjs.map
