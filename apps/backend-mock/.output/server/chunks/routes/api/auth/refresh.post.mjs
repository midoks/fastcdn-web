import { d as defineEventHandler, f as forbiddenResponse } from '../../../nitro/nitro.mjs';
import { c as verifyRefreshToken, a as MOCK_USERS, g as generateAccessToken } from '../../../_/jwt-utils.mjs';
import { g as getRefreshTokenFromCookie, c as clearRefreshTokenCookie, s as setRefreshTokenCookie } from '../../../_/cookie-utils.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'jsonwebtoken';

const refresh_post = defineEventHandler(async (event) => {
  const refreshToken = getRefreshTokenFromCookie(event);
  if (!refreshToken) {
    return forbiddenResponse(event);
  }
  clearRefreshTokenCookie(event);
  const userinfo = verifyRefreshToken(refreshToken);
  if (!userinfo) {
    return forbiddenResponse(event);
  }
  const findUser = MOCK_USERS.find(
    (item) => item.username === userinfo.username
  );
  if (!findUser) {
    return forbiddenResponse(event);
  }
  const accessToken = generateAccessToken(findUser);
  setRefreshTokenCookie(event, refreshToken);
  return accessToken;
});

export { refresh_post as default };
//# sourceMappingURL=refresh.post.mjs.map
