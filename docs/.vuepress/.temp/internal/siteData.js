export const siteData = JSON.parse("{\"base\":\"/myblog/\",\"lang\":\"en-US\",\"title\":\"JavaGuide\",\"description\":\"「Java学习 + 面试指南」涵盖 Java 程序员需要掌握的核心知识\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
