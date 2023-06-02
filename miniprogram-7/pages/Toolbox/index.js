Page({
    onLoad(options) {
        let _this = this;
        wx.getSystemInfo({
            success:function(res){
                _this.setData({windowHeight:res.windowHeight});
            }
        })
    },
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
  