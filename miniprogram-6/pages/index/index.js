// pages/index/index.js
import {seekNum} from '../../utils/seek.js'
import {commodit} from '../../data/data'
let globalData=getApp().globalData
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperHeight:0,
        commodit:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({commodit:commodit[0].foods.slice(0,10)})
    },
    imageload:function(){
        let query=wx.createSelectorQuery();
        query.select('.banner').boundingClientRect();
        let _this=this;
        query.exec((res) => {
            _this.setData({swiperHeight:res[0].height});
    })
    },
    addShoppingCart:function(e){
        const item=e.currentTarget.dataset.item
        let flag = seekNum(item.item_id,globalData)
        if(flag){
            globalData.shoppingData.push({shoppingInfo:item,count:1})
        }
        wx.showToast({
          title: '添加成功',
          icon:'success',
          duration:1000
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})