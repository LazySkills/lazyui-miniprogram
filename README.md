# lazyui-miniprogram

a simple and practical lazyui-miniprogram package

## 安装

1. 创建小程序项目

2. 进入项目

3. 打开命令行

4. 初始化`package.json`文件

```node
npm init
```

5. 安装`lazyui-miniprogram`

```node
npm install lazyui-miniprogram -S --production
```


6. 打开小程序编辑器

    1. 找到`工具`工具栏
    2. 找到`工具`工具栏下`构建 npm`功能
    3. 点击`构建 npm`
    
7. 看看小程序项目根目录下，生成的`miniprogram_npm`

    里面就是编译的小程序文件
    

## 使用

### `iconfont`使用

对对对，你没有看出，就是阿里的`iconfont`

#### 配置根目录下`iconfont.wxss`文件内容

只需要下载好阿里云`iconfont.cn`项目组中`font class`字体样式文件

然后用下载文件`字体.css`文件内容替换根目录下`iconfont.wxss`文件

#### 使用需要在`.json`文件中，引用`iconfont`组件

```json
{
  "usingComponents": {
    "iconfont": "/miniprogram_npm/lazyui-miniprogram/iconfont/iconfont"
  }
}
```

#### 在`.wxml`文件中，使用`iconfont`组件

没错，只需要写字体图标的名字

```xml
<iconfont icon="iconname" color="#fff333"></iconfont>
```

### 自定义`tabbar`使用

> 前提条件是准备好 `iconfont` 的配置

#### 然后在项目根目录下配置文件`tabBar.js`

默认格式类似于微信`tabBar`配置

```
module.exports = {
  selected: 0,  # 选中list下标
  color: "#7A7E83", # 默认颜色
  size: "50rpx", # 字体大小
  selectedColor: "#3cc51f", # 选中颜色
  list: [{ # tabBar 列表
    iconPath: "iconxingqiu", # iconfont 字体图标`font class`名称
    pagePath: "/pages/index/index", # 跳转页面路径
    text: "组件" # `tabBar` 名称
  }, {
    pagePath: "/pages/logs/logs",
    iconPath: "iconredu",
    selectedIconColor: "iconredu",
    text: "接口"
  }]
}
```

#### 在需要使用的`.JSON`文件引用组件

```
{
  "usingComponents": {
    "tabbar":"/miniprogram_npm/lazyui-miniprogram/tabbar/tabbar"
  }
}
```

#### 在`.wxml`文件中使用组件

```
<tabbar></tabbar>
```