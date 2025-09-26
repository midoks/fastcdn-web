import { d as defineEventHandler, a as useResponseSuccess } from '../../../nitro/nitro.mjs';
import { g as getRefreshTokenFromCookie, c as clearRefreshTokenCookie } from '../../../_/cookie-utils.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const logout_post = defineEventHandler(async (event) => {
  const refreshToken = getRefreshTokenFromCookie(event);
  if (!refreshToken) {
    return useResponseSuccess("");
  }
  clearRefreshTokenCookie(event);
  return useResponseSuccess("");
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
