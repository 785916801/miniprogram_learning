Page({
  now: {
    temp:"",
    low:"",
    high:"",
    type:"",
    windDir:"",
    windScale:"",
    weather:"",
  },
  getnowWeather: function() {
    var that = this
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?',
      data: {
        location:101280109,
        key:'f924bd0c1fd3445aa1dbeeb6afe78639'
      },
      success: function(res) {
        that.setData({
          temp: res.data.now.temp,
          type: res.data.now.text,
          windDir: res.data.now.windDir,
          windScale: res.data.now.windScale
        })
      }
    })
  },
  get7dWeather: function() {
    var that = this
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/7d?',
      data: {
        location:101280109,
        key:'f924bd0c1fd3445aa1dbeeb6afe78639'
      },
      success: function(res) {
        that.setData({
          daily: res.data.daily,
          low: res.data.daily[0].tempMin,
          high: res.data.daily[0].tempMax,
        })
      }
    })
  },
  onLoad:function () {
    this.getnowWeather()
    this.get7dWeather()
  },
})
