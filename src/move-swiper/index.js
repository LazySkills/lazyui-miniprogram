// miniprogram_npm/lazyui-miniprogram/move-swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperH:{
      type:String,
      value:"70vh"
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.stretch(350)
      this.shrink(300)
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      "https://www.duoguyu.com/dist/flip/flipImg-1.jpg",
      "https://www.duoguyu.com/dist/flip/flipImg-2.jpg",
      "https://www.duoguyu.com/dist/flip/flipImg-3.jpg",
      "https://www.duoguyu.com/dist/flip/flipImg-4.jpg",
      "https://www.duoguyu.com/dist/flip/flipImg-5.jpg",
    ],
    swiperIndex: 0,
    current: 0,
    animationData: {},
    animationData2: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(e) {
      this.setData({
        current: e.detail.current
      })
      this.stretch(350)

      this.shrink(300)
    },
    // 收缩
    stretch(h) {
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.height(h).step()
      this.setData({
        animationData: animation.export(),
      })
    },
    // 展开
    shrink(h) {
      var animation2 = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      this.animation2 = animation2
      animation2.height(h).step()
      this.setData({
        animationData2: animation2.export()
      })
    },
  }
})
