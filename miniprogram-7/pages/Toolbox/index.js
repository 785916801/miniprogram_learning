Page({
    // 事件处理函数
    navigateToCalc: function() {
      wx.navigateTo({
        url: '../calc/index'
      })
    },
    navigateToCountdown: function() {
      wx.navigateTo({
        url: '../countdown/index'
      })
    },
    navigateToCounter: function() {
      wx.navigateTo({
        url: '../counter/index'
      })
    },
    navigateToStopwatch: function() {
      wx.navigateTo({
        url: '../stopwatch/index'
      })
    },
  })
  