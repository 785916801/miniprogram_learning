// pages/class/index.js
import data from "../../data/data"
Page({
  data: {
    temp:"11.4",
    low:"8.1",
    high:"19.1",
    type:"大雾",
    city:"下北泽",
    week:"疯狂星期四",
    weather:"天气好得很",
    weatherData: [],
    testData:[]
  },
  onLoad(options) {
    let _this = this
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup',
      data:{
        location:101280109,
        key:'f924bd0c1fd3445aa1dbeeb6afe78639'
      },
      success:function(res){
        _this.setData({testData:res})
        
      }
    })
    this.setData({
      weatherData: data
    })
  }
})