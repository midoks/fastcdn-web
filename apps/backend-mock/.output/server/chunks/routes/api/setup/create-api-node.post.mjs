import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const createApiNode_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { host, port, protocol } = body;
  if (!host || !port || !protocol) {
    return {
      code: 1,
      message: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684API\u8282\u70B9\u4FE1\u606F",
      data: {
        success: false,
        message: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684API\u8282\u70B9\u4FE1\u606F"
      }
    };
  }
  if (port === 80 || port === 443) {
    return {
      code: 1,
      message: "API\u8282\u70B9\u521B\u5EFA\u5931\u8D25",
      data: {
        success: false,
        message: "\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u8BF7\u9009\u62E9\u5176\u4ED6\u7AEF\u53E3"
      }
    };
  }
  return {
    code: 0,
    message: "API\u8282\u70B9\u521B\u5EFA\u6210\u529F",
    data: {
      success: true,
      message: "API\u8282\u70B9\u5DF2\u6210\u529F\u521B\u5EFA\u5E76\u542F\u52A8",
      nodeId: `node_${Date.now()}`,
      secret: `secret_${Math.random().toString(36).substring(2)}`
    }
  };
});

export { createApiNode_post as default };
//# sourceMappingURL=create-api-node.post.mjs.map
