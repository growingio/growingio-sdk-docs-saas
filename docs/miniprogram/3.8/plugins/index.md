---
sidebar_position: 5
title: 插件
---

以下我们列出了所有小程序SDK支持的插件，请按需加载使用。

一般只要您加载了插件功能会自动加载并启用，如果您不想使用其中的功能，移除对应插件即可。

插件在未明确标明有互斥的情况下可同时多个以数组的形式进行一次性注册。例：

```js
gdp('registerPlugins', [gioEventAutoTracking, gioCompress, gioImpressionTracking]);
```

## 无埋点插件（gioEventAutoTracking）

自动采集 `tap`、`longtap`、`change`、`submit` 事件的插件。<br />
[参考文档](/docs/miniprogram/3.8/plugins/eventAutoTracking)

## 半自动埋点浏览插件（gioImpressionTracking）

用户标记一个元素并提供埋点事件，SDK 负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件的插件。<br/>
[参考文档](/docs/miniprogram/3.8/plugins/impressionTracking)

## 数据加密压缩插件（gioCompress）

上报请求的数据进行加密压缩。<br />
[参考文档](/docs/miniprogram/3.8/plugins/compress)

## 多项目打通插件（gioMultiIntegrate）

当且仅当开发小程序时使用独立开发的分包 **（即主包与分包不在同一项目中且不同框架时）** 时，插件用于打通不同框架间用户数据和页面数据，合并为一个SDK运行逻辑。<br />
[参考文档](/docs/miniprogram/3.8/plugins/multiIntegrate)