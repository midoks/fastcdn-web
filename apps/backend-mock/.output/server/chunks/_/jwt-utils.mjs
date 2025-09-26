import { m as getHeader } from '../nitro/nitro.mjs';
import jwt from 'jsonwebtoken';

const MOCK_USERS = [
  {
    id: 0,
    password: "123456",
    realName: "Vben",
    roles: ["super"],
    username: "vben"
  },
  {
    id: 1,
    password: "123456",
    realName: "Admin",
    roles: ["admin"],
    username: "admin",
    homePath: "/workspace"
  },
  {
    id: 2,
    password: "123456",
    realName: "Jack",
    roles: ["user"],
    username: "jack",
    homePath: "/analytics"
  }
];
const MOCK_CODES = [
  // super
  {
    codes: ["AC_100100", "AC_100110", "AC_100120", "AC_100010"],
    username: "vben"
  },
  {
    // admin
    codes: ["AC_100010", "AC_100020", "AC_100030"],
    username: "admin"
  },
  {
    // user
    codes: ["AC_1000001", "AC_1000002"],
    username: "jack"
  }
];
const dashboardMenus = [
  {
    meta: {
      order: -1,
      title: "page.dashboard.title"
    },
    name: "Dashboard",
    path: "/dashboard",
    redirect: "/analytics",
    children: [
      {
        name: "Analytics",
        path: "/analytics",
        component: "/dashboard/analytics/index",
        meta: {
          affixTab: true,
          title: "page.dashboard.analytics"
        }
      },
      {
        name: "Workspace",
        path: "/workspace",
        component: "/dashboard/workspace/index",
        meta: {
          title: "page.dashboard.workspace"
        }
      }
    ]
  }
];
const createDemosMenus = (role) => {
  const roleWithMenus = {
    admin: {
      component: "/demos/access/admin-visible",
      meta: {
        icon: "mdi:button-cursor",
        title: "demos.access.adminVisible"
      },
      name: "AccessAdminVisibleDemo",
      path: "/demos/access/admin-visible"
    },
    super: {
      component: "/demos/access/super-visible",
      meta: {
        icon: "mdi:button-cursor",
        title: "demos.access.superVisible"
      },
      name: "AccessSuperVisibleDemo",
      path: "/demos/access/super-visible"
    },
    user: {
      component: "/demos/access/user-visible",
      meta: {
        icon: "mdi:button-cursor",
        title: "demos.access.userVisible"
      },
      name: "AccessUserVisibleDemo",
      path: "/demos/access/user-visible"
    }
  };
  return [
    {
      meta: {
        icon: "ic:baseline-view-in-ar",
        keepAlive: true,
        order: 1e3,
        title: "demos.title"
      },
      name: "Demos",
      path: "/demos",
      redirect: "/demos/access",
      children: [
        {
          name: "AccessDemos",
          path: "/demosaccess",
          meta: {
            icon: "mdi:cloud-key-outline",
            title: "demos.access.backendPermissions"
          },
          redirect: "/demos/access/page-control",
          children: [
            {
              name: "AccessPageControlDemo",
              path: "/demos/access/page-control",
              component: "/demos/access/index",
              meta: {
                icon: "mdi:page-previous-outline",
                title: "demos.access.pageAccess"
              }
            },
            {
              name: "AccessButtonControlDemo",
              path: "/demos/access/button-control",
              component: "/demos/access/button-control",
              meta: {
                icon: "mdi:button-cursor",
                title: "demos.access.buttonControl"
              }
            },
            {
              name: "AccessMenuVisible403Demo",
              path: "/demos/access/menu-visible-403",
              component: "/demos/access/menu-visible-403",
              meta: {
                authority: ["no-body"],
                icon: "mdi:button-cursor",
                menuVisibleWithForbidden: true,
                title: "demos.access.menuVisible403"
              }
            },
            roleWithMenus[role]
          ]
        }
      ]
    }
  ];
};
const MOCK_MENUS = [
  {
    menus: [...dashboardMenus, ...createDemosMenus("super")],
    username: "vben"
  },
  {
    menus: [...dashboardMenus, ...createDemosMenus("admin")],
    username: "admin"
  },
  {
    menus: [...dashboardMenus, ...createDemosMenus("user")],
    username: "jack"
  }
];
const MOCK_MENU_LIST = [
  {
    id: 1,
    name: "Workspace",
    status: 1,
    type: "menu",
    icon: "mdi:dashboard",
    path: "/workspace",
    component: "/dashboard/workspace/index",
    meta: {
      icon: "carbon:workspace",
      title: "page.dashboard.workspace",
      affixTab: true,
      order: 0
    }
  },
  {
    id: 2,
    meta: {
      icon: "carbon:settings",
      order: 9997,
      title: "system.title",
      badge: "new",
      badgeType: "normal",
      badgeVariants: "primary"
    },
    status: 1,
    type: "catalog",
    name: "System",
    path: "/system",
    children: [
      {
        id: 201,
        pid: 2,
        path: "/system/menu",
        name: "SystemMenu",
        authCode: "System:Menu:List",
        status: 1,
        type: "menu",
        meta: {
          icon: "carbon:menu",
          title: "system.menu.title"
        },
        component: "/system/menu/list",
        children: [
          {
            id: 20101,
            pid: 201,
            name: "SystemMenuCreate",
            status: 1,
            type: "button",
            authCode: "System:Menu:Create",
            meta: { title: "common.create" }
          },
          {
            id: 20102,
            pid: 201,
            name: "SystemMenuEdit",
            status: 1,
            type: "button",
            authCode: "System:Menu:Edit",
            meta: { title: "common.edit" }
          },
          {
            id: 20103,
            pid: 201,
            name: "SystemMenuDelete",
            status: 1,
            type: "button",
            authCode: "System:Menu:Delete",
            meta: { title: "common.delete" }
          }
        ]
      },
      {
        id: 202,
        pid: 2,
        path: "/system/dept",
        name: "SystemDept",
        status: 1,
        type: "menu",
        authCode: "System:Dept:List",
        meta: {
          icon: "carbon:container-services",
          title: "system.dept.title"
        },
        component: "/system/dept/list",
        children: [
          {
            id: 20401,
            pid: 201,
            name: "SystemDeptCreate",
            status: 1,
            type: "button",
            authCode: "System:Dept:Create",
            meta: { title: "common.create" }
          },
          {
            id: 20402,
            pid: 201,
            name: "SystemDeptEdit",
            status: 1,
            type: "button",
            authCode: "System:Dept:Edit",
            meta: { title: "common.edit" }
          },
          {
            id: 20403,
            pid: 201,
            name: "SystemDeptDelete",
            status: 1,
            type: "button",
            authCode: "System:Dept:Delete",
            meta: { title: "common.delete" }
          }
        ]
      }
    ]
  },
  {
    id: 9,
    meta: {
      badgeType: "dot",
      order: 9998,
      title: "demos.vben.title",
      icon: "carbon:data-center"
    },
    name: "Project",
    path: "/vben-admin",
    type: "catalog",
    status: 1,
    children: [
      {
        id: 901,
        pid: 9,
        name: "VbenDocument",
        path: "/vben-admin/document",
        component: "IFrameView",
        type: "embedded",
        status: 1,
        meta: {
          icon: "carbon:book",
          iframeSrc: "https://doc.vben.pro",
          title: "demos.vben.document"
        }
      },
      {
        id: 902,
        pid: 9,
        name: "VbenGithub",
        path: "/vben-admin/github",
        component: "IFrameView",
        type: "link",
        status: 1,
        meta: {
          icon: "carbon:logo-github",
          link: "https://github.com/vbenjs/vue-vben-admin",
          title: "Github"
        }
      },
      {
        id: 903,
        pid: 9,
        name: "VbenAntdv",
        path: "/vben-admin/antdv",
        component: "IFrameView",
        type: "link",
        status: 0,
        meta: {
          icon: "carbon:hexagon-vertical-solid",
          badgeType: "dot",
          link: "https://ant.vben.pro",
          title: "demos.vben.antdv"
        }
      }
    ]
  },
  {
    id: 10,
    component: "_core/about/index",
    type: "menu",
    status: 1,
    meta: {
      icon: "lucide:copyright",
      order: 9999,
      title: "demos.vben.about"
    },
    name: "About",
    path: "/about"
  }
];
function getMenuIds(menus) {
  const ids = [];
  menus.forEach((item) => {
    ids.push(item.id);
    if (item.children && item.children.length > 0) {
      ids.push(...getMenuIds(item.children));
    }
  });
  return ids;
}

const ACCESS_TOKEN_SECRET = "access_token_secret";
const REFRESH_TOKEN_SECRET = "refresh_token_secret";
function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
}
function generateRefreshToken(user) {
  return jwt.sign(user, REFRESH_TOKEN_SECRET, {
    expiresIn: "30d"
  });
}
function verifyAccessToken(event) {
  const authHeader = getHeader(event, "Authorization");
  if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer"))) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    const username = decoded.username;
    const user = MOCK_USERS.find((item) => item.username === username);
    const { password: _pwd, ...userinfo } = user;
    return userinfo;
  } catch {
    return null;
  }
}
function verifyRefreshToken(token) {
  try {
    const decoded = jwt.verify(token, REFRESH_TOKEN_SECRET);
    const username = decoded.username;
    const user = MOCK_USERS.find((item) => item.username === username);
    const { password: _pwd, ...userinfo } = user;
    return userinfo;
  } catch {
    return null;
  }
}

export { MOCK_CODES as M, MOCK_USERS as a, generateRefreshToken as b, verifyRefreshToken as c, MOCK_MENUS as d, MOCK_MENU_LIST as e, getMenuIds as f, generateAccessToken as g, verifyAccessToken as v };
//# sourceMappingURL=jwt-utils.mjs.map
