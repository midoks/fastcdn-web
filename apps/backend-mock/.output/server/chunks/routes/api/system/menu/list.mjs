import { e as eventHandler, u as unAuthorizedResponse, a as useResponseSuccess } from '../../../../nitro/nitro.mjs';
import { v as verifyAccessToken, e as MOCK_MENU_LIST } from '../../../../_/jwt-utils.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'jsonwebtoken';

const list = eventHandler(async (event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  return useResponseSuccess(MOCK_MENU_LIST);
});

export { list as default };
//# sourceMappingURL=list.mjs.map
