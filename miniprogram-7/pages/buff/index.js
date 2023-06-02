// pages/buff/index.js
Page({
    data: {
        items:[]
    },
    onLoad(options) {
        let _this = this;
        wx.getSystemInfo({
            success:function(res){
                _this.setData({windowWidth:res.windowWidth});
            }
        })
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
    },
    copyLink(e) {
        let id = e.currentTarget.dataset.id;
        wx.setClipboardData({
            data: 'https://buff.163.com/goods/' + id,
        }),
        setTimeout(function(){
            wx.showToast({
                title: '已复制BUFF链接',
                icon: 'success',
                duration: 2000
            })
        }, 50);
    }
})