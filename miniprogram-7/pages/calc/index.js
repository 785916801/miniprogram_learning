//index.js
//获取应用实例
var app = getApp()
var calc = require("../../utils/calc")
Page({
  data: {
    calc: {},
    tapped: {}
  },
  btnClicked: function(e){
    var code = e.target.dataset.op
    calc.addOp(code)
    this.setData({calc: calc.getVars()})
  },
  btnTouchStart: function(e){
    var code = e.target.dataset.op
    var tapped = {[code]: 'active'}
    this.setData({tapped: tapped})
  },
  btnTouchEnd: function(e){
    var code = e.target.dataset.op
    var tapped = {}
    this.setData({tapped: tapped})
  },
  onLoad: function () {
    calc.reset()
    var that = this
  }
})
