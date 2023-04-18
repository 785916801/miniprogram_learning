// pages/classification/index.js
import {commodit} from '../../data/data'
let globalData=getApp().globalData
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: 0,
        windowHeight:'',
        scrollInfoView: 'a0',
        shoppingDataLength:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({commodit,shoppingDataLength:globalData.shoppingData.length,windowHeight:globalData.windowHeight})
    },
    click:function(e){
        let leftTitleIndex=e.currentTarget.dataset.index
        let scrollInfoView='a'+leftTitleIndex
        this.setData({leftTitleIndex,scrollInfoView})
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