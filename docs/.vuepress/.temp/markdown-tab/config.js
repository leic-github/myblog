import { CodeTabs } from "C:/envirment/code/vue/myblog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_90b8478ed452cb31b5829ae49a883bd3/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/envirment/code/vue/myblog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_90b8478ed452cb31b5829ae49a883bd3/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/envirment/code/vue/myblog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_90b8478ed452cb31b5829ae49a883bd3/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
