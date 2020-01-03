// miniprogram_npm/lazyui-miniprogram/move-swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperH:{
      type:String,
      value:"40vh"
    },
    swiperW: {
      type: String,
      value: "500rpx"
    },
    bannerData: {
      type: Array,
      value: [
        {
          'id': 1, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-1.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s1.jpg', 'title': '阿丽塔：战斗天使', 'isOpenFilp': false, 'lines': '“我们应该到那里去，我们属于那里。” \n“不，我们不属于任何地方，除了彼此身边。”', 'score': '7.6', 'releaseDate': '2019/02/22', 'otherInfo': 'Alita: Battle Angel'
        },
        {
          'id': 2, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-2.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s2.jpg', 'title': '我不是药神', 'isOpenFilp': false, 'lines': '你是不是看不起我？ \n\n是…以前是…', 'score': '9.0', 'releaseDate': '2018/07/05', 'otherInfo': 'Dying to Survive'
        },
        { 'id': 3, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-3.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s3.jpg', 'title': '风语咒', 'isOpenFilp': false, 'lines': '人法地法天法道法自然，传说中的神功根本就不是练出来的，人与自然本就是一体的。\n\n我即是自然，自然即是我。\n我在驭风，风在驭我。', 'score': '6.9', 'releaseDate': '2018/08/03', 'otherInfo': 'The Wind Guardians' },
        { 'id': 4, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-4.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s4.jpg', 'title': '飞驰人生', 'isOpenFilp': false, 'lines': '巴音布鲁克，1462道弯，109公里。耍小聪明，赢得了一百米，赢不了一百公里。\n\n你问我绝招？\n绝招只有两个字：奉献。\n就是把你的全部奉献给你所热爱的一切。\n你并不是征服了这片土地，你只是战胜了你的对手。', 'score': '7.2', 'releaseDate': '2019/02/05', 'otherInfo': 'Pegasus' },
        {
          'id': 5, 'focus': 'https://www.duoguyu.com/dist/flip/flipImg-5.jpg', 'img': 'https://www.duoguyu.com/dist/flip/flipImg-s5.jpg', 'title': '大黄蜂', 'isOpenFilp': false, 'lines': '"You kissed me!" \n"On the cheek."\n"Still counts, still counts."', 'score': '7.0', 'releaseDate': '2019/01/04', 'otherInfo': 'Bumblebee'
        },
      ],
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.stretch("100%")
      this.shrink("95%")
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    swiperIndex: 0,
    current: 0,
    animationData: {},
    animationData2: {},
    activePT: "-20rpx"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(e) {
      this.setData({
        current: e.detail.current,
      })
      this.stretch("100%")

      this.shrink("95%")
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
