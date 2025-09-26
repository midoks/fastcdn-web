import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const install_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    apiHost,
    apiPort,
    apiProtocol,
    apiType,
    nodeId,
    secret,
    databaseHost,
    databasePort,
    databaseName,
    databaseUsername,
    databasePassword,
    adminUsername,
    adminPassword,
    adminEmail
  } = body;
  if (!apiHost || !apiPort || !databaseHost || !databasePort || !databaseName || !databaseUsername || !adminUsername || !adminPassword) {
    return {
      code: 1,
      message: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u5B89\u88C5\u4FE1\u606F",
      data: {
        success: false,
        message: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u5B89\u88C5\u4FE1\u606F"
      }
    };
  }
  if (adminUsername === "root") {
    return {
      code: 1,
      message: "\u7CFB\u7EDF\u5B89\u88C5\u5931\u8D25",
      data: {
        success: false,
        message: "\u7BA1\u7406\u5458\u7528\u6237\u540D\u4E0D\u80FD\u4E3Aroot\uFF0C\u8BF7\u9009\u62E9\u5176\u4ED6\u7528\u6237\u540D"
      }
    };
  }
  if (adminPassword.length < 6) {
    return {
      code: 1,
      message: "\u7CFB\u7EDF\u5B89\u88C5\u5931\u8D25",
      data: {
        success: false,
        message: "\u7BA1\u7406\u5458\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E6\u4F4D"
      }
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  return {
    code: 0,
    message: "\u7CFB\u7EDF\u5B89\u88C5\u6210\u529F",
    data: {
      success: true,
      message: "FastCDN\u7CFB\u7EDF\u5B89\u88C5\u5B8C\u6210\uFF0C\u8BF7\u4F7F\u7528\u7BA1\u7406\u5458\u8D26\u53F7\u767B\u5F55"
    }
  };
});

export { install_post as default };
//# sourceMappingURL=install.post.mjs.map
