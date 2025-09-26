import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const testDatabase_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { host, port, name, username, password } = body;
  if (!host || !port || !name || !username) {
    return {
      code: 1,
      message: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F",
      data: {
        success: false,
        message: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F"
      }
    };
  }
  if (host === "invalid-host") {
    return {
      code: 1,
      message: "\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25",
      data: {
        success: false,
        message: "\u65E0\u6CD5\u8FDE\u63A5\u5230\u6570\u636E\u5E93\u670D\u52A1\u5668"
      }
    };
  }
  return {
    code: 0,
    message: "\u6570\u636E\u5E93\u8FDE\u63A5\u6D4B\u8BD5\u6210\u529F",
    data: {
      success: true,
      message: "\u6570\u636E\u5E93\u8FDE\u63A5\u6B63\u5E38"
    }
  };
});

export { testDatabase_post as default };
//# sourceMappingURL=test-database.post.mjs.map
