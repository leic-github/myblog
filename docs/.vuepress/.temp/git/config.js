import { GitContributors } from "C:/envirment/code/vue/myblog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_e05c94365c3271625fd5756ab4cec4ba/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/envirment/code/vue/myblog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_e05c94365c3271625fd5756ab4cec4ba/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
