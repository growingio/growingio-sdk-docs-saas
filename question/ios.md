---
sidebar_position: 3
title: iOS 常见问题
---

### 1. 如何禁用GrowingIO iOS SDK 调用获取 IDFA 相关代码？
**A：**使用场景：三方监测机构扫描APP或APP上架发现 GIO SDK 有调用有获取IDFA 相关代码（如儿童类应用），且APP中又没有使 用IDFA时（此时IDFA不会被作为访问用户ID）。<br/>
只添加依赖库就可以实现，原理是: 依赖库中定义有宏，SDK会根据宏判断，是否执行获取代码
```C
pod 'GrowingAnalytics/DISABLE_IDFA'
```

### 2. iOS SDK pod install 提示 could not find compatible versions，该怎么处理？
如图: <br/>
![noversions](../static/img/question/noversions.png)

**A：** 按照提示执行命令，或切换网络环境，大部分是网络环境问题无法下砸依赖。

### 3：App一开始禁止了`IDFA`权限，后续允许了`IDFA` 权限，数据会有什么变化？

A：对于`IDFA`，App生命周期内，`IDFA` 只会获取一次，就算后续 IDFA 权限打开了，也不会再获取，可以在下一次App启动后生效。对于 设备标识，仅且在 App第一次启动时生成，后续不再改变，优先级为 `IDFA`> `IDFV` > 随机字符串，如果 `IDFA` 无法获取，则会使用`IDFV` 且不再变动，会存入`Keychain`，卸载也无法修改。如果要设备标识 和 `IDFA` 绑定，则需要在用户同意 `IDFA`权限之后进行第一次SDK初始化操作。

### 4.延迟初始化之后，发现丢掉了部分事件，为什么？
**A：**对于SDK初始化之前，或者开启数据采集之前发生的事件，一概丢弃。

### 5. pod install/update更新慢，该怎么解决
**A：**
1. 执行以下命令
```c
pod repo remove master
pod repo add master https://gitee.com/mirrors/CocoaPods-Specs.git
pod repo update
```
2. 科学上网



### 6.集成SDK后，为什么接收不到数据？
**A：**
* dataCollectionServerHost、accountId 、dataSoueceId 配置错误
* 服务端网络环境是否可访问

### 7. SDK如何支持合规，以及GDPR（欧盟《一般数据保护条例》）？
**A：**参考[iOS SDK合规说明](/docs/compliance/iosCompliance)
