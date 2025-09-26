import { e as eventHandler, u as unAuthorizedResponse, k as sleep, j as getQuery, l as usePageResponseSuccess } from '../../../nitro/nitro.mjs';
import { faker } from '@faker-js/faker';
import { v as verifyAccessToken } from '../../../_/jwt-utils.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'jsonwebtoken';

function generateMockDataList(count) {
  const dataList = [];
  for (let i = 0; i < count; i++) {
    const dataItem = {
      id: faker.string.uuid(),
      imageUrl: faker.image.avatar(),
      imageUrl2: faker.image.avatar(),
      open: faker.datatype.boolean(),
      status: faker.helpers.arrayElement(["success", "error", "warning"]),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      currency: faker.finance.currencyCode(),
      quantity: faker.number.int({ min: 1, max: 100 }),
      available: faker.datatype.boolean(),
      category: faker.commerce.department(),
      releaseDate: faker.date.past(),
      rating: faker.number.float({ min: 1, max: 5 }),
      description: faker.commerce.productDescription(),
      weight: faker.number.float({ min: 0.1, max: 10 }),
      color: faker.color.human(),
      inProduction: faker.datatype.boolean(),
      tags: Array.from(
        { length: 3 },
        () => faker.commerce.productAdjective()
      )
    };
    dataList.push(dataItem);
  }
  return dataList;
}
const mockData = generateMockDataList(100);
const list = eventHandler(async (event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  await sleep(600);
  const { page, pageSize, sortBy, sortOrder } = getQuery(event);
  const listData = structuredClone(mockData);
  if (sortBy && Reflect.has(listData[0], sortBy)) {
    listData.sort((a, b) => {
      if (sortOrder === "asc") {
        if (sortBy === "price") {
          return Number.parseFloat(a[sortBy]) - Number.parseFloat(b[sortBy]);
        } else {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        }
      } else {
        if (sortBy === "price") {
          return Number.parseFloat(b[sortBy]) - Number.parseFloat(a[sortBy]);
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      }
    });
  }
  return usePageResponseSuccess(page, pageSize, listData);
});

export { list as default };
//# sourceMappingURL=list.mjs.map
