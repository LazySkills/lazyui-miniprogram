import tabBar from '../../../tabBar.js'
Component({
  /**
   * 组件的初始数据
   */

  data: {
    selected: 0,
    color: "#ccc",
    size: "50rpx",
    weight: "bolder",
    selectedColor: "#ffcace",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "icontarget",
        text: "最新"
      }, 
      {
        pagePath: "/pages/logs/logs",
        iconPath: "iconballoons",
        text: "热门"
      },
      {
        pagePath: "/pages/user/index",
        iconPath: "iconin-love",
        text: "我的"
      }
    ]
  },
  lifetimes: {
    attached: function () {
      this.initTabBarData()
      this.setData({
        selected: this.getSelecTabbarIndex()
      })
    }
  },
  methods: {
    initTabBarData(){
      if (Object.keys(tabBar).length == 0) {
        console.log("请在根目录下建立并配置'tabBar.js'文件,内容见：https://www.npmjs.com/package/lazyui-miniprogram")
      }else{
        if (Object.keys(tabBar.list).length > 5 || Object.keys(tabBar.list).length == 0){
          console.error("`tabBar.js`配置中`list`选项应该为1-5个集合,你给的是"+Object.keys(tabBar.list).length)
        }
        this.setData(tabBar)
      }
    },
    setSelectTabbarIndex(index) {
      try {
        wx.setStorageSync('tabbar.selected', index)
      } catch (e) {}
    },
    getSelecTabbarIndex() {
      try {
        var value = wx.getStorageSync('tabbar.selected')
        if (value) {
          return value
        }
      } catch (e) {
        
      }
      return 0
    },
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setSelectTabbarIndex(data.index)
      wx.switchTab({
        url
      })
      if (this.getCurrentPageUrl() !== data.path){
        wx.navigateTo({
          url: data.path,
        })
      }
      
    },
    getCurrentPageUrl() {
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      const url = `/${currentPage.route}`
      return url
    }
  }
})