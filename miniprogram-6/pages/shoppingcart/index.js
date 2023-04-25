// pages/shoppingcart/index.js
let globalData = getApp().globalData
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shoppingData:[],
        windowHeight:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({windowHeight:globalData.windowHeight})
    },
    calculate:function(){
        if(globalData.shoppingData.length==0){
            this.setData({
                totalPrice:0.00
            })
            return
        }
        let totalPrice = 0.00
        for(let item of globalData.shoppingData){
            totalPrice=parseFloat(totalPrice)+parseFloat(item.count*item.shoppingInfo.specfoods[0].price)
            this.setData({totalPrice:totalPrice.toFixed(2)})
        }
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
        this.setData({shoppingData:globalData.shoppingData,shoppingDataLength:globalData.shoppingData.length})
        this.calculate()
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