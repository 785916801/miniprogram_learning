// pages/price/index.js

Page({
    data: {
      items: [],
    },
  
    onLoad: function () {
      this.fetchData();
    },
  
    fetchData: function () {
      wx.request({
        url: 'https://www.yuyouwen.top/api/steam?',
        data:{
            sort_by:"buy",
            platforms:"buff-igxe-uuyp-c5",
            min_volume:"2",
            min_price:"1",
            max_price:"5000",
            page_size:"5"
        },
        success: res => {
          if (res.data.success) {
            this.setData({ items: res.data.data });
          }
        },
        fail: err => {
          console.error(err);
        }
      });
    }
  });