// pages/videoPlayer/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        name:"",
        artistAvatar:"",
        artistName:"",
        publishTime:"",
        playCount:"",
        relatedVideos:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const id = options.id;
        let _this = this;
        wx.request({
            url: 'http://localhost:3000/mv/url',
            data:{
                id:id
            },
            method: 'GET',
            success: function(res){
                _this.setData({
                    url: res.data.data.url
                })
            }
        })
        wx.request({
            url: 'http://localhost:3000/mv/detail',
            data:{
                mvid:id
            },
            method: 'GET',
            success: function(res){
                console.log(res)
                _this.setData({
                    playCount: res.data.data.playCount,
                    name: res.data.data.name,
                    artistAvatar: res.data.data.artists[0].img1v1Url,
                    artistName: res.data.data.artists[0].name,
                    publishTime: res.data.data.publishTime
                })
            }
        })
        wx.request({
            url: 'http://localhost:3000/simi/mv',
            data:{
                mvid:id
            },
            method: 'GET',
            success: function(res){
                _this.setData({
                    relatedVideos: res.data.mvs
                })
                console.log(res)
            }
        })
    },
    itemClick:function(e){
        console.log(e);
        const id = e.currentTarget.dataset.item.id;
        wx.navigateTo({
            url: '../videoPlayer/index?id='+id,
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