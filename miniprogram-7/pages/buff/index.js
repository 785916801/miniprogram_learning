// pages/index/index.js
Page({
    data: {
        items:[]
    },
    onLoad(options) {
        let _this = this;
        wx.request({
            url:'https://buff.163.com/api/market/goods',
            data:{
                game:"csgo",
                page_size:"80"
            },
            header:{
                'content-type': 'application/x-www-form-urlencoded'
            },
            method:'GET',
            success(res){
                _this.setData({
                    items:res.data.data.items
                })
            }
        })
    }
})