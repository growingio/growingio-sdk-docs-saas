---
title: 初始化配置
sidebar_position: 2
---

小程序SDK在初始化时，接收最后一个对象参数作为初始化配置项，基本格式如下：

```javascript
gdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    ...其他配置项(可配置项见下表)
});
```

## 初始化可配置项

>  该表格列出了当前sdk内置的配置项，但也可以根据插件来新增自定义配置。

| **字段名**            | **参数类型**  | **必填** | **默认值**     | **说明**                                                                                                           |
| --------------------- | ------------- | -------- | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| `autotrack`           | `boolean`     | 否       | `true`         | 是否开启无埋点采集<br />影响事件：`VIEW_CLICK, VIEW_CHANGE, FORM_SUBMIT`                                           |
| `comAsPage`           | `boolean`     | 否       | `false`        | 是否将 Component 当做 Page 处理                                                                                    |
| `dataCollect`         | `boolean`     | 否       | `true`         | 是否开启数据采集                                                                                                   |
| `debug`               | `boolean`     | 否       | `false`        | 是否开启 debug 模式                                                                                                |
| `followShare`         | `boolean`     | 否       | `true`         | 是否跟踪分享数据                                                                                                   |
| `forceLogin`          | `boolean`     | 否       | `false`        | 是否开启 forceLogin 强制登录模式                                                                                   |
| `getLocation`         | `object`      | 否       | `见下两项配置` | 获取位置配置项                                                                                                     |
| `getLocation.autoGet` | `boolean`     | 否       | `false`        | 自动获取用户位置信息（需要用户授权）                                                                               |
| `getLocation.type`    | `wgs84/gcj02` | 否       | `wgs84`        | 坐标系类型。wgs84：标准坐标系；gcj02：火星坐标系                                                                   |
| `host`                | `string`      | 是       | `-`            | 数据上报地址                                                                                                       |
| `ignoreFields`        | `string[]`    | 否       | `-`            | 要忽略的字段仅支持以下字段:<br />`networkState,screenHeight,screenWidth`<br />`deviceBrand,deviceModel,deviceType` |
| `taro`                | `any`         | 否       | `-`            | 使用 Taro 开发时使用的实例                                                                                         |
| `usePlugin`           | `boolean`     | 否       | `false`        | 是否使用第三方插件                                                                                                 |
| `version`             | `string`      | 否       | `-`            | 小程序应用版本（建议填写)                                                                                          |
| `vue`                 | `any`         | 否       | `-`            | 使用 uni-app/mpvue/WePY 开发时使用的实例                                                                           |

## 详细说明

### 设置无埋点(autotrack)

默认情况下，SDK开启无埋点采集。如果您不需要无埋点采集，可以通过指定 `autotrack: false` 关闭。
关闭无埋点后 `VIEW_CLICK, VIEW_CHANGE, FORM_SUBMIT` 事件将不会再被采集和上报。

### 设置数据采集(dataCollect)

默认情况下，SDK开启数据采集。如果您需要初始化时暂时关闭数据采集，可以通过指定 `dataCollect: false` 关闭。
初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

### 开启调试模式(debug)

在开发时设置 `debug: true`，打开浏览器控制台，即可看到实时采集的数据。

### 设置跟踪分享数据(followShare)

默认情况下，SDK开启跟踪分享数据功能，详细的进行转发分享的统计，来帮助您更好的分析。如您不需要此功能，可以通过指定 `followShare: false` 来关闭跟踪分享。

在分享回调方法中，添加 `contentType` 和 `contentId` 字段。例：
```js
onShareAppMessage: function() {
    return {
        title: '自定义转发标题',
        path: 'xxxxxx',
        contentType: '内容类型',
        contentId: '内容ID'
    }
}
```
### 设置强制登录模式(forceLogin)

默认情况下，SDK通过自动生成的 uid 上报标识用户。如您需要根据 openId 标识用户，可以通过指定 `forceLogin: true` 来打开强制登录模式。
打开后SDK会暂停上报数据，待用户登录获取 openId，调用 `identify` 方法设置 访问用户id 为 openId 后继续数据采集，以此来关联用户。

```js
gdp('identify', openId);
```

:::caution 注意：
如果用户在打开您的微信小程后没有使用微信授权登录，但是小程序配置了forceLogin为true，会导致SDK不能采集数据，访问数据将大幅减少。如果您不能确定是否要设置这个参数，请先咨询我们。
:::

### 获取地理位置信息(getLocation)

默认情况下，SDK不会自动在小程序启动时获取用户的地理位置信息。如您需要在小程序打开时获取用户地理位置信息，可以通过指定 `autoGet: true` 来打开此功能。
```js
getLocation: {          //是否自动获取用户的地理位置信息, 并设置获取方式
   autoGet: true,       //默认不自动获取
   type: 'wgs84'        //支持 wgs84（标准坐标系） | gcj02（火星坐标系）, 默认wgs84
},
```
***tips：注意打开默认获取地理位置信息功能后，用户打开小程序即需要授权，请适当考虑是否会影响用户使用心理。***

<!-- 如果您默认没有打开此功能，当用户访问至某一功能需要位置信息时，可以手动调用地理位置接口，自动补发VISIT，采集位置信息，提升用户地域分布的分析准确性。
```js
gdp('getLocation');      // 获取用户的地理位置信息并上报
``` -->

### 设置忽略字段(ignoreFields)

默认情况下，SDK会上报网络和设备的相关信息。如果您不需要这些数据，可以通过指定 `ignoreFields: [xxx,xxx]` 来忽略指定字段的上报。
您可以指定一项或多项字段，但均需为数组格式进行设置。