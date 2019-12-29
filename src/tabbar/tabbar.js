import tabBar from '../../../tabBar.js'
Component({
  /**
   * 组件的初始数据
   */

  data: {
    selected: 0,
    color: "#7A7E83",
    size: "45rpx",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "iconxingqiu",
      text: "组件"
    }, {
      pagePath: "/pages/logs/logs",
      iconPath: "iconredu",
      selectedIconColor: "iconredu",
      text: "接口"
    }]
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
      wx.navigateTo({
        url: data.path,
      })
    }
  }
})