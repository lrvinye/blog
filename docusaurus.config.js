const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Lrvinye",
  tagline: "World Peace & Love",
  url: "http://blog.lrvinye.cn",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.lrvinye.cn/logo/cherryez/favicon-nobg.ico",
  organizationName: "lrvinye", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Lrvinye's Blog",
      logo: {
        alt: "lrvinye",
        src: "img/favicon.ico",
      },
      items: [
        {
          label: "👩‍💻运维",
          position: "left",
          to: "docs/devops/index",
          activeBasePath: "docs/devops",
        },
        {
          label: "🚀后端",
          position: "left",
          to: "docs/backend/index",
          activeBasePath: "docs/devops",
        },
        {
          label: "💻前端",
          position: "left",
          to: "docs/frontend/index",
          activeBasePath: "docs/devops",
        },
        {
          label: "🔗中间件",
          position: "left",
          to: "docs/middleware/index",
          activeBasePath: "docs/devops",
        },
        {
          label: "🔍解决方案",
          position: "left",
          to: "docs/solution/index",
          activeBasePath: "docs/devops",
        },
        {
          label: "📝记录",
          position: "left",
          to: "docs/memo/index",
          activeBasePath: "docs/devops",
        },
        {
          label: "🛫飞行",
          position: "left",
          to: "docs/flight/index",
          activeBasePath: "docs/devops",
        },
        {
          type: "doc",
          docId: "about",
          position: "right",
          label: "关于我",
        },
        {
          href: "https://github.com/lrvinye/blog",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    // announcementBar: {
    //   id: "producing", // Any value that will identify this message.
    //   content: "该产品正在组装中, 暂未上线运行",
    //   backgroundColor: "#f56432", // Defaults to `#fff`.
    //   textColor: "#fff", // Defaults to `#000`.
    //   isCloseable: true, // Defaults to `true`.
    // },
    footer: {
      style: "dark",
      links: [
        {
          title: "Useful Links",
          items: [
            {
              label: "Cherryez",
              href: "https://cherryez.com",
            },
            {
              label: "火花科技",
              href: "https://sparkye.com",
            },
            {
              label: "iBootCloud",
              href: "https://ibootcloud.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/lrvinye",
            },
          ],
        },
        {
          title: "Social Media",
          items: [
            {
              label: "ZhiHu 知乎",
              to: "https://www.zhihu.com/people/xi-da-43-53",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lrvinye, CN. Built with <a src='docusaurus.io'>Docusaurus</a>.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
