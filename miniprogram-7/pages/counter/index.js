// index.js
Page({
    data: {
      count: 0
    },
    increase: function() {
      this.setData({
        count: this.data.count + 1
      });
    },
    decrease: function() {
      if (this.data.count > 0) {
        this.setData({
          count: this.data.count - 1
        });
      }
    },
    reset: function() {
      this.setData({
        count: 0
      });
    }
  })
  